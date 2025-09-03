import { FC, useEffect, useState, useRef } from 'react';
import s from './Product/Product.module.css';
import { Product } from './Product/Product';
import { fetchDataPagination } from '../../../api';
import { filterCategoryIds } from '../../../constants';

export const Products: FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const data = await fetchDataPagination(page);

      const filteredProducts = data.products.filter((product: any) =>
        product.categories.some((category: any) => filterCategoryIds.includes(category.Category_ID))
      );

      setProducts((prev) => (page === 1 ? filteredProducts : [...prev, ...filteredProducts]));
      setHasMore(data.pagination.has_next);

      setLoading(false);
    };

    fetchProducts();
  }, [page]);

  useEffect(() => {
    if (!hasMore || loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [hasMore, loading]);

  return (
    <div className={s.productsList}>
      {products.map((item, id) => (
        <Product key={id} item={item} />
      ))}

      <div ref={loaderRef} style={{ height: 1 }} />
      {loading && <p>Загрузка...</p>}
    </div>
  );
};
