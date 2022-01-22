import { useState } from 'react';

import bored from '../../assets/bored.jpg';

import Article from '../../components/Article';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import NavModal from '../../components/NavModal';

import s from './style.module.css';

export default function Articles() {
  const [navOpened, setNavOpened] = useState(false);

  document.onkeyup = function (e) {
    var evt = window.event || e;
      if (evt.ctrlKey && evt.keyCode === 32) {
        setNavOpened(!navOpened)
      }
  }

  const articles = [
    {
      id: 1,
      image: bored,
      title: 'Você já se sentiu enjoado ou cansado de um projeto no meio do caminho?',
      description: 'Um pouco sobre a minha experiência encabeçando projetos e alguns erros que cometi.',
      date: '12 de agosto de 2021',
      tag: 'voce-ja-se-sentiu-enjoado-ou-cansado-de-um-projeto-no-meio-do-caminho'
    }
  ];

  return (
    <>
    <div className={s.articles}>
      <Header />
  
      <div className={s.container}>
        <div className={s.title}>
          <span>compartilhando experiências</span>
          
          <h4>
            Aqui estão alguns artigos que eu ando escrevendo, gostaria de ter
            esse espaço para abordar assuntos gerais sobre desenvolvimento,
            carreira e experiências pessoais.
          </h4>
        </div>

        <div className={s.articles}>
          <span className={s.mini}>últimos artigos</span>

          {
            articles.map(article => (
              <Article article={article} />
            ))
          }
        </div>

      </div>

      <Footer />

    </div>
      {navOpened ? <NavModal setNavOpened={setNavOpened} /> : null}
    </>
  )
}