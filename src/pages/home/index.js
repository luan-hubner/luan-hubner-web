import { useState } from 'react';
import s from './style.module.css';

import Logo from '../../assets/h.png';
import ArrowRight from '../../assets/icons/arrow-right.png';

import NavModal from '../../components/NavModal';

export default function Home() {
  const [navOpened, setNavOpened] = useState(false);

  return (
    <div className={s.home}>
      <img src={Logo} alt="" />

      <div className={s.header}>
        <h1>Luan Hubner</h1>

        <h4>Full Stack Developer</h4>
      </div>

      <h3 className={s.tBlue}>With knowledge and much coffe we gonna far!</h3>

      <div className={s.pressing} onClick={() => setNavOpened(true)}>
        <span>press</span>
        <div className={s.buttons}>
          <button>ctrl</button>
          <button>space</button>
        </div>
        to continue <img src={ArrowRight} alt="" />
      </div>

      {navOpened ? <NavModal setNavOpened={setNavOpened} /> : null}
    </div>
  );
}