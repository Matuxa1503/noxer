import { FC } from 'react';
import s from './SearchProductCard.module.css';
import { convertPrice } from '../../../utils/convertPrice';
import plug from '../../../assets/plug.png';

interface Props {
  item: any;
}

export const SearchProductCard: FC<Props> = ({ item }) => {
  const price = convertPrice(item.parameters[0].price, item.parameters[0].old_price);
  const mainImg = item.images[0] ? item.images[0].Image_URL : plug;

  return (
    <div className={s.card}>
      <img src={mainImg} alt="" />

      <div className={s.rightBlock}>
        <p className={s.title}>{item.Product_Name}</p>
        <div className={s.priceBlock}>
          {price.current && <p className={s.currentPrice}>{price.current}₽</p>}
          {price.old && <p className={s.oldPrice}>{price.old}₽</p>}
          <p className={s.discount}>{price.discount()}</p>
        </div>
      </div>
    </div>
  );
};
