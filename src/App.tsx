import './App.css';
import { FilterProducts } from './components/FilterProducts/FilterProducts';
import { Header } from './components/Header/Header';
import { MainContent } from './components/MainContent/MainContent';
import { PopularSearches } from './components/PopularSearches/PopularSearches';
import { SearchBar } from './components/SearchBar/SearchBar';

function App() {
  return (
    <>
      <Header />
      <SearchBar />
      {/* <PopularSearches /> */}
      {/* <FilterProducts /> */}
      <MainContent />
    </>
  );
}

export default App;
