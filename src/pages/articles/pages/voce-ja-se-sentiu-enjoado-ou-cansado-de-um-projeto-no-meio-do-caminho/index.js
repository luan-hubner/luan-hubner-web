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

      <div className={s.content}>
        <div className={s.block}>
          <p>
            O processo de desenvolvimento de software é complexo quando você tenta
            executá-lo da maneira correta, porém, gastar energias no planejamento
            e estruturação do projeto antes de começar é extremamente importante,
            eu diria que imprescindível para que o projeto seja concluído com
            sucesso e entregue no tempo estipulado.
          </p>
          <img src="" alt="" />
        </div>
      </div>
    </main>
  );
}