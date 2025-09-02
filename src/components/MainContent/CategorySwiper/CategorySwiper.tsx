import { FC } from 'react';
import s from './CategorySwiper.module.css';
import { SwiperCard } from './SwiperCard/SwiperCard';

export const CategorySwiper: FC = () => {
  const data = [
    {
      Category_ID: 1,
      Category_Image: 'https://static-sda.ru/brandbot/menu/card1.png',
      Category_Name: 'Техника',
      sort_order: 1,
    },
    {
      Category_ID: 54,
      Category_Image: 'https://snipp.ru/uploads/images/donut.png',
      Category_Name: 'ТЕстовая категорий',
      sort_order: 2,
    },
    {
      Category_ID: 55,
      Category_Image: '',
      Category_Name: 'Упаковка расходники',
      sort_order: 3,
    },
    {
      Category_ID: 56,
      Category_Image: '',
      Category_Name: 'срезка',
      sort_order: 4,
    },
    {
      Category_ID: 57,
      Category_Image: '',
      Category_Name: 'вазы',
      sort_order: 5,
    },
    {
      Category_ID: 58,
      Category_Image: '',
      Category_Name: 'пакеты',
      sort_order: 6,
    },
    {
      Category_ID: 5,
      Category_Image: 'https://static-sda.ru/brandbot/menu/card5.png',
      Category_Name: 'Наушники',
      sort_order: 23,
    },
  ];

  return (
    <div className={s.swiper}>
      {data.map((item) => (
        <SwiperCard key={item.Category_ID} item={item} />
      ))}
    </div>
  );
};
