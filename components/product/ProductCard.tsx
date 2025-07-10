import { BlinkitButton } from "@/components/ui/BlinkitButton";
import { SquircleView } from "@/components/ui/SquircleView";
import { BlinkitColors, BlinkitSpacing } from "@/constants/BlinkitDesign";
import { Product } from "@/types";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
}) => {
  return (
    <View style={styles.container}>
      <SquircleView size={120} style={styles.imageContainer}>
        <Image source={{ uri: product.imageUrl }} style={styles.image} />
      </SquircleView>

      <Text style={styles.deliveryTime}>{product.deliveryTime}</Text>
      <Text style={styles.productName} numberOfLines={2}>
        {product.name}
      </Text>
      <Text style={styles.unit}>{product.unit}</Text>

      <View style={styles.priceContainer}>
        <Text style={styles.price}>₹{product.price}</Text>
        <Text style={styles.originalPrice}>₹{product.originalPrice}</Text>
      </View>

      <BlinkitButton
        title="ADD"
        variant="small"
        onPress={() => onAddToCart(product)}
        style={styles.addButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: BlinkitSpacing.sm,
    margin: 4,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  imageContainer: {
    marginBottom: BlinkitSpacing.xs,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20, // Fallback for non-squircle
  },
  deliveryTime: {
    fontSize: 10,
    color: BlinkitColors.textSecondary,
    backgroundColor: BlinkitColors.surface,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginBottom: 4,
  },
  productName: {
    fontSize: 14,
    fontWeight: "600",
    color: BlinkitColors.text,
    textAlign: "center",
    marginBottom: 2,
  },
  unit: {
    fontSize: 12,
    color: BlinkitColors.textSecondary,
    marginBottom: BlinkitSpacing.xs,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: BlinkitSpacing.xs,
  },
  price: {
    fontSize: 14,
    fontWeight: "700",
    color: BlinkitColors.text,
    marginRight: 4,
  },
  originalPrice: {
    fontSize: 12,
    color: BlinkitColors.textSecondary,
    textDecorationLine: "line-through",
  },
  addButton: {
    width: "100%",
  },
});
