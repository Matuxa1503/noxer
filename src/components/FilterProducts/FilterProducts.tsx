import { FC, useEffect, useState } from 'react';
import { SearchProductCard } from './SearchProductCard/SearchProductCard';
import s from './SearchProductCard/SearchProductCard.module.css';
import { fetchDataOnAnother } from '../../api';

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
      const data = await fetchDataOnAnother();

      const filtered = data.products.filter((p: any) => p.Product_Name.toLowerCase().includes(query.toLowerCase()));
      setProducts(filtered);

      setLoading(false);
    };

    fetchProducts();
  }, [query]);

  if (loading) return <p className={s.loader}>Загрузка...</p>;
  if (!products.length) return <p className={s.loader}>Нет совпадений</p>;

  return (
    <section className={s.listProducts}>
      {products && products.length > 0 && products.map((item) => <SearchProductCard key={item.Product_ID} item={item} />)}
    </section>
  );
};
