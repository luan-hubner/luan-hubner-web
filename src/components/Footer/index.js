import s from './style.module.css';

import me from '../../assets/me.png';

import linkedin from '../../assets/icons/linkedin.png';
import twitter from '../../assets/icons/twitter.png';
import instagram from '../../assets/icons/instagram.png';
import github from '../../assets/icons/github.png';

export default function Footer() {
  return (
    <div>
      <footer>
        <img className={s.me} src={me} alt="me" />

        <span className={s.miniTitle}>Me envie um email</span>

        <h5 className={s.email}>luanhubner.pro@gmail.com</h5>

        <div className={s.socials}>
          <span className={s.miniTitle}>Redes Sociais</span>

          <div className={s.icons}>
            <a href="https://github.com/luan-hubner">
              <img className={s.icon} src={github} alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/luan-hubner-b82b16177/">
              <img className={s.icon} src={linkedin} alt="linkedin" />
            </a>
            <a href="https://www.instagram.com/luanhubner/">
              <img className={s.icon} src={instagram} alt="instagram" />
            </a>
          </div>
        </div>
      </footer>

      <div className={s.bottom}>
        <span>© 2021 Luan Hubner | Full Stack Developer / Brasil</span>
      </div>
    </div>
  )
}