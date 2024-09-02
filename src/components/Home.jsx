
import html5 from '../assets/images/html5.png'
import css3 from '../assets/images/css3.png'
import js from '../assets/images/js.png'
import react from '../assets/images/react.png'
import redux from '../assets/images/redux.svg'
import git from '../assets/images/git.png'
import github from '../assets/images/github.png'
import vsc from '../assets/images/vscode.jpg'
import bootstrap from '../assets/images/bootstrap-logo.png'
import sass from '../assets/images/sass_icon.png'
import ts from '../assets/images/ts.svg'
import next from '../assets/images/nextjs.svg'
import avatar from '../assets/images/fotoavatar.jpeg'
import certificate from '../assets/images/ncCertificate.jpg'
import sql from '../assets/images/server-sql.svg'
import tailwind from '../assets/images/tailwind.svg'
import node from '../assets/images/node.svg'
import Projects from './Projects'
import Contacts from './Contacts'
import '../index.css'
import { useContext } from 'react'
import { LanguageContext } from './LanguageContext'
import { es } from './es'
import { en } from './en'
import SkillItem from './SkillItem'
import { itemsData } from './itemsData'

export default function Home() {

  const {language} = useContext(LanguageContext)
  const cvUrl = language === 'es'? "CV-GonzaloGarciaCalvo2024.pdf" : "CV-GonzaloGarciaCalvo2024-eng.pdf"

    
  return (
      <main className=" p-8 md:p-12">
        <div className="flex flex-col w-full" >
          <img src={avatar} className='rounded-full w-24 block mx-auto my-6' alt="foto de Gonzalo" />
          <h1 className="text-4xl md:text-5xl w-full text-center pb-4">Gonzalo Garcia Calvo</h1>
          <h2 className="text-2xl md:text-3xl text-center">{language === 'es'? es.specialty : en.specialty}</h2>
          <section className=" ">
            <h3 className="sectionTitle pt-9 pb-7 ">{language === 'es'? es.aboutMeTitle : en.aboutMeTitle}</h3>
            <p className="text-lg px-0 md:px-24">{language === 'es'? es.aboutMe : en.aboutMe}</p>
          <p className="text-lg px-0 md:px-24">{language === 'es'? es.aboutMe2 : en.aboutMe2}</p>
          </section>
          <section className="w-full px-0 md:px-16 lg:px-28">
            <h3 className=" text-xl md:text-2xl text-center pt-9 pb-8">{language === 'es'? es.knowledge : en.knowledge}</h3>
            <div className="
              grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
              gap-3 
              w-full 
              conocimientos__boxIconos
              " 
            >
              <SkillItem  itemData={itemsData.html} image={html5}/>
              <SkillItem  itemData={itemsData.css} image={css3}/>
              <SkillItem  itemData={itemsData.js} image={js}/>
              <SkillItem  itemData={itemsData.react} image={react}/>
              <SkillItem  itemData={itemsData.node} image={node}/>
              <SkillItem  itemData={itemsData.reactNative} image={react}/>
              <SkillItem  itemData={itemsData.redux} image={redux}/>
              <SkillItem  itemData={itemsData.git} image={git}/>
              <SkillItem  itemData={itemsData.github} image={github}/>
              <SkillItem  itemData={itemsData.vsc} image={vsc}/>
              <SkillItem  itemData={itemsData.bootstrap} image={bootstrap}/>
              <SkillItem  itemData={itemsData.sass} image={sass}/>
              <SkillItem  itemData={itemsData.ts} image={ts}/>
              <SkillItem  itemData={itemsData.next} image={next}/>
              <SkillItem  itemData={itemsData.sql} image={sql}/>
              <SkillItem itemData={itemsData.tailwind} image={tailwind} />
            </div>
          </section>
        </div>
        <Projects language={language} />
        <div className="flex flex-row justify-center btnDescargar">
        <a href={cvUrl} target="_blank" className="fs-2 text-decoration-none mt-5 mb-4 py-2 px-3 bg-black rounded-3xl">
            <p className="text-center text-2xl  ">
              {language === 'es'? 'Descargar CV': 'Download CV'}     
            </p>
        </a>
      </div>
      <section  className="flex flex-col justify-center items-center btnDescargar">
        <h3 className="text-xl md:text-2xl text-center pt-9 pb-8">{language === 'es'? es.certificate : en.certificate}</h3>
        <img src={certificate} className="w-1/2 px-2" alt="" />
      </section>
      
      </main>
	);
}