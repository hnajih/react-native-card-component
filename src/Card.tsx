import React from 'react';
import {
  View,
  TouchableOpacity,
  ImageBackground,
  ViewStyle,
} from 'react-native';

import Content from './Content';
import Title from './Title';
import Thumbnail from './Thumbnail';
import Row from './Row';
import Col from './Col';

type CardProps = {
  children?: React.ReactNode;
  containerStyle?: ViewStyle;
  radius?: number;
  flex?: boolean;
  width?: number;
  row?: boolean;
  elevation?: boolean;
  bg?: string;
  img_bg?: string;
  onPress?: () => void;
};

const Card = (props: CardProps) => {
  const {
    children,
    containerStyle,
    radius = 5,
    flex,
    width,
    row,
    elevation = true,
    bg = 'white',
    img_bg,
    onPress,
  } = props;

  const component = (
    <View
      style={[
        { overflow: 'hidden' },
        { backgroundColor: bg },
        elevation && {
          borderWidth: 0.5,
          borderColor: '#ccc',
        },
        { borderRadius: radius },
        flex && { flex: 1 },
        { width },
        row && { flexDirection: 'row' },
        containerStyle,
      ]}
    >
      {img_bg == null ? (
        children
      ) : (
        <ImageBackground
          source={{ uri: img_bg }}
          style={[{ width: '100%', height: 'auto' }]}
        >
          {children}
        </ImageBackground>
      )}
    </View>
  );

  if (onPress) {
    return <TouchableOpacity onPress={onPress}>{component}</TouchableOpacity>;
  }
  return component;
};

Card.Content = Content;
Card.Title = Title;
Card.Thumbnail = Thumbnail;
Card.Row = Row;
Card.Col = Col;

export default Card;
