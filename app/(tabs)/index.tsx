import { ProductCard } from "@/components/product/ProductCard";
import { SquircleView } from "@/components/ui/SquircleView";
import { BlinkitColors, BlinkitSpacing } from "@/constants/BlinkitDesign";
import { Category, Product } from "@/types";
import React from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// Import your JSON data
import homepageData from "@/assets/data/homepage.json";

export default function HomeScreen() {
  const handleAddToCart = (product: Product) => {
    console.log("Added to cart:", product.name);
    // Implement cart functionality
  };

  const renderCategory = ({ item }: { item: Category }) => (
    <TouchableOpacity style={styles.categoryItem}>
      <SquircleView size={60} backgroundColor={item.backgroundColor}>
        <Image source={{ uri: item.imageUrl }} style={styles.categoryImage} />
      </SquircleView>
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderProduct = ({ item }: { item: Product }) => (
    <View style={styles.productItem}>
      <ProductCard product={item} onAddToCart={handleAddToCart} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.deliveryLocation}>Delivery in 10 minutes</Text>
          <Text style={styles.location}>Bengaluru, Karnataka</Text>
        </View>

        {/* Search Bar */}
        <TouchableOpacity style={styles.searchBar}>
          <Text style={styles.searchText}>Search milk</Text>
        </TouchableOpacity>

        {/* Banner */}
        <View style={styles.bannerContainer}>
          <View
            style={[
              styles.banner,
              { backgroundColor: homepageData.banners[0].backgroundColor },
            ]}
          >
            <View style={styles.bannerContent}>
              <Text style={styles.bannerTitle}>
                {homepageData.banners[0].title}
              </Text>
              <Text style={styles.bannerSubtitle}>
                {homepageData.banners[0].subtitle}
              </Text>
            </View>
            <Image
              source={{ uri: homepageData.banners[0].imageUrl }}
              style={styles.bannerImage}
            />
          </View>
        </View>

        {/* Categories */}
        <View style={styles.section}>
          <FlatList
            data={homepageData.categories}
            renderItem={renderCategory}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesList}
          />
        </View>

        {/* Products */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Bestsellers</Text>
          <FlatList
            data={homepageData.products}
            renderItem={renderProduct}
            keyExtractor={(item) => item.id}
            numColumns={2}
            columnWrapperStyle={styles.productRow}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BlinkitColors.background,
  },
  header: {
    padding: BlinkitSpacing.lg,
    backgroundColor: BlinkitColors.primary,
  },
  deliveryLocation: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "500",
  },
  location: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  searchBar: {
    margin: BlinkitSpacing.lg,
    padding: BlinkitSpacing.md,
    backgroundColor: BlinkitColors.surface,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: BlinkitColors.border,
  },
  searchText: {
    color: BlinkitColors.textSecondary,
    fontSize: 14,
  },
  bannerContainer: {
    marginHorizontal: BlinkitSpacing.lg,
    marginBottom: BlinkitSpacing.lg,
  },
  banner: {
    borderRadius: 12,
    padding: BlinkitSpacing.lg,
    flexDirection: "row",
    alignItems: "center",
  },
  bannerContent: {
    flex: 1,
  },
  bannerTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 4,
  },
  bannerSubtitle: {
    color: "#FFFFFF",
    fontSize: 14,
    opacity: 0.9,
  },
  bannerImage: {
    width: 80,
    height: 60,
    borderRadius: 8,
  },
  section: {
    marginBottom: BlinkitSpacing.lg,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: BlinkitColors.text,
    marginHorizontal: BlinkitSpacing.lg,
    marginBottom: BlinkitSpacing.sm,
  },
  categoriesList: {
    paddingHorizontal: BlinkitSpacing.lg,
  },
  categoryItem: {
    alignItems: "center",
    marginRight: BlinkitSpacing.lg,
    width: 80,
  },
  categoryImage: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  categoryName: {
    fontSize: 12,
    fontWeight: "500",
    color: BlinkitColors.text,
    textAlign: "center",
    marginTop: BlinkitSpacing.xs,
  },
  productRow: {
    justifyContent: "space-between",
    paddingHorizontal: BlinkitSpacing.lg,
  },
  productItem: {
    flex: 0.48,
  },
});
