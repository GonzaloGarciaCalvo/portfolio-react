
import { NavLink, Link } from 'react-router-dom'
import { LanguageContext } from './LanguageContext'
import { useContext } from 'react'

const NavBar = () => {

  const {language, handleLanguage} = useContext(LanguageContext)

  return (
    <div className="navbar bg-[#0b5c7e] pt-0 pb-0 h-14 min-h-12" id="subir">
      <div className="navbar-start ">
        <div className="dropdown lg:hidden ">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] px-2 shadow bg-base-100 w-52">
            <li><NavLink to="/" className="text-lg" >Home</NavLink></li>
            <li>
                <a href="#contacts" className="p-2" >
                  {language === 'es'? 'Contacto': 'Contact'}
                </a>
              </li>
          </ul>
        </div>

        <div className="dropdown hidden lg:block">
          <div className="menu menu-sm flex flex-row px-2 py-0">
            <ul className="flex flex-row">
              <li><Link to="/" className="p-2" >Home</Link></li>
              <li>
                <a href="#contacts" className="p-2" >
                  {language === 'es'? 'Contacto': 'Contact'}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="navbar-end px-4">
        <p>es</p>
        <label className="hidden" htmlFor="my-toggle">Language</label>
        <input onClick={handleLanguage} type="checkbox" className="toggle toggle-accent mx-2" id="my-toggle" />
        <p>en</p>
      </div>
    </div>
  )
}

export default NavBar