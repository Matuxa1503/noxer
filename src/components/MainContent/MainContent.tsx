import { FC } from 'react';
import s from './MainContent.module.css';
import swiperBanner from '../../assets/swiper-banner.jpg';
import { CategorySwiper } from './CategorySwiper/CategorySwiper';
import { Products } from './Products/Products';

export const MainContent: FC = () => {
  return (
    <main>
      <img className={s.banner} src={swiperBanner} alt="swiper-banner" />
      <CategorySwiper />
      <Products />
    </main>
  );
};
