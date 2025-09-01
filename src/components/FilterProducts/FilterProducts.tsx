import { FC } from 'react';
import { SearchProductCard } from './SearchProductCard/SearchProductCard';
import s from './SearchProductCard/SearchProductCard.module.css';

export const FilterProducts: FC = () => {
  // filter logic

  return (
    <div className={s.listProducts}>
      <SearchProductCard />
      <SearchProductCard />
      <SearchProductCard />
    </div>
  );
};
