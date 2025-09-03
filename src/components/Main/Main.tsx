import { FC } from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { PopularSearches } from '../PopularSearches/PopularSearches';
import { FilterProducts } from '../FilterProducts/FilterProducts';
import { MainContent } from '../MainContent/MainContent';

interface Props {
  searchValue: string;
  focused: boolean;
  setSearchValue: (value: string) => void;
  setFocused: (value: boolean) => void;
}

export const Main: FC<Props> = ({ searchValue, setSearchValue, focused, setFocused }) => {
  return (
    <main>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} setFocused={setFocused} />
      {/* Если фокус и пустой инпут — показываем популярные запросы */}
      {focused && !searchValue && <PopularSearches setSearchValue={setSearchValue} />}

      {/* Если есть текст — показываем фильтрованные товары */}
      {searchValue && <FilterProducts query={searchValue} />}

      {/* Если нет фокуса и пустой инпут — показываем главную */}
      {!focused && !searchValue && <MainContent searchValue={searchValue} focused={focused} />}
    </main>
  );
};
