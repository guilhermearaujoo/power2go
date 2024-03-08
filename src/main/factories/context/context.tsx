import React from 'react'
import { getConsultHistory } from '@/main/adapters/consult-history-adapter'

export const Context = React.createContext(null)

const ContextProvider: React.FC = ({ children }) => {
  const state = {
    consultHistory: getConsultHistory
  }

  return <Context.Provider value={state}>{children}</Context.Provider>
}

export default ContextProvider
