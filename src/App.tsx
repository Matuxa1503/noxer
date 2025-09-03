import { useState } from 'react';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import './App.css';

function App() {
  const [focused, setFocused] = useState(false);
  const [searchValue, setSearchValue] = useState<string>('');

  const onResetInput = () => {
    setSearchValue('');
    setFocused(false);
  };

  return (
    <>
      <Header focused={focused} onResetInput={onResetInput} />
      <Main searchValue={searchValue} setSearchValue={setSearchValue} focused={focused} setFocused={setFocused} />
      <Footer />
    </>
  );
}

export default App;
