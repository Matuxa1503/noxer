import { FC } from 'react';
import s from './SearchBar.module.css';

export const SearchBar: FC = () => {
  return (
    <div className={s.wrapper}>
      <input type="text" className={s.input} placeholder="Найти товары" />
      {/* logic for visibility btn  */}
      {/* <button className={s.btn}>Перейти</button> */}
    </div>
  );
};
