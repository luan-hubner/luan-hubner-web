import './style.css';

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
    <div className="hover-block">
      <div
        className="background-focus"
        onClick={() => setNavOpened(false)}
      ></div>
      <div className="container">
        <div className="modal">
          <h4>WHERE WE GO?</h4>
          <ul>
            <li>
              <img src={house} alt="" />
              <span>Home</span>
            </li>
            <li>
              <img src={about} alt="" />
              About
            </li>
            <li>
              <img src={keyboard} alt="" />
              Projects
            </li>
            <li>
              <img src={pen} alt="" />
              Articles
            </li>
          </ul>
          <h4>SOCIAL MEDIAS</h4>
          <ul>
            <li>
              <img src={github} alt="" />
              Github
            </li>
            <li>
              <img src={linkedin} alt="" />
              LinkedIn
            </li>
            <li>
              <img src={twitter} alt="" />
              Twitter
            </li>
            <li>
              <img src={instagram} alt="" />
              Instagram
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
