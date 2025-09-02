import { FC } from 'react';
import s from './MainContent.module.css';
import swiperBanner from '../../assets/swiper-banner.jpg';
import { CategorySwiper } from './CategorySwiper/CategorySwiper';
import { Products } from './Products/Products';

interface Props {
  focused: boolean;
  searchValue: string;
}

export const MainContent: FC<Props> = ({ focused, searchValue }) => {
  return (
    <main style={{ display: focused || searchValue ? 'none' : 'block' }}>
      <img className={s.banner} src={swiperBanner} alt="swiper-banner" />
      <CategorySwiper />
      <Products />
    </main>
  );
};
