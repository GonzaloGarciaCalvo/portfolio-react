import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'
import Home from './components/Home';
import Footer from './components/footer';
import MyCv from './components/MyCv';
import LanguageProvider from './components/LanguageContext';


function App() {
  
  return (
    <>
    <LanguageProvider>
      <BrowserRouter>
        <div className="App body-bg" id="app">
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cv' element={<MyCv/>} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
    </>
  )
}

export default App
