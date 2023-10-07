
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
            <li><NavLink to="/cv" className="text-lg" >CV</NavLink></li>
            <li><a href="/#contacts"  >Contacto</a></li>
          </ul>
        </div>

        <div className="dropdown hidden lg:block">
          <div className="menu menu-sm flex flex-row px-2 py-0">
            <li><Link to="/" className="p-2" >Home</Link></li>
            <li><Link to="/cv" className="p-2">CV</Link></li>
            <li><a href="#contacts" className="p-2" >Contacto</a></li>
          </div>
        </div>
      </div>
      <div className="navbar-end">
        {/* <button onClick={handleLanguage}>cambiar idioma</button> */}
        <p>es</p>
        <input onClick={handleLanguage} type="checkbox" className="toggle toggle-accent mx-2" id="my-toggle" />
        <p>eng</p>
      </div>
    </div>
  )
}

export default NavBar