import { createContext, useState } from 'react';

export const LanguageContext = createContext()


export default function LanguageProvider ({children}) {

  const [language, setLanguage] = useState('es')
  const handleLanguage = () => {
    language === 'es'? setLanguage('eng') : setLanguage('es')
  }
  const contextValue = {
    language:language,
    handleLanguage:handleLanguage
  }
  return(
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  )
}