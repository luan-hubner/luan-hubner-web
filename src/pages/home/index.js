import { useState } from 'react'
import s from './style.module.css'

import Logo from '../../assets/h.png'
import ArrowRight from '../../assets/icons/arrow-right.png'

import NavModal from '../../components/NavModal'

export default function Home() {
  const [navOpened, setNavOpened] = useState(false)

  document.onkeyup = function (e) {
    var evt = window.event || e
    if (evt.ctrlKey && evt.keyCode === 32) {
      setNavOpened(!navOpened)
    }
  }

  return (
    <div className={s.home}>
      <img className={s.logo} src={Logo} alt="" />

      <div className={s.header}>
        <h1 className={s.name}>Luan Hubner</h1>

        <h4 className={s.pro}>Full Stack Developer</h4>
      </div>

      <div className={s.pressing} onClick={() => setNavOpened(true)}>
        press
        <div className={s.buttons}>
          <button>ctrl</button>
          <button>space</button>
        </div>
        to continue <img src={ArrowRight} alt="" />
      </div>

      {navOpened ? <NavModal setNavOpened={setNavOpened} /> : null}
    </div>
  )
}
