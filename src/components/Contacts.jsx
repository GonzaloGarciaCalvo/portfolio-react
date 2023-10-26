import linkedin from '../assets/images/linkedin@72x.png'
import github from '../assets/images/github@72x.png'
import email from '../assets/images/email@72x.png'
import { useContext } from 'react'
import { LanguageContext } from './LanguageContext'

const Contacts = () => {

  const {language} = useContext(LanguageContext)
  return (
        <section id="contacts" className=" flex flex-col justify-center pb-5 px-[15%] md:px-[25%]">
          {/* <h3 className="sectionTitle py-8" >
            {language === 'es'? 'Contacto': 'Contact'}
          </h3> */}
          <div className="boxRedes  flex flex-row justify-around items-center">
              <a href="https://www.linkedin.com/in/gonzalo-garcia-calvo/" target="_blank">
                  <img src={linkedin} loading="lazy" className="iconoRedes" alt="vínculo a linkedin" />
              </a>
              <a href="https://github.com/GonzaloGarciaCalvo" target="_blank">
                  <img src={github} loading="lazy" className="iconoRedes" alt="vinculo a mi github" />
              </a>
              <a href="mailto:garciacalvog@hotmail.com">
                  <img src={email} loading="lazy" alt="mail to" className=" iconoRedes" />
              </a>
          </div>           
        </section>
  )
}
export default Contacts