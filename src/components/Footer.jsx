import { LanguageContext } from './LanguageContext'
import { useContext } from 'react'
import linkedin from '../assets/images/linkedin@72x.png'
import github from '../assets/images/github@72x.png'
import email from '../assets/images/email@72x.png'
import upChevron from '../assets/images/flecha@72x.png'

const Footer = () => {
  const {language} = useContext(LanguageContext)
  return (
    <footer className="p-2 bg-[#0b5c7e]">
        <div className="flex flex-row justify-between items-center">
            <p className="m-0 ms-3 ms-md-5 w-1/3 text-start">
              {language === 'es'? 'Derechos reservados'
              :
              'All rights reserved'
              } &#169;
            </p>
            <div id='contacts' className="boxRedes  flex flex-row justify-center items-center gap-5 mg:gap-10">
              <a href="https://www.linkedin.com/in/gonzalo-garcia-calvo/" target="_blank" rel="noopener">
                  <img src={linkedin} loading="lazy" className="iconoRedes" alt="vínculo a linkedin" />
              </a>
              <a href="https://github.com/GonzaloGarciaCalvo" target="_blank" rel="noopener">
                  <img src={github} loading="lazy" className="iconoRedes" alt="vinculo a mi github" />
              </a>
              <a href="mailto:garciacalvog@hotmail.com" target="_blank" rel="noopener">
                  <img src={email} loading="lazy" alt="mail to" className=" iconoRedes" />
              </a>
          </div> 
            <a href="/#subir" className='w-1/3 flex flex-row justify-end'>
                <img src={upChevron} className="me-3 me-md-5 iconoSubir" alt="botón para subir" />
            </a> 
        </div>
    </footer>
  )
}
export default Footer