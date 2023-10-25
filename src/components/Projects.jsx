import { esProjects, enProjects } from '../data/dataProjcts'
import { useContext } from 'react'
import { LanguageContext } from './LanguageContext'
import ProjectItem from './ProjectItem'

const Projects = ({language}) => {
  console.log("language: ", language)
  console.log("render Projects")
  console.log("esProjects: ", esProjects)
  /* const {language, handleLanguage} = useContext(LanguageContext)
  console.log("language en Projects:", language) */
  let projectsList;
  /* const projectsList = language === 'es'? esProjects : enProjects */
 /*  if (language === 'es') {
    projectsList = esProjects
  } else projectsList = enProjects */

  return (
    <section>
      <h3 className="sectionTitle pt-9 pb-7">Proyectos</h3>
      <div  className="boxProyectos grid grid-cols-2 gap-8 mb-5">
        { language === 'es'?
          esProjects.map( item => <ProjectItem item={item} key={item.id} />)
          :
          enProjects.map( item => <ProjectItem item={item} key={item.id} />)
        }
      </div>
    </section>
  )
}

export default Projects