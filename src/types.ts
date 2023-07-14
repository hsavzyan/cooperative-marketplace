export type Product = {
  id: string;
  name: string;
  price: number;
};

export type Review = {
  id: string;
  author: string;
  content: string;
};

export type Business = {
  id: string;
  name: string;
  description: string;
  products: Product[];
  reviews: Review[];
};
