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
