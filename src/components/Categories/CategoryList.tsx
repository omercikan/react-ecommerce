import React from 'react'
import { Product } from '../../types/types';
import CategoryItem from './CategoryItem';

export type CategoryListProps = {
    matchedCategory: Product[] | undefined;
}

const CategoryList: React.FC<CategoryListProps> = ({ matchedCategory }) => {
  return (
    <React.Fragment>
        <ul className='container mx-auto flex flex-wrap justify-center max-lg:justify-start max-lg:grid max-lg:grid-cols-2 max-[375px]:grid-cols-1 max-lg:mx-0 max-sm:gap-3 max-sm:px-4 gap-6'>
            {matchedCategory?.map((product) => (
                <CategoryItem key={product.id} product={product}/>
            ))}
        </ul>
    </React.Fragment>
  )
}

export default CategoryList