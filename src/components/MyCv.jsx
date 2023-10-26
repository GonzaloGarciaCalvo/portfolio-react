import { useContext } from 'react'
import { LanguageContext } from './LanguageContext'

const MyCv = () => {
  const {language} = useContext(LanguageContext)
  return (
    <div className='min-h-[65em]'>
      <h1 className="pt-8 pb-5 text-center text-2xl">
        {language === 'es'? 'Mi CV': 'My CV'}
      </h1>
      <div className="boxPdf min-h-[50em]">
      {language === 'es'? 
        <object className=" w-[100%] sm:w-[70%] h-[50em] lg:h-[65vw] }" data="CV-GonzaloGarciaCalvo2023.pdf"></object>
        : 
        <object className="w-[70%] h-[80%] lg:h-[65vw]" data="CV-GonzaloGarciaCalvo2023_eng.pdf"></object>
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