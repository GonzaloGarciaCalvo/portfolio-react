import { useContext } from 'react'
import { LanguageContext } from './LanguageContext'

const ProjectItem = ({item}) => {
  console.log("item.url: ", item.url
  )
  const {language} = useContext(LanguageContext)
  return (
    <div className=" proyecto" >
      <img src={item?.img} alt={item?.alt} loading="lazy" />
      <figcaption className="descripcionProyecto">
        <p>{item?.title}</p>
        {item?.url? 
          <a href={item?.url} target="_blank" rel="noopener">
            {language === 'es'? 'ver': 'watch'}
          </a>
          :
          language === 'es'? 'Sin enlace': 'No link'
        }
        { item?.repository? 
          <a href={item?.repository} target="_blank" rel="noopener" className='mt-1'>
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