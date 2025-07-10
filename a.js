// Homepage JSON Generator Script
// Run this script to generate the complete homepage.json file

function generateHomepageJSON() {
  const homepageData = {
    categories: [
      {
        id: "1",
        name: "Maxxsaver",
        imageUrl:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop",
        backgroundColor: "#22C55E",
      },
      {
        id: "2",
        name: "Medicines",
        imageUrl:
          "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=100&h=100&fit=crop",
        backgroundColor: "#3B82F6",
      },
      {
        id: "3",
        name: "Monsoon",
        imageUrl:
          "https://images.unsplash.com/photo-1503435980610-a51f3ddfee50?w=100&h=100&fit=crop",
        backgroundColor: "#6366F1",
      },
      {
        id: "4",
        name: "Gadgets",
        imageUrl:
          "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=100&h=100&fit=crop",
        backgroundColor: "#8B5CF6",
      },
      {
        id: "5",
        name: "Home",
        imageUrl:
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=100&h=100&fit=crop",
        backgroundColor: "#EC4899",
      },
      {
        id: "6",
        name: "Beauty",
        imageUrl:
          "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=100&h=100&fit=crop",
        backgroundColor: "#F59E0B",
      },
      {
        id: "7",
        name: "Baby",
        imageUrl:
          "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=100&h=100&fit=crop",
        backgroundColor: "#F472B6",
      },
      {
        id: "8",
        name: "Print",
        imageUrl:
          "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=100&h=100&fit=crop",
        backgroundColor: "#A855F7",
      },
    ],

    categoryBanners: [
      {
        id: "1",
        category: "All",
        title: "MAXXsaver",
        subtitle: "Shop for ₹399 & unlock lowest prices!",
        imageUrl: "https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif",
        gradientColors: ["#22C55E", "#86EFAC"],
        discount: "Get extra 10% cashback",
      },
      {
        id: "2",
        category: "Maxxsaver",
        title: "MAXXsaver",
        subtitle: "Shop for ₹399 & unlock lowest prices!",
        imageUrl: "https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif",
        gradientColors: ["#22C55E", "#86EFAC"],
        discount: "Get extra 10% cashback",
      },
      {
        id: "3",
        category: "Medicines",
        title: "Prescription medicines",
        subtitle: "in minutes",
        imageUrl: "https://media.giphy.com/media/l0HlTy9x8FZo0XO1i/giphy.gif",
        gradientColors: ["#3B82F6", "#93C5FD"],
        discount: "Search & add your medicines",
      },
      {
        id: "4",
        category: "Monsoon",
        title: "Rain Ready Store",
        subtitle: "Rainy days made better",
        imageUrl: "https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif",
        gradientColors: ["#6366F1", "#A5B4FC"],
        discount: "Get all the monsoon essentials",
      },
      {
        id: "5",
        category: "Gadgets",
        title: "GRAND GADGET SALE",
        subtitle: "Smartphones, Earphones & more",
        imageUrl: "https://media.giphy.com/media/xT9IgEYXnwvPJbdqGk/giphy.gif",
        gradientColors: ["#8B5CF6", "#C4B5FD"],
        discount: "UP TO 85% OFF",
      },
      {
        id: "6",
        category: "Home",
        title: "Home & Cleaning",
        subtitle: "Everything for your home",
        imageUrl: "https://media.giphy.com/media/xT9IgHCTfp8CRshfQk/giphy.gif",
        gradientColors: ["#EC4899", "#F9A8D4"],
        discount: "UP TO 70% OFF",
      },
      {
        id: "7",
        category: "Beauty",
        title: "Personal & Baby Care SALE",
        subtitle: "Skincare, Hair care & more",
        imageUrl: "https://media.giphy.com/media/xT9IgHMztEreGZJd1m/giphy.gif",
        gradientColors: ["#F59E0B", "#FCD34D"],
        discount: "Get flat ₹100 OFF",
      },
      {
        id: "8",
        category: "Baby",
        title: "Baby Care Essentials",
        subtitle: "Everything for your little one",
        imageUrl: "https://media.giphy.com/media/xT9IgFOWdFXJOYrKEw/giphy.gif",
        gradientColors: ["#F472B6", "#FBCFE8"],
        discount: "UP TO 50% OFF",
      },
      {
        id: "9",
        category: "Print",
        title: "Print & Stationery",
        subtitle: "Work from home essentials",
        imageUrl: "https://media.giphy.com/media/xT9IgK7FtdZbfD2Y5G/giphy.gif",
        gradientColors: ["#A855F7", "#C4B5FD"],
        discount: "Get flat ₹50 OFF",
      },
    ],

    allCategoryData: {
      sections: [
        {
          type: "grid",
          title: "GROCERY & KITCHEN",
          data: [
            {
              name: "Fresh Vegetables",
              image:
                "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=150&h=150&fit=crop",
            },
            {
              name: "Fresh Fruits",
              image:
                "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=150&h=150&fit=crop",
            },
            {
              name: "Dairy, Bread and Eggs",
              image:
                "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=150&h=150&fit=crop",
            },
            {
              name: "Cereals and Breakfast",
              image:
                "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=150&h=150&fit=crop",
            },
            {
              name: "Atta, Rice and Dal",
              image:
                "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=150&h=150&fit=crop",
            },
            {
              name: "Oils and Ghee",
              image:
                "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=150&h=150&fit=crop",
            },
            {
              name: "Masalas",
              image:
                "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=150&h=150&fit=crop",
            },
            {
              name: "Dry Fruits and Seeds Mix",
              image:
                "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=150&h=150&fit=crop",
            },
          ],
        },
        {
          type: "brands",
          title: "Shop by brands",
          data: [
            {
              name: "Amul",
              image:
                "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=150&h=150&fit=crop",
              discount: "UP TO 15% OFF",
            },
            {
              name: "Britannia",
              image:
                "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=150&h=150&fit=crop",
              discount: "UP TO 20% OFF",
            },
            {
              name: "Nestle",
              image:
                "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=150&h=150&fit=crop",
              discount: "UP TO 25% OFF",
            },
            {
              name: "Patanjali",
              image:
                "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=150&h=150&fit=crop",
              discount: "UP TO 30% OFF",
            },
            {
              name: "Tata",
              image:
                "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=150&h=150&fit=crop",
              discount: "UP TO 18% OFF",
            },
            {
              name: "ITC",
              image:
                "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=150&h=150&fit=crop",
              discount: "UP TO 22% OFF",
            },
          ],
        },
        {
          type: "products",
          title: "Daily essentials",
          subtitle: "Fresh & quality assured",
          showSeeAll: true,
          data: [
            {
              name: "Fresh Bananas",
              price: 48,
              originalPrice: 55,
              unit: "1 kg",
              discount: 13,
              rating: 4.2,
              reviews: 156,
              deliveryTime: "16 MINS",
              image:
                "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=150&h=150&fit=crop",
            },
            {
              name: "Amul Fresh Milk",
              price: 27,
              originalPrice: 30,
              unit: "500 ml",
              discount: 10,
              rating: 4.5,
              reviews: 89,
              deliveryTime: "16 MINS",
              image:
                "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=150&h=150&fit=crop",
            },
            {
              name: "Brown Bread",
              price: 25,
              originalPrice: 28,
              unit: "400 g",
              discount: 11,
              rating: 4.3,
              reviews: 67,
              deliveryTime: "16 MINS",
              image:
                "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=150&h=150&fit=crop",
            },
            {
              name: "Farm Fresh Eggs",
              price: 85,
              originalPrice: 95,
              unit: "12 pieces",
              discount: 11,
              rating: 4.4,
              reviews: 234,
              deliveryTime: "16 MINS",
              image:
                "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=150&h=150&fit=crop",
            },
            {
              name: "Onions",
              price: 32,
              originalPrice: 38,
              unit: "1 kg",
              discount: 16,
              rating: 4.1,
              reviews: 123,
              deliveryTime: "16 MINS",
              image:
                "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=150&h=150&fit=crop",
            },
            {
              name: "Tomatoes",
              price: 45,
              originalPrice: 52,
              unit: "1 kg",
              discount: 13,
              rating: 4.2,
              reviews: 198,
              deliveryTime: "16 MINS",
              image:
                "https://images.unsplash.com/photo-1546470427-227fda1b4d7d?w=150&h=150&fit=crop",
            },
          ],
        },
      ],
    },

    maxxsaverData: {
      sections: [
        {
          type: "offers",
          data: [
            {
              title: "Top offers",
              subtitle: "Starting at ₹89",
              imageUrl:
                "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=150&fit=crop",
              badge: "MAXX DEAL",
            },
            {
              title: "Hair care supplies",
              subtitle: "Up to 60% OFF",
              imageUrl:
                "https://images.unsplash.com/photo-1526045478516-99145907023c?w=200&h=150&fit=crop",
              badge: "60% OFF",
            },
            {
              title: "Kitchen essentials",
              subtitle: "Starting at ₹49",
              imageUrl:
                "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=150&fit=crop",
              badge: "SAVE BIG",
            },
            {
              title: "Health & wellness",
              subtitle: "Up to 40% OFF",
              imageUrl:
                "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&h=150&fit=crop",
              badge: "40% OFF",
            },
          ],
        },
      ],
    },

    medicinesData: {
      sections: [
        {
          type: "grid",
          title: "Family care",
          data: [
            {
              name: "Paediatric care",
              image:
                "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=150&h=150&fit=crop",
            },
            {
              name: "Maternity care",
              image:
                "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=150&h=150&fit=crop",
            },
            {
              name: "Elderly care",
              image:
                "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=150&h=150&fit=crop",
            },
            {
              name: "Men's health",
              image:
                "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=150&h=150&fit=crop",
            },
          ],
        },
        {
          type: "products",
          title: "Cure for cough & cold",
          showSeeAll: true,
          data: [
            {
              name: "Nasoclear 0.65% Nasal Spray",
              price: 58,
              originalPrice: 64,
              discount: 9,
              deliveryTime: "16 MINS",
              image:
                "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=150&h=150&fit=crop",
            },
            {
              name: "Dolo 650 Tablet",
              price: 28,
              originalPrice: 35,
              discount: 20,
              deliveryTime: "16 MINS",
              image:
                "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=150&h=150&fit=crop",
            },
            {
              name: "Crocin Advance Tablet",
              price: 15,
              originalPrice: 18,
              discount: 17,
              deliveryTime: "16 MINS",
              image:
                "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=150&h=150&fit=crop",
            },
            {
              name: "Vicks VapoRub",
              price: 85,
              originalPrice: 95,
              discount: 11,
              deliveryTime: "16 MINS",
              image:
                "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=150&h=150&fit=crop",
            },
          ],
        },
      ],
    },

    monsoonData: {
      sections: [
        {
          type: "grid",
          title: "Monsoon must-haves",
          data: [
            {
              name: "Beverages corner",
              image:
                "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=150&h=150&fit=crop",
            },
            {
              name: "Home & cleaning needs",
              image:
                "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=150&h=150&fit=crop",
            },
            {
              name: "Biscuits & cakes",
              image:
                "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=150&h=150&fit=crop",
            },
            {
              name: "Repellents & fresheners",
              image:
                "https://images.unsplash.com/photo-1503435980610-a51f3ddfee50?w=150&h=150&fit=crop",
            },
          ],
        },
        {
          type: "products",
          title: "Quick snacks & soups",
          data: [
            {
              name: "Maggi 2-Minute Noodles",
              price: 14,
              originalPrice: 16,
              discount: 13,
              rating: 4.3,
              reviews: 567,
              deliveryTime: "16 MINS",
              image:
                "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=150&h=150&fit=crop",
            },
            {
              name: "Knorr Soup",
              price: 45,
              originalPrice: 52,
              discount: 13,
              rating: 4.1,
              reviews: 234,
              deliveryTime: "16 MINS",
              image:
                "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=150&h=150&fit=crop",
            },
            {
              name: "Top Ramen Noodles",
              price: 12,
              originalPrice: 15,
              discount: 20,
              rating: 4.2,
              reviews: 445,
              deliveryTime: "16 MINS",
              image:
                "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=150&h=150&fit=crop",
            },
          ],
        },
      ],
    },

    gadgetsData: {
      sections: [
        {
          type: "brands",
          title: "Top tech brands",
          data: [
            {
              name: "Apple",
              image:
                "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=150&h=150&fit=crop",
              discount: "UP TO 10% OFF",
            },
            {
              name: "Samsung",
              image:
                "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=150&h=150&fit=crop",
              discount: "UP TO 25% OFF",
            },
            {
              name: "OnePlus",
              image:
                "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=150&h=150&fit=crop",
              discount: "UP TO 20% OFF",
            },
            {
              name: "Xiaomi",
              image:
                "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=150&h=150&fit=crop",
              discount: "UP TO 30% OFF",
            },
            {
              name: "Sony",
              image:
                "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=150&h=150&fit=crop",
              discount: "UP TO 35% OFF",
            },
          ],
        },
        {
          type: "products",
          title: "Price Crash on Noise!",
          subtitle: "Only till 11 PM",
          data: [
            {
              name: "Noise Twist Go Smartwatch",
              price: 1699,
              originalPrice: 4999,
              discount: 66,
              rating: 3.6,
              reviews: 26,
              deliveryTime: "16 MINS",
              image:
                "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150&h=150&fit=crop",
            },
            {
              name: "Wireless Neckband Earphones",
              price: 899,
              originalPrice: 2999,
              discount: 70,
              rating: 3.8,
              reviews: 67,
              deliveryTime: "16 MINS",
              image:
                "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=150&h=150&fit=crop",
            },
            {
              name: "Power Bank 10000mAh",
              price: 1299,
              originalPrice: 2499,
              discount: 48,
              rating: 4.1,
              reviews: 189,
              deliveryTime: "16 MINS",
              image:
                "https://images.unsplash.com/photo-1609592043005-0d2a8ebe7da6?w=150&h=150&fit=crop",
            },
            {
              name: "Bluetooth Speaker",
              price: 799,
              originalPrice: 1499,
              discount: 47,
              rating: 4.3,
              reviews: 234,
              deliveryTime: "16 MINS",
              image:
                "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=150&h=150&fit=crop",
            },
          ],
        },
      ],
    },

    homeData: {
      sections: [
        {
          type: "grid",
          title: "HOUSEHOLD & LIFESTYLE",
          data: [
            {
              name: "Home Decor",
              image:
                "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=150&h=150&fit=crop",
            },
            {
              name: "Kitchen Appliances",
              image:
                "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=150&h=150&fit=crop",
            },
            {
              name: "Cleaning Supplies",
              image:
                "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=150&h=150&fit=crop",
            },
            {
              name: "Clothing & Fashion",
              image:
                "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=150&h=150&fit=crop",
            },
          ],
        },
        {
          type: "products",
          title: "Home essentials",
          subtitle: "Everything for your home",
          data: [
            {
              name: "Vim Dishwash Gel 750ml",
              price: 85,
              originalPrice: 95,
              discount: 11,
              rating: 4.2,
              reviews: 156,
              deliveryTime: "16 MINS",
              image:
                "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=150&h=150&fit=crop",
            },
            {
              name: "Surf Excel Detergent 1kg",
              price: 145,
              originalPrice: 165,
              discount: 12,
              rating: 4.4,
              reviews: 298,
              deliveryTime: "16 MINS",
              image:
                "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=150&h=150&fit=crop",
            },
          ],
        },
      ],
    },

    beautyData: {
      sections: [
        {
          type: "grid",
          title: "BEAUTY & WELLNESS",
          data: [
            {
              name: "Bath and Body",
              image:
                "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=150&h=150&fit=crop",
            },
            {
              name: "Hair Care",
              image:
                "https://images.unsplash.com/photo-1526045478516-99145907023c?w=150&h=150&fit=crop",
            },
            {
              name: "Skincare",
              image:
                "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=150&h=150&fit=crop",
            },
            {
              name: "Makeup",
              image:
                "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=150&h=150&fit=crop",
            },
          ],
        },
        {
          type: "brands",
          title: "Beauty brands",
          data: [
            {
              name: "Lakme",
              image:
                "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=150&h=150&fit=crop",
              discount: "UP TO 40% OFF",
            },
            {
              name: "L'Oreal",
              image:
                "https://images.unsplash.com/photo-1526045478516-99145907023c?w=150&h=150&fit=crop",
              discount: "UP TO 35% OFF",
            },
            {
              name: "Nivea",
              image:
                "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=150&h=150&fit=crop",
              discount: "UP TO 25% OFF",
            },
          ],
        },
        {
          type: "products",
          title: "Skincare essentials",
          subtitle: "For healthy glowing skin",
          data: [
            {
              name: "Cetaphil Gentle Skin Cleanser",
              price: 425,
              originalPrice: 485,
              discount: 12,
              rating: 4.5,
              reviews: 567,
              deliveryTime: "16 MINS",
              image:
                "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=150&h=150&fit=crop",
            },
            {
              name: "Himalaya Purifying Neem Face Wash",
              price: 85,
              originalPrice: 95,
              discount: 11,
              rating: 4.2,
              reviews: 234,
              deliveryTime: "16 MINS",
              image:
                "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=150&h=150&fit=crop",
            },
          ],
        },
      ],
    },

    babyData: {
      sections: [
        {
          type: "grid",
          title: "BABY CARE ESSENTIALS",
          data: [
            {
              name: "Baby Food & Formula",
              image:
                "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=150&h=150&fit=crop",
            },
            {
              name: "Diapers & Wipes",
              image:
                "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=150&h=150&fit=crop",
            },
            {
              name: "Baby Bath & Skin",
              image:
                "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=150&fit=crop",
            },
            {
              name: "Toys & Games",
              image:
                "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=150&h=150&fit=crop",
            },
          ],
        },
        {
          type: "products",
          title: "Baby care essentials",
          subtitle: "Gentle care for your little one",
          data: [
            {
              name: "Pampers Baby Dry Diapers S",
              price: 285,
              originalPrice: 325,
              discount: 12,
              rating: 4.4,
              reviews: 567,
              deliveryTime: "16 MINS",
              image:
                "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=150&h=150&fit=crop",
            },
            {
              name: "Johnson's Baby Shampoo 200ml",
              price: 145,
              originalPrice: 165,
              discount: 12,
              rating: 4.5,
              reviews: 445,
              deliveryTime: "16 MINS",
              image:
                "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=150&fit=crop",
            },
          ],
        },
      ],
    },

    printData: {
      sections: [
        {
          type: "grid",
          title: "PRINT & STATIONERY",
          data: [
            {
              name: "Print Services",
              image:
                "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=150&h=150&fit=crop",
            },
            {
              name: "Office Supplies",
              image:
                "https://images.unsplash.com/photo-1497386539812-44b90cba54b5?w=150&h=150&fit=crop",
            },
            {
              name: "Books & Notebooks",
              image:
                "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=150&h=150&fit=crop",
            },
            {
              name: "Art & Craft",
              image:
                "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=150&h=150&fit=crop",
            },
          ],
        },
        {
          type: "products",
          title: "Work from home essentials",
          subtitle: "Stay productive at home",
          data: [
            {
              name: "A4 Copy Paper Ream 500 sheets",
              price: 285,
              originalPrice: 325,
              discount: 12,
              rating: 4.2,
              reviews: 123,
              deliveryTime: "16 MINS",
              image:
                "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=150&h=150&fit=crop",
            },
            {
              name: "Parker Jotter Blue Pen",
              price: 145,
              originalPrice: 165,
              discount: 12,
              rating: 4.4,
              reviews: 89,
              deliveryTime: "16 MINS",
              image:
                "https://images.unsplash.com/photo-1497386539812-44b90cba54b5?w=150&h=150&fit=crop",
            },
          ],
        },
      ],
    },
  };

  return JSON.stringify(homepageData, null, 2);
}

// Generate and output the JSON
console.log("🚀 Generating complete homepage.json...");
const jsonOutput = generateHomepageJSON();

// For Node.js environment
if (typeof require !== "undefined") {
  const fs = require("fs");
  fs.writeFileSync("assets/data/homepage.json", jsonOutput);
  console.log("✅ homepage.json file created successfully!");
}

// For browser environment - copy to clipboard
if (typeof navigator !== "undefined" && navigator.clipboard) {
  navigator.clipboard.writeText(jsonOutput).then(() => {
    console.log("✅ JSON copied to clipboard!");
  });
}

// Always log the output
console.log("\n📄 Generated JSON:");
console.log(jsonOutput);
const fs = require("fs");
const path = require("path");

const dir = path.join(process.cwd(), "assets", "data");
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Write the JSON file
const filePath = path.join(dir, "homepage.json");
fs.writeFileSync(filePath, jsonOutput);
console.log(`✅ homepage.json created at: ${filePath}`);
