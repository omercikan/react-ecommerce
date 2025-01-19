import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetchProductsQuery } from '../redux/Api/ProductApi';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { TiStarFullOutline } from "react-icons/ti";

const ProductReview: React.FC = () => {
    const params = useParams();
    const incomingID = params.id?.split(':')[1];
    const { data } = useFetchProductsQuery();
    const { reviews } = useSelector((state: RootState) => state.evaluationSlice);
    const matchedProduct = data?.find((product) => product.id === Number(incomingID))
    const matchedReviews = reviews.filter((review) => review.category === matchedProduct?.category);
    const placeholderRateScore = Array.from({length: 5}, (_, item) => item+1)
    
    let totalStars: number = 0; 
    const totalComments = matchedReviews.length;
    matchedReviews.forEach((rev) =>  totalStars += rev.stars);
    const productScoreAverage = totalComments > 0 ?  (totalStars / totalComments).toFixed(2) : "0";
    
    //! Product progress width !//
    const raitingCount = [1, 2, 3, 4, 5].reverse().map((star) => matchedReviews.filter((rev) => rev.stars === star).length)
    const raitingPercentages = raitingCount.map((count) => (count / totalComments) * 100);

    //! Product score stars !//
    const productScoreStar = Array.from({length: Math.ceil(Number(productScoreAverage))}, (_, item) => item);
    const productScoreEmptyStar = Array.from({length: 5 - productScoreStar.length}, (_, item) => item);

    return (
        <div className='mt-[7.625rem] mb-5 max-sm:mt-[90px]'>
            <div className="container mx-auto">
                <div className="product-review-card">
                    <div className="product-review-card__information border max-sm:mx-4 p-6 rounded-lg">
                        <div className='product-review-header mb-6'>
                            <header>
                                <h2 className='whitespace-nowrap text-ellipsis overflow-hidden'><strong className='text-[#161880]'>Trendly</strong> {matchedProduct?.title}</h2>
                            </header>
                        </div>

                        <div className='flex max-md:flex-col items-center gap-10'>
                            <figure className='w-[12.5rem] h-[17.625rem]'>
                                <img src={matchedProduct?.image} alt={matchedProduct?.title} className='h-full w-full object-contain'/>
                            </figure>

                            <div className="product-review-rate-score">
                                <div className='flex gap-10 items-center max-sm:flex-col max-sm:gap-3'>
                                    <div className='product-rate-score flex flex-col gap-3 items-center'>
                                        <span className='text-[#484848] text-6xl'>{productScoreAverage}</span>
                                        <ul className='flex justify-center'>
                                            {productScoreStar.map((_item, index) => (
                                                <li key={index}>
                                                    <TiStarFullOutline size={24} color='#fdc525' />
                                                </li>
                                            ))}

                                            {productScoreEmptyStar.length > 0 && (
                                                productScoreEmptyStar.map((_item, index) => (
                                                    <li key={index}>
                                                        <TiStarFullOutline size={24} color='#dedede'/>
                                                    </li>
                                                ))
                                            )}
                                        </ul>
                                    </div>  

                                    <ul className='flex flex-col gap-2'>
                                        {placeholderRateScore.reverse().map((item, index) => (
                                            <li className='flex items-center gap-3' key={index}>
                                                <span className='flex items-center gap-[.0625rem] font-semibold text-sm'>
                                                    <TiStarFullOutline size={20} className='text-[#fdc525]'/>
                                                    {item}
                                                </span>

                                                <div className="rate-score-progress h-2 w-[21.5625rem] max-lg:w-[200px] max-[320px]:w-[150px]">
                                                    <div className='bg-[#eeeeee] h-2 w-full rounded-full relative'>
                                                        <span className='h-full bg-[#fdc525] rounded-full inline-block absolute' style={{width: `${raitingPercentages[5 - item]}%`}}></span>
                                                    </div>
                                                </div>

                                                <span className='text-[#646464] text-xs'>{matchedReviews.filter((rev) => rev.stars == item && rev.comment).length}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductReview