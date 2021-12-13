import s from './style.module.css';

import { Link } from 'react-router-dom';

import about from '../../assets/icons/about.png';
import keyboard from '../../assets/icons/keyboard.png';
import pen from '../../assets/icons/pen.png';
import house from '../../assets/icons/house.png';
import github from '../../assets/icons/github.png';
import linkedin from '../../assets/icons/linkedin.png';
import instagram from '../../assets/icons/instagram.png';
import twitter from '../../assets/icons/twitter.png';

export default function NavModal({ setNavOpened }) {
  return (
    <div className={s.hoverBlock}>
      <div
        className={s.backgroundFocus}
        onClick={() => setNavOpened(false)}
      ></div>
      <div className={s.container}>
        <div className={s.modal}>
          <h4>WHERE WE GO?</h4>
          <ul>
            <Link to="/home">
              <img src={house} alt="" />
              Home
            </Link>
            <Link to="/about">
              <img src={about} alt="" />
              <span>About</span>
            </Link>
            <Link to="/projects">
              <img src={keyboard} alt="" />
              Projects
            </Link>
            <Link to="/articles">
              <img src={pen} alt="" />
              Articles
            </Link>
          </ul>
          <h4>SOCIAL MEDIAS</h4>
          <ul>
            <a href='https://github.com/luan-hubner'>
              <img src={github} alt="" />
              Github
            </a>
            <a href='https://www.linkedin.com/in/luan-hubner-b82b16177/'>
              <img src={linkedin} alt="" />
              LinkedIn
            </a>
            <a href='https://www.instagram.com/luanhubner/'>
              <img src={instagram} alt="" />
              Instagram
            </a>
            <a href='https://www.twitter.com/luanhubner/'>
              <img src={twitter} alt="" />
              Twitter
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}
