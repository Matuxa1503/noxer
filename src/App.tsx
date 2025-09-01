import './App.css';
import { Header } from './components/Header/Header';
import { PopularSearches } from './components/PopularSearches/PopularSearches';
import { SearchBar } from './components/SearchBar/SearchBar';

function App() {
  return (
    <>
      <Header />
      <SearchBar />
      <PopularSearches />
    </>
  );
}

export default App;
