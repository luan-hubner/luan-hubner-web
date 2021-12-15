import s from './style.module.css';
import bored from '../../assets/bored.jpg';

export default function Article({ article }) {
  return (
    <div className={s.article}>
      <div className={s.apresentation}>
        <img src={bored} alt="" />
      </div>

      <div className={s.details}>
        <span className={s.title}>
          O que me faz enjoar e cansar de um projeto no meio do caminho?
        </span>
        <span className={s.subtitle}>
          Um pouco sobre a minha experiência encabeçando projetos e alguns erros que cometi
        </span>
        <span className={s.date}>
          12 de agosto de 2022
        </span>
      </div>
    </div>
  );
}