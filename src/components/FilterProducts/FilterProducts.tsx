import { FC, useEffect, useState } from 'react';
import { SearchProductCard } from './SearchProductCard/SearchProductCard';
import s from './SearchProductCard/SearchProductCard.module.css';
import { fetchDataOnAnother } from '../../api';
import { filterCategoryIds } from '../../constants';

interface Props {
  query: string;
}

export const FilterProducts: FC<Props> = ({ query }) => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handler = setTimeout(() => {
      const fetchProducts = async () => {
        setLoading(true);
        const data = await fetchDataOnAnother();

        const filteredSearchProducts = data.products.filter((product: any) =>
          product.categories.some((category: any) => filterCategoryIds.includes(category.Category_ID))
        );
        const filtered = filteredSearchProducts.filter((p: any) => p.Product_Name.toLowerCase().includes(query.toLowerCase()));
        setProducts(filtered);
        setLoading(false);
      };

      fetchProducts();
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  if (loading) return <p className={s.loader}>Загрузка...</p>;
  if (!products.length) return <p className={s.loader}>Нет совпадений</p>;

  return (
    <section className={s.listProducts}>
      {products && products.length > 0 && products.map((item) => <SearchProductCard key={item.Product_ID} item={item} />)}
    </section>
  );
};
