import { useEffect, useState } from 'react'
import axios from 'axios'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Project from '../../components/Project'
import NavModal from '../../components/NavModal'

import s from './style.module.css'

import happy from '../../assets/projects/happy.png'
import thunder from '../../assets/projects/thunder.png'
import lhweb from '../../assets/projects/lhweb.png'

export default function Projects() {
  const [projects, setProjects] = useState([])

  const [navOpened, setNavOpened] = useState(false)

  document.onkeyup = function (e) {
    var evt = window.event || e
    if (evt.ctrlKey && evt.keyCode === 32) {
      setNavOpened(!navOpened)
    }
  }

  const githubProjects = [
    {
      name: 'Happy',
      repoName: 'nlw-happy-web',
      image: happy,
    },
    {
      name: 'THUNDER',
      repoName: 'interdisciplinar-I',
      image: thunder,
    },
    {
      name: 'Luan Hubner',
      repoName: 'luan-hubner-web',
      image: lhweb,
    },
  ]

  useEffect(() => {
    loadRepos()
  }, [])

  async function loadRepos() {
    const response = await Promise.all(
      githubProjects.map((p) => axios.get(`https://api.github.com/repos/luan-hubner/${p.repoName}`))
    )

    const projects = response.map((r, index) => ({
      name: githubProjects[index].name,
      repoLink: r.data.html_url,
      description: r.data.description,
      image: githubProjects[index].image,
    }))

    setProjects(projects)
  }

  return (
    <div className={s.projects}>
      <Header />

      <div className={s.container}>
        <div className={s.title}>
          <span>compartilhando projetos</span>

          <h4>
            É muito legal saber o que outros andam codando e como fazem, mostra um pouco sobre nós, portanto, gostaria
            de compartilhar com você alguns dos meus projetos.
          </h4>
        </div>

        <div className={s.projects}>
          {projects.map((project) => (
            <Project project={project} />
          ))}
        </div>
      </div>

      {navOpened ? <NavModal setNavOpened={setNavOpened} /> : null}

      <Footer />
    </div>
  )
}
