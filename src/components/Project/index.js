import s from './style.module.css';

import githubIcon from '../../assets/icons/github.png';

export default function Project({ project }) {
  return (
    <div className={s.card}>
      <img src={project.image} className={s.cardImage} />
      <div className={s.cardOverlay}>
        <div className={s.overlayText}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          
          <div className={s.buttons}>
            <img src={githubIcon} alt="github-link" />
            <img src={githubIcon} alt="website-link" />
          </div>
        </div>
      </div>
    </div>
  );
}