import { FC } from 'react';
import s from './Header.module.css';
import tgIcon from '../../assets/icon_tg.png';
import crossIcon from '../../assets/icons/cross.png';
import arrowBottomIcon from '../../assets/icons/arrow-bottom.png';
import moreIcon from '../../assets/icons/more.png';

export const Header: FC = () => {
  return (
    <header className={s.header}>
      <button className={s.closeBtn}>
        <img src={crossIcon} alt="cross" />
        Закрыть
      </button>

      <a className={s.tgLink} href="#">
        <img src={tgIcon} alt="tg-icon" />
        наш tg-канал
      </a>

      <div className={s.dropDown}>
        <img src={arrowBottomIcon} alt="arrow-bottom" />
        <img src={moreIcon} alt="more" />
      </div>
    </header>
  );
};
