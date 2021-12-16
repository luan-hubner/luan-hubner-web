import Footer from '../../components/Footer';
import Header from '../../components/Header';
import s from './style.module.css';

export default function Projects() {
  return (
    <div className={s.projects}>
      <Header />
  
      <div className={s.container}>
        <div className={s.title}>
          <h1>know my projects</h1>
        </div>
      </div>

      <Footer />
    </div>
  )
}