import { Link } from 'react-router-dom'

import s from './style.module.css'

export default function Header() {
  const links = ['about', 'projects', 'articles']

  return (
    <nav>
      <div className={s.container}>
        <ul>
          {links.map((link) => (
            <Link to={`/${link}`}>{link}</Link>
          ))}
        </ul>
      </div>
    </nav>
  )
}
