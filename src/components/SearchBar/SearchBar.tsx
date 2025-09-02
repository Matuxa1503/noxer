import { FC } from 'react';
import s from './SearchBar.module.css';

interface Props {
  searchValue: string;
  setSearchValue: (value: string) => void;
  setFocused: (value: boolean) => void;
}

export const SearchBar: FC<Props> = ({ searchValue, setSearchValue, setFocused }) => {
  return (
    <div className={s.wrapper}>
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onFocus={() => setFocused(true)}
        type="text"
        className={s.input}
        placeholder="Найти товары"
      />
      {searchValue && <button className={s.btn}>Перейти</button>}
    </div>
  );
};
