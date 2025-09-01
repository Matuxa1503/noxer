import { FC } from 'react';
import s from './PopularSearches.module.css';
import searchIcon from '../../assets/icons/search.png';

export const PopularSearches: FC = () => {
  const data = ['футболка', 'женская кофта', 'куртка', 'сертификат на 1000 рублей', 'детская футболка', 'шапка'];

  return (
    <div className={s.wrapper}>
      <h2 className={s.subtitle}>Часто ищут</h2>
      <ul>
        {data.map((item) => (
          <div className={s.item}>
            <img src={searchIcon} alt="search" />
            <li>{item}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};
