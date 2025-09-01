import { FC } from 'react';
import s from './SearchProductCard.module.css';
import productPhoto from '../../../assets/image.png';

export const SearchProductCard: FC = () => {
  return (
    <div className={s.card}>
      <img src={productPhoto} alt="" />

      <div className={s.rightBlock}>
        <p className={s.title}>Футболка мужская Комары</p>
        <div className={s.priceBlock}>
          <p className={s.currentPrice}>2 800 ₽</p>
          <p className={s.oldPrice}>3 500 ₽</p>
          <p className={s.discount}>-20%</p>
        </div>
      </div>
    </div>
  );
};
