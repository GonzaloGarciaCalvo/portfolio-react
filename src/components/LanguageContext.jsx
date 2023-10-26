import { createContext, useState } from 'react';

export const LanguageContext = createContext()


export default function LanguageProvider ({children}) {

  const [language, setLanguage] = useState('es')
  //console.log("en context")
  const handleLanguage = () => {
    language === 'es'? setLanguage('eng') : setLanguage('es')
    console.log("lang: ")
  }
  const contextValue = {
    language,
    handleLanguage
  }
  return(
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  )
}