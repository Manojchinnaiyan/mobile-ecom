// app/(tabs)/index.tsx - Complete Enhanced Blinkit UI
import { SquircleView } from "@/components/ui/SquircleView";
import { Category } from "@/types";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// Import JSON data
import homepageData from "@/assets/data/homepage.json";

const { width, height } = Dimensions.get("window");
const isTablet = width > 768;
const isSmallDevice = width < 375;

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentTheme, setCurrentTheme] = useState({
    primary: "#F97316",
    gradient: ["#F97316", "#FB923C"],
    background: "#FFF7ED",
  });

  const handleCategoryPress = (category: Category) => {
    if (selectedCategory === category.name) return;

    setSelectedCategory(category.name);

    // Dynamic theme based on category - EXACT Blinkit colors
    const themes = {
      All: {
        primary: "#F97316",
        gradient: ["#F97316", "#FB923C"],
        background: "#FFF7ED",
      },
      Maxxsaver: {
        primary: "#22C55E",
        gradient: ["#22C55E", "#86EFAC"],
        background: "#F0FDF4",
      },
      Medicines: {
        primary: "#3B82F6",
        gradient: ["#3B82F6", "#93C5FD"],
        background: "#EFF6FF",
      },
      Monsoon: {
        primary: "#6366F1",
        gradient: ["#6366F1", "#A5B4FC"],
        background: "#EEF2FF",
      },
      Gadgets: {
        primary: "#8B5CF6",
        gradient: ["#8B5CF6", "#C4B5FD"],
        background: "#F5F3FF",
      },
      Home: {
        primary: "#EC4899",
        gradient: ["#EC4899", "#F9A8D4"],
        background: "#FDF2F8",
      },
      Beauty: {
        primary: "#F59E0B",
        gradient: ["#F59E0B", "#FCD34D"],
        background: "#FFFBEB",
      },
      Baby: {
        primary: "#F472B6",
        gradient: ["#F472B6", "#FBCFE8"],
        background: "#FDF2F8",
      },
      Print: {
        primary: "#A855F7",
        gradient: ["#A855F7", "#C4B5FD"],
        background: "#F5F3FF",
      },
    };

    const theme = themes[category.name as keyof typeof themes] || themes["All"];
    setCurrentTheme(theme);
  };

  const renderCategory = ({ item }: { item: Category }) => {
    const isSelected = selectedCategory === item.name;

    return (
      <TouchableOpacity
        style={[
          styles.categoryItem,
          isSelected && {
            backgroundColor: currentTheme.background,
            borderColor: currentTheme.primary,
            borderWidth: 2,
            transform: [{ scale: 1.05 }],
          },
        ]}
        onPress={() => handleCategoryPress(item)}
        activeOpacity={0.8}
      >
        <SquircleView
          size={48}
          backgroundColor={
            isSelected ? currentTheme.primary : item.backgroundColor
          }
        >
          <Image source={{ uri: item.imageUrl }} style={styles.categoryImage} />
        </SquircleView>
        <Text
          style={[
            styles.categoryName,
            isSelected && { color: currentTheme.primary, fontWeight: "600" },
          ]}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  const getCurrentBanner = () => {
    return (
      homepageData.categoryBanners.find(
        (banner) => banner.category === selectedCategory
      ) || homepageData.categoryBanners[0]
    );
  };

  const getCurrentData = () => {
    const categoryMap = {
      All: homepageData.allCategoryData,
      Maxxsaver: homepageData.maxxsaverData,
      Medicines: homepageData.medicinesData,
      Monsoon: homepageData.monsoonData,
      Gadgets: homepageData.gadgetsData,
      Home: homepageData.homeData,
      Beauty: homepageData.beautyData,
      Baby: homepageData.babyData,
      Print: homepageData.printData,
    };
    return (
      categoryMap[selectedCategory as keyof typeof categoryMap] ||
      categoryMap["All"]
    );
  };

  // Brand cards for horizontal scroll
  const renderBrandCard = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.brandCard} activeOpacity={0.9}>
      <View style={styles.brandImageContainer}>
        <Image source={{ uri: item.image }} style={styles.brandImage} />
      </View>
      <Text style={styles.brandName} numberOfLines={1}>
        {item.name}
      </Text>
      {item.discount && (
        <Text style={[styles.brandDiscount, { color: currentTheme.primary }]}>
          {item.discount}
        </Text>
      )}
    </TouchableOpacity>
  );

  // Product cards for horizontal scroll - Shows 4+ products with cut-off
  const renderProductCard = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.productCard} activeOpacity={0.9}>
      <View style={styles.productImageContainer}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <TouchableOpacity
          style={[
            styles.productAddButton,
            { borderColor: currentTheme.primary },
          ]}
          activeOpacity={0.8}
        >
          <Text
            style={[styles.productAddText, { color: currentTheme.primary }]}
          >
            +
          </Text>
        </TouchableOpacity>
        {item.discount && (
          <View
            style={[
              styles.discountBadge,
              { backgroundColor: currentTheme.primary },
            ]}
          >
            <Text style={styles.discountText}>{item.discount}% OFF</Text>
          </View>
        )}
      </View>

      <View style={styles.productContent}>
        <Text style={styles.productUnit}>{item.unit || "1 unit"}</Text>
        <Text style={styles.productTime}>{item.deliveryTime}</Text>
        <Text style={styles.productName} numberOfLines={3}>
          {item.name}
        </Text>

        {item.rating && (
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>⭐ {item.rating}</Text>
            <Text style={styles.reviews}>({item.reviews})</Text>
          </View>
        )}

        <View style={styles.priceContainer}>
          {item.originalPrice && (
            <Text style={styles.originalPrice}>₹{item.originalPrice}</Text>
          )}
          <Text style={styles.price}>₹{item.price}</Text>
        </View>

        {item.discount && (
          <Text
            style={[styles.productDiscount, { color: currentTheme.primary }]}
          >
            {item.discount}% OFF
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );

  // Fixed: Create pairs for offer cards to avoid numColumns error
  const createOfferPairs = (offers: any[]) => {
    const pairs = [];
    for (let i = 0; i < offers.length; i += 2) {
      pairs.push({
        left: offers[i],
        right: offers[i + 1] || null,
        key: `pair-${i}`,
      });
    }
    return pairs;
  };
  // Clean offer card renderer
  const renderOfferCard = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.offerCard} activeOpacity={0.9}>
      <View style={styles.offerImageContainer}>
        <Image source={{ uri: item.imageUrl }} style={styles.offerImage} />
        <View
          style={[styles.offerBadge, { backgroundColor: currentTheme.primary }]}
        >
          <Text style={styles.offerBadgeText}>{item.badge}</Text>
        </View>
      </View>
      <View style={styles.offerContent}>
        <Text style={styles.offerTitle} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.offerSubtitle} numberOfLines={1}>
          {item.subtitle}
        </Text>
      </View>
    </TouchableOpacity>
  );

  // Render different section types
  const renderSection = (section: any, index: number) => {
    if (section.type === "grid") {
      // Category grid (like GROCERY & KITCHEN) - FIXED: Shows 4 items per row
      return (
        <View key={index} style={styles.section}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          <View style={styles.gridContainer}>
            {section.data.map((item: any, idx: number) => (
              <View key={idx} style={styles.gridItemWrapper}>
                <TouchableOpacity style={styles.gridItem} activeOpacity={0.9}>
                  <View style={styles.gridImageContainer}>
                    <Image
                      source={{ uri: item.image }}
                      style={styles.gridImage}
                    />
                  </View>
                  <Text style={styles.gridItemName} numberOfLines={2}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      );
    } else if (section.type === "brands") {
      // Brand horizontal scroll
      return (
        <View key={index} style={styles.section}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          <FlatList
            data={section.data}
            renderItem={renderBrandCard}
            keyExtractor={(item, idx) => `brand-${idx}`}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.brandsList}
            snapToInterval={(width - 44) / 5.5 + 6}
            decelerationRate="fast"
          />
        </View>
      );
    } else if (section.type === "offers") {
      // Offer cards (2x2 grid) - Using renderOfferCard
      const offerPairs = createOfferPairs(section.data || []);
      return (
        <View key={index} style={styles.section}>
          {section.title && (
            <Text style={styles.sectionTitle}>{section.title}</Text>
          )}
          <View style={styles.offersContainer}>
            {offerPairs.map((pair, pairIndex) => (
              <View key={pairIndex} style={styles.offerRow}>
                {renderOfferCard({ item: pair.left })}
                {pair.right && renderOfferCard({ item: pair.right })}
              </View>
            ))}
          </View>
        </View>
      );
    } else if (section.type === "products") {
      // Horizontal product scroll
      return (
        <View key={index} style={styles.section}>
          <View style={styles.productSectionHeader}>
            <View>
              <Text style={styles.sectionTitle}>{section.title}</Text>
              {section.subtitle && (
                <Text style={styles.sectionSubtitle}>{section.subtitle}</Text>
              )}
            </View>
            {section.showSeeAll && (
              <TouchableOpacity>
                <Text style={[styles.seeAll, { color: currentTheme.primary }]}>
                  See All &gt;
                </Text>
              </TouchableOpacity>
            )}
          </View>
          <FlatList
            data={section.data}
            renderItem={renderProductCard}
            keyExtractor={(item, idx) => `product-${idx}`}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.productsList}
            snapToInterval={(width - 44) / 4.3 + 6}
            decelerationRate="fast"
          />
        </View>
      );
    }
    return null;
  };

  return (
    <View style={{ flex: 1, backgroundColor: currentTheme.primary }}>
      <StatusBar
        backgroundColor={currentTheme.primary}
        barStyle="light-content"
      />

      <View style={{ flex: 1, backgroundColor: currentTheme.background }}>
        {/* Header - EXACT Blinkit style */}
        <LinearGradient colors={currentTheme.gradient} style={styles.header}>
          <View style={styles.headerContent}>
            <View style={styles.deliveryInfo}>
              <Text style={styles.deliveryTime}>16 MINS</Text>
              <Text style={styles.deliveryLocation}>Home</Text>
            </View>
            <View style={styles.locationContainer}>
              <Text style={styles.location} numberOfLines={1}>
                FF21, Ground floor, Silver Springs Layout, Munnekolal, B...
              </Text>
            </View>
            <TouchableOpacity style={styles.profileButton}>
              <Text style={styles.profileIcon}>👤</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>

        {/* Search Bar */}
        <View
          style={[
            styles.searchContainer,
            { backgroundColor: currentTheme.background },
          ]}
        >
          <TouchableOpacity style={styles.searchBar}>
            <Text style={styles.searchIcon}>🔍</Text>
            <Text style={styles.searchText}>
              Search for '
              {selectedCategory === "All"
                ? "Umbrella"
                : selectedCategory === "Medicines"
                ? "Rain coat"
                : selectedCategory === "Beauty"
                ? "Repellents"
                : selectedCategory === "Gadgets"
                ? "Tissue"
                : "Bread"}
              '
            </Text>
            <Text style={styles.micIcon}>🎤</Text>
          </TouchableOpacity>
        </View>

        {/* Categories - Now shows 4+ with partial visibility */}
        <View
          style={[
            styles.categoriesContainer,
            { backgroundColor: currentTheme.background },
          ]}
        >
          <FlatList
            data={[
              {
                id: "0",
                name: "All",
                imageUrl:
                  "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=100&h=100&fit=crop",
                backgroundColor: "#F97316",
              },
              ...homepageData.categories,
            ]}
            renderItem={renderCategory}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesList}
            snapToInterval={width / 4.2}
            decelerationRate="fast"
          />
        </View>

        {/* Main Content */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={[
            styles.scrollView,
            { backgroundColor: currentTheme.background },
          ]}
          removeClippedSubviews={true}
          maxToRenderPerBatch={15}
          windowSize={10}
        >
          {/* Dynamic Banner with GIF effect */}
          <View style={styles.bannerContainer}>
            <LinearGradient
              colors={getCurrentBanner().gradientColors}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.categoryBanner}
            >
              <View style={styles.bannerContent}>
                <Text style={styles.bannerTitle}>
                  {getCurrentBanner().title}
                </Text>
                <Text style={styles.bannerSubtitle}>
                  {getCurrentBanner().subtitle}
                </Text>
                {getCurrentBanner().discount && (
                  <View style={styles.bannerDiscountBadge}>
                    <Text style={styles.bannerDiscountText}>
                      {getCurrentBanner().discount}
                    </Text>
                  </View>
                )}
              </View>
              <View style={styles.bannerImageContainer}>
                <Image
                  source={{ uri: getCurrentBanner().imageUrl }}
                  style={styles.bannerImage}
                />
                {/* GIF Overlay Effect */}
                <View style={styles.bannerGifOverlay}>
                  <Text style={styles.bannerGifText}>✨</Text>
                </View>
              </View>
            </LinearGradient>
          </View>

          {/* Dynamic Content Based on Category */}
          {getCurrentData()?.sections?.map((section: any, index: number) =>
            renderSection(section, index)
          )}

          {/* Free Delivery Banner */}
          <View style={styles.freeDeliveryBanner}>
            <Text style={styles.deliveryIcon}>🛵</Text>
            <Text style={styles.freeDeliveryText}>
              FREE DELIVERY on orders above ₹99
            </Text>
          </View>

          <View style={styles.bottomPadding} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    paddingTop: 60,
    paddingBottom: 14,
    paddingHorizontal: 16,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  deliveryInfo: {
    backgroundColor: "rgba(255,255,255,0.25)",
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 5,
    alignItems: "center",
    minWidth: 50,
  },
  deliveryTime: {
    color: "#FFFFFF",
    fontSize: 9,
    fontWeight: "700",
  },
  deliveryLocation: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "600",
  },
  locationContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  location: {
    color: "#FFFFFF",
    fontSize: 11,
  },
  profileButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "rgba(0,0,0,0.25)",
    alignItems: "center",
    justifyContent: "center",
  },
  profileIcon: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  // Update search bar styles:
  searchContainer: {
    paddingHorizontal: 16,
    marginTop: 15,
    marginBottom: 12, // Increased spacing
    backgroundColor: "transparent",
  },
  searchBar: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12, // More rounded
    paddingHorizontal: 16, // More padding
    paddingVertical: 14, // Much bigger height
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    minHeight: 48, // Ensure minimum height
  },
  searchIcon: {
    fontSize: 16, // Bigger icon
    marginRight: 12,
    color: "#6B7280",
  },
  searchText: {
    flex: 1,
    color: "#9CA3AF",
    fontSize: 14, // Bigger text
    fontWeight: "400",
  },
  micIcon: {
    fontSize: 16, // Bigger icon
    color: "#6B7280",
  },
  categoriesContainer: {
    backgroundColor: "#FFFFFF",
    paddingBottom: 6,
  },
  categoriesList: {
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  categoryItem: {
    alignItems: "center",
    marginRight: 10,
    padding: 4,
    borderRadius: 8,
    minWidth: 58,
  },
  categoryImage: {
    width: "100%",
    height: "100%",
    borderRadius: 24,
  },
  categoryName: {
    fontSize: 9,
    fontWeight: "500",
    color: "#374151",
    textAlign: "center",
    marginTop: 3,
  },
  scrollView: {
    flex: 1,
  },
  bannerContainer: {
    marginHorizontal: 16,
    marginBottom: 14,
  },
  categoryBanner: {
    borderRadius: 12,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    minHeight: 100,
  },
  bannerContent: {
    flex: 1,
  },
  bannerTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 2,
  },
  bannerSubtitle: {
    color: "#FFFFFF",
    fontSize: 11,
    opacity: 0.95,
    marginBottom: 6,
  },
  bannerDiscountBadge: {
    backgroundColor: "rgba(255,255,255,0.25)",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    alignSelf: "flex-start",
  },
  bannerDiscountText: {
    color: "#FFFFFF",
    fontSize: 9,
    fontWeight: "600",
  },
  bannerImageContainer: {
    position: "relative",
  },
  bannerImage: {
    width: 80,
    height: 60,
    borderRadius: 8,
  },
  bannerGifOverlay: {
    position: "absolute",
    top: 4,
    right: 4,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 12,
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  bannerGifText: {
    fontSize: 10,
  },
  section: {
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1F2937",
    marginHorizontal: 16,
    marginBottom: 10,
  },
  sectionSubtitle: {
    fontSize: 10,
    color: "#6B7280",
    marginHorizontal: 16,
    marginTop: -6,
    marginBottom: 6,
  },
  productSectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 10,
  },
  seeAll: {
    fontSize: 11,
    fontWeight: "600",
  },
  // Grid Items (Category pages) - Fixed flex layout
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },
  gridItemWrapper: {
    width: "25%", // Changed from whatever you had
    marginBottom: 12,
  },
  gridItem: {
    backgroundColor: "#F9FAFB",
    borderRadius: 12,
    padding: 10,
    alignItems: "center",
  },
  gridImageContainer: {
    width: "100%",
    aspectRatio: 1,
    marginBottom: 6,
  },
  gridImage: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  gridItemName: {
    fontSize: 10,
    fontWeight: "500",
    color: "#374151",
    textAlign: "center",
    lineHeight: 12,
  },
  // Brand Cards - Show 5+ brands with partial visibility
  brandsList: {
    paddingLeft: 12,
    paddingRight: 12,
  },
  brandCard: {
    alignItems: "center",
    marginRight: 8,
    width: (width - 44) / 4.5, // Shows 5+ brands with cut-off
  },
  brandImageContainer: {
    width: "100%",
    aspectRatio: 1,
    backgroundColor: "#F9FAFB",
    borderRadius: 8,
    padding: 8,
    marginBottom: 4,
  },
  brandImage: {
    width: "100%",
    height: "100%",
    borderRadius: 6,
  },
  brandName: {
    fontSize: 8,
    fontWeight: "500",
    color: "#374151",
    textAlign: "center",
    marginBottom: 1,
  },
  brandDiscount: {
    fontSize: 7,
    fontWeight: "600",
    textAlign: "center",
  },
  // Offer Cards - Fixed layout
  // Offer Cards - Clean banner-like design
  offersContainer: {
    paddingHorizontal: 16,
  },
  offerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  offerCard: {
    flex: 0.48,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  offerImageContainer: {
    position: "relative",
  },
  offerImage: {
    width: "100%",
    height: 80,
    resizeMode: "cover",
  },
  offerBadge: {
    position: "absolute",
    top: 6,
    right: 6,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  offerBadgeText: {
    color: "#FFFFFF",
    fontSize: 8,
    fontWeight: "700",
  },
  offerContent: {
    padding: 8,
  },
  offerTitle: {
    fontSize: 11,
    fontWeight: "600",
    color: "#1F2937",
    marginBottom: 2,
  },
  offerSubtitle: {
    fontSize: 9,
    color: "#6B7280",
  },

  // Product Cards (Horizontal scroll) - Shows 4+ with 10% cut-off
  productsList: {
    paddingLeft: 12,
    paddingRight: 8,
  },
  productCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    marginRight: 6,
    width: (width - 44) / 3.5, // Shows exactly 4 products with 10% cut-off
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 3,
    elevation: 1,
  },
  productImageContainer: {
    position: "relative",
  },
  productImage: {
    width: "100%",
    height: 70,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  productAddButton: {
    position: "absolute",
    top: 4,
    right: 4,
    backgroundColor: "#FFFFFF",
    width: 18,
    height: 18,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
  },
  productAddText: {
    fontSize: 11,
    fontWeight: "600",
  },
  discountBadge: {
    position: "absolute",
    top: 4,
    left: 4,
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderRadius: 3,
  },
  discountText: {
    color: "#FFFFFF",
    fontSize: 7,
    fontWeight: "700",
  },
  productContent: {
    padding: 5,
  },
  productUnit: {
    fontSize: 8,
    color: "#6B7280",
    marginBottom: 1,
  },
  productTime: {
    fontSize: 7,
    color: "#6B7280",
    backgroundColor: "#F3F4F6",
    paddingHorizontal: 3,
    paddingVertical: 1,
    borderRadius: 2,
    alignSelf: "flex-start",
    marginBottom: 2,
  },
  productName: {
    fontSize: 9,
    fontWeight: "600",
    color: "#1F2937",
    marginBottom: 2,
    lineHeight: 11,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2,
  },
  rating: {
    fontSize: 7,
    color: "#1F2937",
    marginRight: 1,
  },
  reviews: {
    fontSize: 6,
    color: "#6B7280",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 1,
  },
  originalPrice: {
    fontSize: 7,
    color: "#9CA3AF",
    textDecorationLine: "line-through",
    marginRight: 2,
  },
  price: {
    fontSize: 9,
    fontWeight: "700",
    color: "#1F2937",
  },
  productDiscount: {
    fontSize: 7,
    fontWeight: "700",
  },
  freeDeliveryBanner: {
    backgroundColor: "#F9FAFB",
    marginHorizontal: 16,
    padding: 10,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },
  deliveryIcon: {
    fontSize: 14,
    marginRight: 5,
  },
  freeDeliveryText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#1F2937",
  },
  bottomPadding: {
    height: 80,
  },
});
