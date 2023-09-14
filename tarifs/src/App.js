import logo from './logo.svg';
import './App.css';
import Tarif from './components/Tarif/Tarif';
import { useLayoutEffect } from 'react';

function App() {
  return (
    <ul className="tarifs">
      <Tarif name="Безлимитный 300" cost="300" speed="10" colorTheme="blue" />
      <Tarif name="Безлимитный 450" cost="450" speed="50" colorTheme="green" />
      <Tarif name="Безлимитный 550" cost="550" speed="100" colorTheme="red" />
      <Tarif name="Безлимитный 1000" cost="1000" speed="1000" colorTheme="black" />
    </ul>
  );
}

export default App;
