import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Project from '../../components/Project';

import s from './style.module.css';

import happy from '../../assets/projects/happy.png';
import thunder from '../../assets/projects/thunder.png';
import lhweb from '../../assets/projects/lhweb.png';

export default function Projects() {
  const projects = [
    {
      image: lhweb,
      github: 'https://github.com/luan-hubner/nlw-happy-web',
      name: 'Luan Hubner',
      description: 'Projeto (open source) desse website.'
    },
    {
      image: happy,
      github: 'https://github.com/luan-hubner/nlw-happy-web',
      website: 'happy.luanhubner.com',
      name: 'Happy',
      description: 'Projeto desenvolvido no NLW da Rocketseat.'
    },
    {
      image: thunder,
      github: 'https://github.com/luan-hubner/nlw-happy-web',
      website: 'happy.luanhubner.com',
      name: 'THUNDER',
      description: 'Website para empresa de painéis solares desenvolvido como parte de um projeto interdisciplinar da faculdade.'
    },
  ];

  return (
    <div className={s.projects}>
      <Header />
  
      <div className={s.container}>
        <div className={s.title}>
          <h1>know my projects</h1>
        </div>

        <div className={s.projects}>
          {
            projects.map(project => (
              <Project project={project} />
            ))
          }
        </div>
      </div>

      <Footer />
    </div>
  )
}