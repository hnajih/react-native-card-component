import React from 'react';
import { View } from 'react-native';

type ContentProps = {
  children?: React.ReactNode;
  padding?: number;
};

const Content = ({ children, padding = 10 }: ContentProps) => (
  <View style={[{ padding }]}>{children}</View>
);

export default Content;
