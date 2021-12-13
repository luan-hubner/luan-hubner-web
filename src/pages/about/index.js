import Header from '../../components/Header';
import s from './style.module.css';

export default function About() {
  return (
    <div className={s.about}>
      <Header />
  
      <div className={s.container}>
        <div className={s.title}>
          <h1>full stack developer</h1>
          <h5>for now</h5>
        </div>
      </div>
    </div>
  )
}