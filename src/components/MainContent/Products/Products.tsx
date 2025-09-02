import { FC, useEffect, useState } from 'react';
import s from './Product/Product.module.css';
import { Product } from './Product/Product';

export const Products: FC = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://noxer-test.ru/webapp/api/products?on_main=true');
        if (response.ok) {
          const result = await response.json();
          setProducts(result.products);
        }
      } catch (err) {
        console.error('Ошибка запроса:', err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={s.productsList}>{products.length > 0 && products.map((item) => <Product key={item.Product_ID} item={item} />)}</div>
  );
};
