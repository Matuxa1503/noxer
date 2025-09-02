import { FC, useEffect, useState, useRef } from 'react';
import s from './Product/Product.module.css';
import { Product } from './Product/Product';

export const Products: FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const perPage = 11;
  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://noxer-test.ru/webapp/api/products?on_main=false&per_page=${perPage}&page=${page}`);
        if (res.ok) {
          const data = await res.json();
          if (page === 1) {
            setProducts(data.products);
          } else {
            setProducts((prev) => [...prev, ...data.products]);
          }
          setHasMore(data.products.length === perPage);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
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
