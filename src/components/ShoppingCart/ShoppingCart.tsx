import React, { useMemo } from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import CartItem from './CartItem';
import { changeOpenModeCart } from '../../redux/Slices/isOpenCartSlice';

const ShoppingCart: React.FC = () => {
    const { cart } = useSelector((state: RootState) => state.cartSlice);
    const { isOpenCart } = useSelector((state: RootState) => state.isOpenCartSlice);
    const dispatch = useDispatch<AppDispatch>();

    const cartTotal = useMemo(() => {
        return cart.reduce((acc, item) => acc += (item.productPrice * item.productQuantity), 0).toFixed(2);
    }, [cart]);

    const renderedCartItems = useMemo(() => {
        return cart?.map((cartProduct) => (
            <CartItem product={cartProduct} key={cartProduct.id}/>
        ));
    }, [cart]); 

    const totalItemsAmount = useMemo(() => {
        return `${cart.length} items`
    }, [cart.length])

    return (
        <React.Fragment>
            {isOpenCart && (
                <div className='shopping-cart-container fixed top-0 left-0 w-full h-screen z-30'>
                    <div className='shopping-cart-wrapper bg-white w-[420px] h-screen fixed right-0 top-0 max-sm:w-[95%]'>
                        <div className="shopping-cart-wrapper__title py-[24px] px-[30px]">
                            <div className='flex items-center justify-between text-black'>
                                <h2 className='color-[#232323] text-lg font-semibold'>Shopping Cart</h2>
                                <IoCloseOutline size={24} cursor='pointer' onClick={() => dispatch(changeOpenModeCart())} />
                            </div>
                            <span className='text-[#727272] text-sm mt-2 inline-block'>{totalItemsAmount}</span>
                        </div>

                        <div className="shopping-cart-products">
                            <ul className='py-[14px] px-[30px] flex flex-col gap-3 overflow-auto h-96'>
                                {renderedCartItems}
                            </ul>

                            <ul className='px-[30px] py-[14px] text-[#232323] border-t'>
                                <li className='flex justify-between'>
                                    <span className='text-sm font-semibold'>Subtotal:</span> <span className='text-[15px] font-semibold'>${cartTotal}</span>
                                </li>

                                <li className='flex justify-between mt-3'>
                                    <span className='text-sm font-semibold'>Total:</span> <span className='text-[15px] font-semibold'>${cartTotal}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </React.Fragment>
    )
}

export default ShoppingCart