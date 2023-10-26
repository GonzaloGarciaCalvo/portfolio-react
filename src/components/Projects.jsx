import { esProjects, enProjects } from '../data/dataProjcts'
import ProjectItem from './ProjectItem'

const Projects = ({language}) => {

  return (
    <section>
      <h3 className="sectionTitle pt-9 pb-7">
        
        { language === 'es'?
          "Proyectos" 
          :
          "Projects"
        }
        </h3>
      <div  className="boxProyectos grid grid-cols-1  sm:grid-cols-2 gap-8 mb-5">
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