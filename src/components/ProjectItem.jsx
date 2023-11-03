import { useContext } from 'react'
import { LanguageContext } from './LanguageContext'

const ProjectItem = ({item}) => {

  const {language} = useContext(LanguageContext)
  return (
    <div className=" proyecto" >
      <img src={item?.img} alt={item?.alt} loading="lazy" />
      <figcaption className="descripcionProyecto">
        <p>{item?.title}</p>
        <a href={item?.url} target="_blank">
          {language === 'es'? 'ver': 'watch'}
        </a>
        { item?.repository? 
          <a href="https://github.com/No-Country/c12-29-ft-node-react/" target="_blank" className='mt-1'>
            {language === 'es'? 'ver Repositorio': 'watch repository'}
          </a>
          :
          null 
        }
      </figcaption>
   </div>
  )
}
export default ProjectItem