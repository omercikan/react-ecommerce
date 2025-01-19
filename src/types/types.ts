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
  setReviewModal?: React.Dispatch<React.SetStateAction<boolean>>
};

export interface CartItemInterface {
  id: number;
  productImage: string;
  productQuantity: number;
  productSize: string;
  productTitle: string;
  productPrice: number;
}

export type likesSliceInitialStateTypes = {
  likes: Product[];
}

export type evaluationProductType = {
  category: string;
  comment: string;
  id: number;
  image: string;
  stars: number;
  title: string;
}

export type evaluationSliceInitialStateType = {
  reviews: evaluationProductType[];
}