import { useState } from 'react';
import './App.css';
import { FilterProducts } from './components/FilterProducts/FilterProducts';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { MainContent } from './components/MainContent/MainContent';
import { PopularSearches } from './components/PopularSearches/PopularSearches';
import { SearchBar } from './components/SearchBar/SearchBar';
import { AppDataProvider } from './AppDataContext';

function App() {
  const [focused, setFocused] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  return (
    <AppDataProvider>
      <Header />
      <SearchBar setFocused={setFocused} searchValue={searchValue} setSearchValue={setSearchValue} />

      {focused && !searchValue && <PopularSearches />}
      {searchValue && <FilterProducts query={searchValue} />}
      {!focused && !searchValue && <MainContent searchValue={searchValue} focused={focused} />}

      <Footer />
    </AppDataProvider>
  );
}

export default App;
