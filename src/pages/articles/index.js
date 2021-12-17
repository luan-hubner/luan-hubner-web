import { useState } from 'react';

import Article from '../../components/Article';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import NavModal from '../../components/NavModal';

import s from './style.module.css';

export default function Articles() {
  const [navOpened, setNavOpened] = useState(false);

  document.onkeyup = function (e) {
    var evt = window.event || e;
      if (evt.ctrlKey && evt.keyCode == 32) {
        setNavOpened(!navOpened)
      }
  }

  return (
    <>
    <div className={s.articles}>
      <Header />
  
      <div className={s.container}>
        <div className={s.title}>
          <span>sharing experiences</span>
          
          <h4>
            Aqui estão alguns artigos que eu ando escrevendo, gostaria de ter
            esse espaço para abordar assuntos gerais sobre desenvolvimento,
            carreira e experiências pessoais.
          </h4>
        </div>

        <div className={s.articles}>
          <span className={s.mini}>últimos artigos</span>

          <Article />
          <Article />
        </div>

      </div>

      <Footer />

    </div>
      {navOpened ? <NavModal setNavOpened={setNavOpened} /> : null}
    </>
  )
}