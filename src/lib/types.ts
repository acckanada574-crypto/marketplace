export type ProductKind = "physical" | "digital";

export type CategoryId =
  | "ceramics"
  | "textile"
  | "wood"
  | "jewelry"
  | "leather"
  | "home"
  | "patterns"
  | "graphics";

export type Artisan = {
  id: string;
  name: string;
  city: string;
  craft: string;
  bio: string;
  since: number;
  mark: string;
};

export type Review = {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
};

export type Product = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  kind: ProductKind;
  category: CategoryId;
  artisanId: string;
  image: string;
  images?: string[];
  materials?: string;
  size?: string;
  care?: string;
  shipsInDays?: number;
  stock: number;
  rating: number;
  reviewCount: number;
  reviews: Review[];
  featured?: boolean;
  isNew?: boolean;
  digitalFormat?: string;
  digitalPages?: string;
  license?: string;
  fileSize?: string;
  custom?: boolean;
  // Техническая подпись (SHA-256) для цифровых товаров
  fileHash?: string;
  signedAt?: string;
  signedBy?: string;
};

export type CartLine = {
  productId: string;
  qty: number;
};

export type OrderItem = {
  productId: string;
  title: string;
  price: number;
  qty: number;
  kind: ProductKind;
  image: string;
};

export type OrderCustomer = {
  name: string;
  email: string;
  phone: string;
  city?: string;
  address?: string;
  postal?: string;
};

export type Order = {
  id: string;
  createdAt: string;
  items: OrderItem[];
  customer: OrderCustomer;
  shipping: number;
  total: number;
  status: "paid" | "shipped" | "delivered";
};

export const CATEGORIES: { id: CategoryId; label: string; hint: string }[] = [
  { id: "ceramics", label: "Керамика", hint: "Глина и глазурь" },
  { id: "textile", label: "Текстиль", hint: "Лён, шерсть, вышивка" },
  { id: "wood", label: "Дерево", hint: "Дуб, ясень, воск" },
  { id: "jewelry", label: "Украшения", hint: "Серебро и камни" },
  { id: "leather", label: "Кожа", hint: "Ручной шов" },
  { id: "home", label: "Дом", hint: "Свет и уют" },
  { id: "patterns", label: "Схемы", hint: "Вязание и крой" },
  { id: "graphics", label: "Графика", hint: "Принты и кисти" },
];