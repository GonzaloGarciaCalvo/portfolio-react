import plazaKoros from '../assets/images/plazaKoros.jpg'
import kireiJabones from '../assets/images/kireiJabones.jpg'
import pf_js from '../assets/images/pf_js.jpg'
import pf_react from '../assets/images/pf_react.jpg'
import edaMentorin from '../assets/images/edaMentorin.jpg'
import poacea from '../assets/images/poacea.jpg'
import baTailored from '../assets/images/baTailored.jpg'
import movieSearcher from '../assets/images/movieSearcher.jpg'
import legaltech from '../assets/images/legaltech.jpg'
import { esProjects, enProjects } from '../data/dataProjcts'
import { useContext } from 'react'
import { LanguageContext } from './LanguageContext'

const Projects = () => {
  console.log("render Projects")
  const {language} = useContext(LanguageContext)
  const projectsList = language === 'es'? esProjects : enProjects

  return (
    <section>
      <h3 className="sectionTitle pt-9 pb-7">Proyectos</h3>
      <div  className="boxProyectos grid grid-cols-2 gap-8 mb-5">
        { 
          projectsList.map( item => (   
            <div className=" proyecto" key={item.id}>
              <img src={item.img} alt={item.alt} loading="lazy" />
              <figcaption className="descripcionProyecto">
                <p>{item.title}</p>
                <a href={item.url} target="_blank">
                  Ver
                </a>
                { item.repository? <a href="https://github.com/No-Country/c12-29-ft-node-react/" target="_blank">ver Repositorio</a>:null }
              </figcaption>
            </div>
        ))
        }
      </div>
    </section>
  )
}

export default Projects