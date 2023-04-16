import React, { createContext, useState} from "react";

export const UrlContext = createContext();

export const UrlProvider = ({children}) => {
    const [url, setUrl] = useState('https://www.google.com')

    return (
        <UrlContext.Provider value={{url,setUrl }}>
          {children}
        </UrlContext.Provider>
      );
}
