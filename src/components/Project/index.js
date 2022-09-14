import s from './style.module.css'

import githubIcon from '../../assets/icons/github.png'
import outIcon from '../../assets/icons/out.png'

export default function Project({ project }) {
  return (
    <div className={s.card}>
      <img src={project.image} alt="preview" className={s.cardImage} />
      <div className={s.cardOverlay}>
        <div className={s.overlayText}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>

          <div className={s.buttons}>
            <a href={project.github} target="_blank">
              <img src={githubIcon} alt="github-link" title="GitHub" />
            </a>

            {project.website ? (
              <a href={project.website} target="_blank">
                <img src={outIcon} alt="website-link" title="Website" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
