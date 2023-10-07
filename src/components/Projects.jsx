import plazaKoros from '../assets/images/plazaKoros.jpg'
import kireiJabones from '../assets/images/kireiJabones.jpg'
import pf_js from '../assets/images/pf_js.jpg'
import pf_react from '../assets/images/pf_react.jpg'
import edaMentorin from '../assets/images/edaMentorin.jpg'
import poacea from '../assets/images/poacea.jpg'
import baTailored from '../assets/images/baTailored.jpg'
import movieSearcher from '../assets/images/movieSearcher.jpg'
import legaltech from '../assets/images/legaltech.jpg'

const Projects = () => {
  const projectsList = [
    { img:plazaKoros, 
      alt:'link a proyecto plaza koros',
      title:'Proyecto Final curso desarrollo web Coderhouse',
      url:'https://gonzalogarciacalvo.github.io/Proyecto_Final_DesarrolloWeb_Coderhouse/',
      id:1
    },
    { img:kireiJabones, 
      alt:'link a proyecto Kirei Jabones',
      title:'Freelance Top10 Curso Desarrollo Web Coderhouse',
      url:'https://gonzalogarciacalvo.github.io/Proyecto_Final_DesarrolloWeb_Coderhouse/',
      id:2
    },
    { img:pf_js, 
      alt:'link a proyecto final  curso js',
      title:'Proyecto Final curso Javascript Coderhouse',
      url:'https://gonzalogarciacalvo.github.io/Proyecto-Final-JavaScript/',
      id:3
    },
    { img:pf_react, 
      alt:'link a proyecto final curso react',
      title:'Proyecto Final curso React js Coderhouse',
      url:'https://ornate-creponne-7f057e.netlify.app/',
      id:4
    },
    { img:edaMentorin, 
      alt:'link a proyecto eda mentoring',
      title:'Freelance Top 10 Curso Javascript Coderhouse',
      url:'https://gonzalogarciacalvo.github.io/EDA-Mentoring/',
      id:5
    },
    ,
    { img:poacea, 
      alt:'link a proyecto Poacea',
      title:'Freelance Top 10 Curso React js Coderhouse',
      url:'https://poacea.vercel.app/',
      id:6
    },
    { img:baTailored, 
      alt:'link a proyecto buenos aires tailores',
      title:'Freelance Buenos Aires Tailored',
      url:'https://batailored.com/',
      id:7
    },
    { img:movieSearcher, 
      alt:'link a proyecto moviesearcher',
      title:'Practicando con React, Redux Toolkit, Typescript, con API TMDB',
      url:'https://ggc-movies-searcher-app.vercel.app/',
      id:8
    },
    { img:legaltech, 
      alt:'link a proyecto legaltech',
      title:'Emulación proyecto real en Nocountry',
      url:'https://c12-29-ft-node-react.vercel.app/',
      repository:'https://github.com/No-Country/c12-29-ft-node-react/',
      id:9
    }
  ]

  return (
    <section>
      <h3 className="sectionTitle pt-9 pb-7">Proyectos</h3>
      <div  className="boxProyectos grid grid-cols-2 gap-8 mb-5">
        { 
          projectsList.map( item => (   
            <div className=" proyecto" key={item.id}>
              <img src={item.img} alt={item.alt} loading="lazy" />
              <figcaption className="descripcionProyecto">
                <p>{item.title}</p>
                <a href={item.url} target="_blank">
                  Ver
                </a>
                { item.repository? <a href="https://github.com/No-Country/c12-29-ft-node-react/" target="_blank">ver Repositorio</a>:null }
              </figcaption>
            </div>
        ))
        }
      </div>
    </section>
  )
}

export default Projects