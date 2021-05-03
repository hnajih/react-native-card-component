import React from 'react';
import { View, Text, TextStyle } from 'react-native';

interface TitleProps {
  text: string;
  fontSize?: number;
  color?: string;
  align?: 'left' | 'right' | 'center';
  bold?: boolean;
  style?: TextStyle;
}

const Title = (props: TitleProps) => {
  const {
    text,
    fontSize = 18,
    color,
    align: textAlign = 'left',
    bold,
    style,
  } = props;

  return (
    <View style={{ flexDirection: 'row' }}>
      <Text
        style={[
          {
            fontSize,
            color,
          },
          { textAlign },
          bold && { fontWeight: 'bold' },
          { marginTop: 5, marginBottom: 10 },
          { flex: 1 },
          style,
        ]}
      >
        {text}
      </Text>
    </View>
  );
};

export default Title;
