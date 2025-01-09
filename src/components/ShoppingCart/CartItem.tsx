import React, { useCallback, useMemo } from "react";
import { CartItemInterface } from "../../types/types";
import { Link } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { DecreaseQuantity, IncreaseQuantity, removeCart } from "../../redux/Slices/cartSlice";
import { IoCloseOutline } from "react-icons/io5";

type cartItemProps = {
  product: CartItemInterface;
};

const CartItem: React.FC<cartItemProps> = ({ product }) => {
  const { id, productImage, productQuantity, productSize, productTitle, productPrice } = product;
  const { cart } = useSelector((state: RootState) => state.cartSlice);
  const dispatch = useDispatch<AppDispatch>();

  const handleIncrease = useCallback(() => {
    dispatch(
      IncreaseQuantity({...product, productQuantity: productQuantity < 20 ? productQuantity + 1 : productQuantity })
    )
  }, [dispatch, product, productQuantity])

  const handleDecrease = useCallback(() => {
    dispatch(
      DecreaseQuantity({...product, productQuantity: product.productQuantity >= 2 ? productQuantity - 1 : productQuantity})
    )
  }, [dispatch, product, productQuantity]);

  const cartItemClass = useMemo(() => {
    return cart.length > 1 ? 'border-b py-6' : 'py-6'
  }, [cart.length > 1]);

  return (
    <li className={cartItemClass}>
      <div className="cart-item-wrapper">
        <div className="flex gap-6">
          <div className="cart-item-image flex-[30%]">
            <figure>
              <img
                src={productImage}
                alt={productTitle}
                className="w-[110px] h-[110px] object-contain"
              />
            </figure>
          </div>

          <div className="cart-item-content flex-[70%] h-full">
            <Link to={`/product-detail/${productTitle.substring(0, 30)}:${id}`}>
              <span className="text-black">
                {productTitle.substring(0, 30)}...
              </span>
            </Link>

            <div className="cart-item-size-info">
              <span className="text-[#969696] text-sm">{productSize}</span>
            </div>

            <div className="cart-item-price">
              <span className="text-[#e10600] font-bold">${productPrice}</span>
            </div>

            <div className="cart-item-quantity">
                <div className="flex items-center justify-between">
                    <div className="quantity-wrapper mt-4">
                      <button onClick={handleDecrease}>
                        <LuMinus size={18} color="black" />
                      </button>

                      <input
                        type="text"
                        value={productQuantity}
                        readOnly
                        className="quantity-input text-black"
                      />

                      <button onClick={handleIncrease}>
                        <GoPlus color="black" />
                      </button>
                    </div>

                    <IoCloseOutline color="black" className="mt-4" cursor="pointer" size={28} onClick={() => dispatch(removeCart(id))}/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;