import { useContext } from 'react'
import { LanguageContext } from './LanguageContext'

const MyCv = () => {
  const {language} = useContext(LanguageContext)
  return (
    <div className='min-h-[50em]'>
      <h1 className="pt-8 pb-5 text-center text-2xl">
        {language === 'es'? 'Mi CV': 'My CV'}
      </h1>
      <div className="boxPdf">
      {language === 'es'? 
        <object className="pdf" data="CV-GonzaloGarciaCalvo2023.pdf"></object>
        : 
        <object className="pdf" data="CV-GonzaloGarciaCalvo2023_eng.pdf"></object>
      }
      </div>
      <div className="flex flex-row justify-center btnDescargar">
        <a href="CV-GonzaloGarciaCalvo2023.pdf" target="_blank"  className="fs-2 text-decoration-none">
            <p className="text-center text-2xl mt-3 mb-4">
              {language === 'es'? 'Descargar CV': 'Download CV'}
              
            </p>
        </a>
      </div>
    </div>
  )
}
export default MyCv