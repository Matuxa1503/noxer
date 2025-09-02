import { useState } from 'react';
import './App.css';
import { FilterProducts } from './components/FilterProducts/FilterProducts';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { MainContent } from './components/MainContent/MainContent';
import { PopularSearches } from './components/PopularSearches/PopularSearches';
import { SearchBar } from './components/SearchBar/SearchBar';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [focused, setFocused] = useState(false);

  const handleBackClick = () => {
    setSearchValue('');
    setFocused(false);
  };

  return (
    <>
      <Header focused={focused} onBackClick={handleBackClick} />
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} setFocused={setFocused} />

      {/* Если фокус и пустой инпут — показываем популярные запросы */}
      {focused && !searchValue && <PopularSearches setSearchValue={setSearchValue} />}

      {/* Если есть текст — показываем фильтрованные товары */}
      {searchValue && <FilterProducts query={searchValue} />}

      {/* Если нет фокуса и пустой инпут — показываем главную */}
      {!focused && !searchValue && <MainContent searchValue={searchValue} focused={focused} />}

      <Footer />
    </>
  );
}

export default App;
