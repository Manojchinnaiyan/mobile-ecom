import { BlinkitColors, BlinkitSpacing } from "@/constants/BlinkitDesign";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";

interface BlinkitButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "small";
  disabled?: boolean;
  style?: ViewStyle;
}

export const BlinkitButton: React.FC<BlinkitButtonProps> = ({
  title,
  onPress,
  variant = "primary",
  disabled = false,
  style,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        styles[variant],
        disabled && styles.disabled,
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, styles[`${variant}Text`]]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: BlinkitSpacing.lg,
    paddingVertical: BlinkitSpacing.sm,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  primary: {
    backgroundColor: BlinkitColors.primary,
  },
  secondary: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: BlinkitColors.primary,
  },
  small: {
    backgroundColor: BlinkitColors.primary,
    paddingHorizontal: BlinkitSpacing.sm,
    paddingVertical: 4,
    borderRadius: 6,
  },
  disabled: {
    backgroundColor: "#D1D5DB",
  },
  text: {
    fontSize: 14,
    fontWeight: "600",
  },
  primaryText: {
    color: "#FFFFFF",
  },
  secondaryText: {
    color: BlinkitColors.primary,
  },
  smallText: {
    color: "#FFFFFF",
    fontSize: 12,
  },
});
