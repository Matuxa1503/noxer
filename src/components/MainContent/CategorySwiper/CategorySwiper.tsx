import { FC, useEffect, useState } from 'react';
import s from './CategorySwiper.module.css';
import { SwiperCard } from './SwiperCard/SwiperCard';
import { fetchDataOnMain } from '../../../api';
import { filterCategoryIds } from '../../../constants';

export const CategorySwiper: FC = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const data = await fetchDataOnMain();

      const filteredCategories = data.categories.filter((category) => filterCategoryIds.includes(category.Category_ID));
      console.log(filteredCategories);
      setCategories(filteredCategories);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  return (
    <div className={s.swiper}>
      {loading && <p>Загрузка...</p>}
      {!loading && categories.map((item) => <SwiperCard key={item.Category_ID} item={item} />)}
    </div>
  );
};
