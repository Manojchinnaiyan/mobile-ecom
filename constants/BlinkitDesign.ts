// Blinkit's primary orange color and design tokens
export const BlinkitColors = {
  primary: "#F97316", // Orange 500
  primaryLight: "#FB923C", // Orange 400
  primaryDark: "#EA580C", // Orange 600
  success: "#22C55E", // Green 500
  background: "#FFFFFF",
  surface: "#FAFAFA",
  text: "#171717",
  textSecondary: "#737373",
  border: "#E5E5E5",
  error: "#EF4444",
} as const;

export const BlinkitSpacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  "2xl": 24,
  "3xl": 32,
} as const;

// Squircle path for React Native SVG
export const SQUIRCLE_PATH =
  "M 0,20 C 0,0 0,0 20,0 L 80,0 C 100,0 100,0 100,20 L 100,80 C 100,100 100,100 80,100 L 20,100 C 0,100 0,100 0,80 Z";
