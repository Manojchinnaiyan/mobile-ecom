export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  unit: string;
  imageUrl: string;
  discount: number;
  deliveryTime: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  imageUrl: string;
  backgroundColor: string;
}

export interface Banner {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  backgroundColor: string;
}

export interface CategoryBanner {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  gradientColors: string[];
  discount?: string;
}

export interface OfferCard {
  title: string;
  subtitle: string;
  imageUrl: string;
  badge: string;
}
