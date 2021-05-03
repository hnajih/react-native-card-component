import React from 'react';
import { View } from 'react-native';

type RowProps = {
  children: React.ReactNode;
  flex?: boolean;
  center?: boolean;
};

const Row = ({ children, flex, center }: RowProps) => (
  <View
    style={[
      { flexDirection: 'row' },
      flex && { flex: 1 },
      center && { alignItems: 'center' },
    ]}
  >
    {children}
  </View>
);

export default Row;
