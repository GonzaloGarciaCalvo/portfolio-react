
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
import Projects from './projects'
import Contacts from './Contacts'
import '../index.css'
import CustomModal from './CustomModal'
import { useContext } from 'react'
import { LanguageContext } from './LanguageContext'
import { es } from './es'
import { en } from './en'
import NavBar from './NavBar'

export default function Home() {

  const {language} = useContext(LanguageContext)
//console.log("language en Home: ", language)
  return (
    <>
      <NavBar />
      <main className=" p-8 md:p-12">
        <div className="flex flex-col w-full" >
          <img src="images/fotoavatar.jpeg" className='rounded-full w-24 block mx-auto my-6' alt="foto de Gonzalo" />
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
              <article className=" boxIcon">
                <img className="icono" width={80} src={html5} alt="logo html" />
                <h4 className="iconName">html</h4>
              </article>
              <article className=" boxIcon">
                <img className="icono" width={80}  src={css3} alt="logo css" />
                <h4 className="iconName">css</h4>
              </article>
              <article className=" boxIcon">
                <img className="iconoJs" width={80} src={js} alt="icono js" />
                <h4 className="iconName">javascript</h4>
              </article>
              <article className=" boxIcon">
                <img className="icono" width={80} src={react} alt="icono react" />
                <h4 className="iconName">react</h4>
              </article>
              <article className=" boxIcon">
                <img className="icono" width={80} src={react} alt="icono react native" />
                <h4 className="iconName">react native</h4>
              </article>
              <article className=" boxIcon">
                <img className="icono" width={80} src={redux} alt="icono redux" />
                <h4 className="iconName">redux</h4>
              </article>
              <article className=" boxIcon">
                <img className="icono" width={80} src={git} alt="icono git" />
                <h4 className="iconName">git</h4>
              </article>
              <article className=" boxIcon">
                <img className="icono" width={80} src={github} alt="icono github" />
                <h4 className="iconName">github</h4>
              </article>
              <article className=" boxIcon">
                <img
                  className=" iconoVsc"
                  width={80}
                  src={vsc}
                  alt="icono visual studio code"
                />
                <h4 className="iconName">vsc</h4>
              </article>
              <article  className=" boxIcon">
                <img
                  className=" icono"
                  width={80}
                  src={bootstrap}
                  alt="icono bootstrap"
                />
                <h4 className="iconName">Bootstrap</h4>
              </article>
              <article  className=" boxIcon">
                <img
                  className=" icono"
                  width={80}
                  src={sass}
                  alt="icono sass"
                />
                <h4 className="iconName">Sass</h4>
              </article>
              <article  className=" boxIcon">
                <img
                  className=" iconoTs"
                  width={80}
                  src={ts}
                  alt="icono typescript"
                />
                <h4 className="iconName">TS</h4>
              </article>
              <article  className=" boxIcon">
                <img
                  className=" icono p-1"
                  width={80}
                  src={next}
                  alt="icono typescript"
                />
                <h4 className="iconName">NEXT js</h4>
              </article>
            </div>
          </section>
        </div>
        <Projects language={language} />
        <Contacts id="misContactos" />
      </main>
    </>
	);
}