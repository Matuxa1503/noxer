import { FC } from 'react';
import s from './MainContent.module.css';
import swiperBanner from '../../assets/swiper-banner.png';
import { CategorySwiper } from './CategorySwiper/CategorySwiper';

export const MainContent: FC = () => {
  return (
    <div>
      <img className={s.banner} src={swiperBanner} alt="swiper-banner" />
      <CategorySwiper />
    </div>
  );
};
