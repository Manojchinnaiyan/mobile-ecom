import { BlinkitColors } from "./BlinkitDesign";

const tintColorLight = BlinkitColors.primary;
const tintColorDark = BlinkitColors.primary;

export const Colors = {
  light: {
    text: BlinkitColors.text,
    background: BlinkitColors.background,
    tint: tintColorLight,
    icon: BlinkitColors.textSecondary,
    tabIconDefault: BlinkitColors.textSecondary,
    tabIconSelected: tintColorLight,
    surface: BlinkitColors.surface,
    border: BlinkitColors.border,
    primary: BlinkitColors.primary,
    success: BlinkitColors.success,
    error: BlinkitColors.error,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
    surface: "#262626",
    border: "#404040",
    primary: BlinkitColors.primary,
    success: BlinkitColors.success,
    error: BlinkitColors.error,
  },
};
