import Header from '../../../../components/Header';

import s from '../style.module.css';

import bored from '../../../../assets/bored.jpg';

export default function AC001() {
  return (
    <main>
      <div style={{ backgroundImage: `url(${bored})` }} className={s.apresentation}>
        <div className={s.overlay}>
          <Header />
          
          <h4>Você já se sentiu enjoado ou cansado de um projeto no meio do caminho?</h4>
        </div>
      </div>
    </main>
  );
}