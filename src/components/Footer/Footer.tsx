import { FC } from 'react';
import tgIcon2 from '../../assets/icons/icon_tg2.png';
import s from './Footer.module.css';

export const Footer: FC = () => {
  return (
    <footer className={s.footer}>
      <p className={s.title}>Разработано на платформе Noxer</p>
      <a className={s.linkTg} href="#">
        <img src={tgIcon2} alt="tg icon" />
        noxerai_bot
      </a>
    </footer>
  );
};
