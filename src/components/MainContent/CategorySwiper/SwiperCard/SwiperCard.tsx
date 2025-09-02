import { FC } from 'react';
import { ISwiperCard } from '../../../../interfaces';
import plug from '../../../../assets/plug.png';
import s from './SwiperCard.module.css';

interface Props {
  item: ISwiperCard;
}

export const SwiperCard: FC<Props> = ({ item }) => {
  return (
    <div className={s.swiperCard}>
      <div className={s.imgWrapper}>
        <img className={s.img} src={item.Category_Image || plug} alt={item.Category_Name || 'plug'} />
      </div>
      <p className={s.title}>{item.Category_Name}</p>
    </div>
  );
};
