import React, { createContext } from 'react'
export const Datacontext = createContext()

const Usercontext = ({children}) => {
  const user = "m.umair "
  return (
    <div>
      <Datacontext.Provider value={user}>
        {children}
      </Datacontext.Provider>
      </div>
  )
}

export default Usercontext