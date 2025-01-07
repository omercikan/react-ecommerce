export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}

export type ProductListData = {
  data: Product[];
};

export type productItemPropsType = {
  item: Product;
};

export type productDetailComponentsProps = {
  matchedProduct: Product | undefined;
};

export interface CartItemInterface {
  id: number;
  productImage: string;
  productQuantity: number;
  productSize: string;
  productTitle: string;
  productPrice: number;
}
