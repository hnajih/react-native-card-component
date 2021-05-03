import React from 'react';
import { View, Image, ImageProps, ViewStyle, StyleSheet } from 'react-native';

type ThumbnailProps = ImageProps & {
  children?: React.ReactChild;
  stretch?: boolean;
  align?: 'center' | 'left' | 'right';
  containerStyle?: ViewStyle;
};

const Thumbnail = (props: ThumbnailProps) => {
  return (
    <View
      style={{
        alignItems:
          props.align == 'center'
            ? 'center'
            : props.align == 'right'
            ? 'flex-end'
            : 'flex-start',
      }}
    >
      <Image
        // {...props}
        source={props.source}
        style={[props.style, props.stretch && { width: '100%' }]}
      />
      <View style={[StyleSheet.absoluteFill, props.containerStyle]}>
        {props.children}
      </View>
    </View>
  );
};

Thumbnail.defaultProps = {
  align: 'left',
};

export default Thumbnail;
