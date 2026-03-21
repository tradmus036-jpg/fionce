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
  images: string[];
  specs: ProductSpec[];
  externalLink: string;
  isFeatured: boolean;
}
