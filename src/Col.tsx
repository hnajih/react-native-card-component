import React from 'react';
import { View } from 'react-native';

type ColProps = {
  children?: React.ReactNode;
  center?: boolean;
  flex?: boolean;
  bg?: string;
  padding?: number;
};

const Col = ({
  children,
  center = false,
  flex = true,
  padding = 1,
  bg: backgroundColor,
}: ColProps) => (
  <View
    style={[
      flex && { flex: 1 },
      center && { alignItems: 'center' },
      { backgroundColor },
      { padding },
    ]}
  >
    {children}
  </View>
);

export default Col;
