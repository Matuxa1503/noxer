import { FC, useContext } from 'react';
import s from './Product/Product.module.css';
import { Product } from './Product/Product';
import { AppDataContext } from '../../../AppDataContext';

export const Products: FC = () => {
  const { data } = useContext(AppDataContext);
  const products = data.products;

  return (
    <div className={s.productsList}>
      {products && products.length > 0 && products.map((item) => <Product key={item.Product_ID} item={item} />)}
    </div>
  );
};
