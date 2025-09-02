import { FC, useState } from 'react';
import s from './Product.module.css';
import LikeIcon from '../../../../assets/icons/Vector.png';
import selectLikeIcon from '../../../../assets/icons/Vector1.png';
import { PRODUCT_TAGS } from '../../../../constants';
import { convertPrice } from '../../../../utils/convertPrice';
import { ProductTag } from '../ProductTag/ProductTag';
import plug from '../../../../assets/plug.png';

interface Props {
  item: any;
}

export const Product: FC<Props> = ({ item }) => {
  const [selectLike, setSelectLike] = useState(false);
  const mainImg = item.images[0] ? item.images[0].Image_URL : plug;
  const price = convertPrice(item.parameters[0].price, item.parameters[0].old_price);

  return (
    <div className={s.productCard}>
      <div className={s.content}>
        <div className={s.imgBlock}>
          <img className={s.productImg} src={mainImg} alt="" />

          <div className={s.additionalBlock}>
            <div className={s.marks}>
              {item.marks.map((mark) => {
                const tagName = mark.Mark_Name.toLowerCase() as keyof typeof PRODUCT_TAGS;
                const tag = PRODUCT_TAGS[tagName];
                if (!tag) return null;
                return <ProductTag key={mark.Mark_ID} label={tag.label} color={tag.color} />;
              })}
            </div>

            <div onClick={() => setSelectLike((prev) => !prev)}>
              {selectLike ? <img src={selectLikeIcon} alt="" /> : <img src={LikeIcon} alt="" />}
            </div>
          </div>
        </div>

        <div className={s.infoBlock}>
          <div className={s.priceBlock}>
            {price.current && <p className={s.currentPrice}>{price.current}₽</p>}
            {price.old && <p className={s.oldPrice}>{price.old}₽</p>}
            <p className={s.discount}>{price.discount()}</p>
          </div>

          <p className={s.title}>{item.Product_Name}</p>
        </div>
      </div>

      <button className={s.btn}>Выбрать</button>
    </div>
  );
};
