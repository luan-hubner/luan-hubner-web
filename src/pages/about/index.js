import { useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import NavModal from '../../components/NavModal'
import s from './style.module.css'

export default function About() {
  const [navOpened, setNavOpened] = useState(false)

  document.onkeyup = function (e) {
    var evt = window.event || e
    if (evt.ctrlKey && evt.keyCode === 32) {
      setNavOpened(!navOpened)
    }
  }

  return (
    <div className={s.about}>
      <Header />

      <div className={s.container}>
        <div className={s.title}>
          <h1>full stack developer</h1>
        </div>

        <div className={s.informations}>
          <div className={s.row}>
            <div className={s.what}>
              <h3>resumo</h3>
            </div>
            <div className={s.description}>
              <p>
                Olá,
                <span className={s.whited}>&nbsp;eu sou o Luan</span>, é um prazer ter você aqui!
              </p>

              <p>
                Eu tenho
                <span className={s.whited}>&nbsp;24 anos&nbsp;</span>e atualmente trabalho como desenvolvedor
                <span className={s.whited}>&nbsp;Full Stack.&nbsp;</span>
                Entrei no mercado de desenvolvimento em
                <span className={s.whited}>&nbsp;abril de 2019&nbsp;</span>e desde então passei algumas madrugadas
                envolvido com tudo isso.
              </p>

              <p>
                Meio a momentos bons e ruins adquiri conhecimentos em
                <span className={s.whited}>&nbsp;diversas áreas&nbsp;</span>
                graças a minha
                <span className={s.whited}>&nbsp;flexibilidade&nbsp;</span>e tenho a certeza de que eu
                <span className={s.whited}>&nbsp;posso somar independente da área&nbsp;</span>
                sem medo de mudar se for necessário.
              </p>
            </div>
          </div>

          <div className={s.row}>
            <div className={s.what}>
              <h3>
                experências <br /> profissionais
              </h3>
            </div>
            <div className={s.description}>
              <div className={s.whti}>
                <span className={s.where}>UNIFASIPE</span>
                <span className={s.time}>ABR 2019 - MAR 2022</span>

                <p>Full Stack Developer</p>
              </div>

              <div className={s.whti}>
                <span className={s.where}>RURALHUB</span>
                <span className={s.time}>ABR 2022 - PRESENTE</span>

                <p>Full Stack Developer</p>
              </div>
            </div>
          </div>

          <div className={s.row}>
            <div className={s.what}>
              <h3>
                experiências <br /> voluntárias
              </h3>
            </div>
            <div className={s.description}>
              <div className={s.whti}>
                <span className={s.where}>INFORMÁTICA NA MAIOR IDADE</span>
              </div>

              <p>Professor</p>
            </div>
          </div>

          <div className={s.row}>
            <div className={s.what}>
              <h3>educação</h3>
            </div>
            <div className={s.description}>
              <div className={s.whti}>
                <span className={s.where}>ENSINO MÉDIO INTEGRAL</span>
                <span className={s.where}>(TÉCNICO EM INFORMÁTICA)</span>
                <span className={s.time}>2016 - 2018</span>
              </div>

              <div className={s.mb1r}></div>

              <div className={s.whti}>
                <span className={s.where}>ANÁLISE E DESENV. DE SISTEMAS</span>
                <span className={s.time}>2021 - PRESENTE</span>
              </div>
            </div>
          </div>

          <div className={s.row}>
            <div className={s.what}>
              <h3>tecnologias</h3>
            </div>
            <div className={s.description}>
              <div className={s.techs}>
                <span className={s.type}>MEU FOCO</span>
                <span className={s.name}>JAVASCRIPT E TYPESCRIPT</span>
              </div>

              <div className={s.techs}>
                <span className={s.type}>FRONT-END</span>
                <span className={s.name}>REACT JS</span>
              </div>

              <div className={s.techs}>
                <span className={s.type}>BACK-END</span>
                <span className={s.name}>NODE.JS</span>
              </div>

              <div className={s.techs}>
                <span className={s.type}>MOBILE</span>
                <span className={s.name}>REACT NATIVE</span>
              </div>

              <div className={s.techs}>
                <span className={s.type}>SERVERS</span>
                <span className={s.name}>LINUX (UBUNTU), NGINX, APACHE E AWS</span>
              </div>

              <div className={s.techs}>
                <span className={s.type}>ALREADY WORK WITH</span>
                <span className={s.name}>VUE, LARAVEL, PHP E IONIC</span>
              </div>

              <div className={s.techs}>
                <span className={s.type}>STUDYING NOW</span>
                <span className={s.name}>DESIGN PATTERNS, TDD, CLEAN ARCHITECTURE E MAIS NODE.JS</span>
              </div>
            </div>
          </div>

          <div className={s.row}>
            <div className={s.what}>
              <h3>meu futuro...</h3>
            </div>
            <div className={s.description}>
              <p>
                Eu tenho como objetivo me
                <span className={s.whited}>&nbsp;especializar em back-end!&nbsp;</span>
              </p>

              <p>
                Acredito que ser full stack é muito bom, pois, você aprende a lidar com diferentes situações e
                problemas, entretanto, acredito mais na ideia de que devemos ter um foco, ser MUITO bom em uma coisa e
                bom em outras.
              </p>

              <p>
                Portanto, desejo me aprimorar nas tecnologias relacionadas com o back-end ao ponto de me considerar um
                especialista e guiar minha carreira para ser um desenvolvedor focado nessas soluções.
              </p>
            </div>
          </div>
        </div>

        <button disabled className={s.btnPdf}>
          <span>DOWNLOAD PDF</span>
        </button>
      </div>

      {navOpened ? <NavModal setNavOpened={setNavOpened} /> : null}

      <Footer />
    </div>
  )
}
