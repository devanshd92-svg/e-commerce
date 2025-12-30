import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const SearchContext = createContext();

const SearchProvider = ({children}) => {
    
    const [searchtext, setsearchtext] = useState("")

  return (
    <div>
        <SearchContext.Provider value={{searchtext ,setsearchtext}}>
       {children}
        </SearchContext.Provider>
      
    </div>
  )
}




export default SearchProvider
