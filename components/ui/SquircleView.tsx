import React from "react";
import { View, ViewStyle } from "react-native";

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
  // For now, using borderRadius as fallback since react-native-svg setup needed
  const squircleRadius = size * 0.22; // Approximate squircle curve

  return (
    <View
      style={[
        {
          width: size,
          height: size,
          backgroundColor,
          borderRadius: squircleRadius,
          overflow: "hidden",
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};
