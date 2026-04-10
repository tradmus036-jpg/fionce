export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  price?: string;
  originalPrice?: string;
  discountPercent?: number;
  images: string[];
  heroImage?: string;
  specs: ProductSpec[];
  externalLink: string;
  hepsiburadaLink?: string;
  trendyolLink?: string;
  isFeatured: boolean;
  isArchived?: boolean;
  isBundle?: boolean;
  bundleItems?: string[];
}
