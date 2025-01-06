import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store';
import { addToCart } from '../../../redux/cartSlice';
import { Product } from '../../../types/types';

type addToCartProps = {
    incomingID: number;
    matchedProduct: Product | undefined;
    quantity: number;
    selectSize: string;
}

const AddToCart: React.FC<addToCartProps> = ({incomingID, matchedProduct, quantity, selectSize}) => {
    const dispatch = useDispatch<AppDispatch>();
    const { cart } = useSelector((state: RootState) => state.cartSlice);
    const inCart = cart.find((product) => product.id === incomingID);

    return (
        <React.Fragment>
            {matchedProduct && (
                <div className="flex items-center gap-5">
                    <button
                    className="bg-[#232323] 
                    text-white py-3 px-20 rounded-full my-10 hover:bg-white hover:text-black border border-black transition duration-500 max-sm:px-16 disabled:bg-gray-400 disabled:border-gray-400 disabled:hover:text-white"
                    onClick={() =>
                        dispatch(
                        addToCart({
                            id: incomingID,
                            productImage: matchedProduct!.image,
                            productTitle: matchedProduct!.title,
                            productQuantity: quantity,
                            productSize: selectSize,
                        })
                        )
                    }
                    disabled={!!inCart}
                    >
                    Add To Cart
                    </button>

                    <button className="border p-3 rounded-full hover:bg-red-400 hover:border-red-400 duration-500 hover:last:text-red-100">
                    <FaRegHeart size={24} />
                    </button>
                </div>
            )}
        </React.Fragment>
    )
}

export default AddToCart