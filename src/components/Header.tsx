import { FC } from 'react';
import s from './Header.module.css';
import { ChevronDown, Ellipsis, X } from 'lucide-react';
import tgIcon from '../assets/icon_tg.png';

interface Props {
  className?: string;
}

export const Header: FC<Props> = () => {
  return (
    <header className={s.header}>
      <button className={s.closeBtn}>
        <X size={15} strokeWidth={2.5} color="#666666" />
        Закрыть
      </button>

      <a className={s.tgLink} href="#">
        <img src={tgIcon} alt="tg-icon" />
        наш tg-канал
      </a>

      <div className={s.dropDown}>
        <ChevronDown color="#666666" />
        <Ellipsis size={16} color="#666666" />
      </div>
    </header>
  );
};
