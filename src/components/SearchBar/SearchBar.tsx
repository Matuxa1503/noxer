import { FC } from 'react';
import s from './SearchBar.module.css';

export const SearchBar: FC = () => {
  return <input type="text" className={s.input} placeholder="Найти товары" />;
};
