import { FC, useEffect, useState } from 'react';
import { SearchProductCard } from './SearchProductCard/SearchProductCard';
import s from './SearchProductCard/SearchProductCard.module.css';

interface Props {
  query: string;
}

export const FilterProducts: FC<Props> = ({ query }) => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    const fetchProducts = async () => {
      setLoading(true);

      try {
        const res = await fetch(`https://noxer-test.ru/webapp/api/products?on_main=false`);
        const data = await res.json();

        const filtered = data.products.filter((p: any) => p.Product_Name.toLowerCase().includes(query.toLowerCase()));
        setProducts(filtered);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [query]);

  if (loading) return <p>Загрузка...</p>;
  if (!products.length) return <p>Нет совпадений</p>;

  return (
    <div className={s.listProducts}>
      {products.map((item) => (
        <SearchProductCard key={item.Product_ID} item={item} />
      ))}
    </div>
  );
};
