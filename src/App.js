import { useState } from 'react';
import './App.css';

import Logo from './assets/h.png';
import ArrowRight from './assets/icons/arrow-right.png';

import NavModal from './components/NavModal';

function App() {
  const [navOpened, setNavOpened] = useState(false);

  return (
    <div className="App">
      <img src={Logo} alt="" />

      <div className="header">
        <h1>Luan Hubner</h1>

        <h4>Full Stack Developer</h4>
      </div>

      <h3 className="t-blue">With knowledge and much coffe we gonna far!</h3>

      <div className="pressing" onClick={() => setNavOpened(true)}>
        <span>press</span>
        <div className="buttons">
          <button>ctrl</button>
          <button>space</button>
        </div>
        to continue <img src={ArrowRight} alt="" />
      </div>

      {navOpened ? <NavModal setNavOpened={setNavOpened} /> : null}
    </div>
  );
}

export default App;
