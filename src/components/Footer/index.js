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
        <img src={me} alt="me" />

        <span>Me envie um email</span>

        <h5 className={s.email}>luanhubner.pro@gmail.com</h5>

        <div className={s.socials}>
          <span>Redes Sociais</span>

          <div className={s.icons}>
            <img src={github} alt="github" />
            <img src={linkedin} alt="linkedin" />
            <img src={twitter} alt="twitter" />
            <img src={instagram} alt="instagram" />
          </div>
        </div>
      </footer>

      <div className={s.bottom}>
        <span>© 2021 Luan Hubner | Full Stack Developer / Brasil</span>
      </div>
    </div>
  )
}