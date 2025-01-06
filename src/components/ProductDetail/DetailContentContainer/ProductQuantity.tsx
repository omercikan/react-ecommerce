import React, { Dispatch, SetStateAction } from "react";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";

type ProductQuantityProps = {
    quantity: number;
    setQuantity:Dispatch<SetStateAction<number>>;
}

const ProductQuantity: React.FC<ProductQuantityProps> = ({quantity, setQuantity}) => {
  return (
    <div className="detail-quantity-container">
      <div className="quantity-wrapper">
        <button onClick={() => setQuantity(quantity >= 2 ? quantity - 1 : 1)}>
          <LuMinus size={18} />
        </button>

        <input
          type="number"
          value={quantity}
          readOnly
          className="quantity-input"
        />

        <button
          onClick={() =>
            setQuantity(quantity >= 20 ? (quantity = 20) : quantity + 1)
          }
        >
          <GoPlus size={18} />
        </button>
      </div>
    </div>
  );
};

export default ProductQuantity;
