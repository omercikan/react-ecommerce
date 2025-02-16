import React, { useMemo, useState } from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store';
import { addToCart } from '../../../redux/Slices/cartSlice';
import { Product } from '../../../types/types';
import CircularProgress from '@mui/material/CircularProgress';
import { changeOpenModeCart } from '../../../redux/Slices/isOpenCartSlice';
import { addToLikes } from '../../../redux/Slices/likesSlice';
import useToastify from '../../../customHooks/useToastify';

type addToCartProps = {
    incomingID: number;
    matchedProduct: Product | undefined;
    quantity: number;
    selectSize: string;
}

const AddToCart: React.FC<addToCartProps> = ({incomingID, matchedProduct, quantity, selectSize}) => {
    const dispatch = useDispatch<AppDispatch>();
    const { cart } = useSelector((state: RootState) => state.cartSlice);
    const { likes } = useSelector((state: RootState) => state.likesSlice);
    const inCart = cart.find((product) => product.id === incomingID);
    const [adds, setAdds] = useState<boolean>(false);

    const findLikeItem = likes.find((product) => product.id === matchedProduct?.id);
    
    const handleAddCart = () => {
       setAdds(true);
       
       setTimeout(() => {
            document.body.style.overflowY = "hidden"
            useToastify(`Product Added To Cart ${cart.length+1}`)
           
            dispatch(
                addToCart({
                    id: incomingID,
                    productImage: matchedProduct!.image,
                    productTitle: matchedProduct!.title,
                    productQuantity: quantity,
                    productSize: selectSize,
                    productPrice: matchedProduct!.price,
                }),
            )

            dispatch(changeOpenModeCart());
           setAdds(false);
        }, 1000);
    }

    const handleAddLikes = () => {
        if(!findLikeItem) {
            useToastify(`Product Added To Favorites (${likes.length +1})`)
        } else {
            useToastify(`Product Removed From Favorites (${likes.length -1})`)
        }
        
        dispatch(
            addToLikes({...matchedProduct!})
        )
    }

    const addsClass = useMemo(() => {
        return !adds && 'hover:bg-white hover:text-black'
    }, [adds]);
    
    const CircularProgres = useMemo(() => {
        return adds ? <CircularProgress size={20} style={{color: "#fff"}} /> : "Add To Cart";
    }, [adds])

    return (
        <React.Fragment>
            {matchedProduct && (
                <div className="flex items-center gap-5">
                    <button
                    className={`bg-[#232323] 
                    text-white py-3 px-20 rounded-full my-10 ${addsClass} border border-black transition duration-500 max-sm:px-16 disabled:bg-gray-400 disabled:border-gray-400 disabled:hover:text-white`}
                    onClick={handleAddCart}
                    disabled={!!inCart}
                    >
                    {CircularProgres}
                    </button>

                    <button 
                        className={
                            `border p-3 rounded-full hover:bg-red-400 hover:border-red-400 duration-500 hover:last:text-red-100 
                            ${findLikeItem && 'bg-red-400 border-red-400 last:text-red-100'}`
                        }
                        onClick={handleAddLikes}
                    >
                        <FaRegHeart size={24} />
                    </button>
                </div>
            )}
        </React.Fragment>
    )
}

export default AddToCart