import React from "react";
import { View, ViewStyle } from "react-native";
import Svg, { ClipPath, Defs, Path } from "react-native-svg";

interface SquircleViewProps {
  children: React.ReactNode;
  size?: number;
  style?: ViewStyle;
  backgroundColor?: string;
}

export const SquircleView: React.FC<SquircleViewProps> = ({
  children,
  size = 100,
  style,
  backgroundColor = "#FFFFFF",
}) => {
  const squirclePath = `M 0,${size * 0.2} C 0,0 0,0 ${size * 0.2},0 L ${
    size * 0.8
  },0 C ${size},0 ${size},0 ${size},${size * 0.2} L ${size},${
    size * 0.8
  } C ${size},${size} ${size},${size} ${size * 0.8},${size} L ${
    size * 0.2
  },${size} C 0,${size} 0,${size} 0,${size * 0.8} Z`;

  return (
    <View style={[{ width: size, height: size }, style]}>
      <Svg width={size} height={size} style={{ position: "absolute" }}>
        <Defs>
          <ClipPath id="squircle">
            <Path d={squirclePath} />
          </ClipPath>
        </Defs>
      </Svg>
      <View
        style={{
          width: size,
          height: size,
          backgroundColor,
          //   clipPath: "url(#squircle)", // iOS fallback to borderRadius
          borderRadius: size * 0.2, // Android fallback
        }}
      >
        {children}
      </View>
    </View>
  );
};
