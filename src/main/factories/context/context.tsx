import React from 'react'
import { getConsultHistory, setConsultHistory } from '@/main/adapters/consult-history-adapter'

export const Context = React.createContext(null)

const ContextProvider: React.FC = ({ children }) => {
  const state = {
    consultHistory: getConsultHistory,
    setConsultHistory: setConsultHistory
  }

  return <Context.Provider value={state}>{children}</Context.Provider>
}

export default ContextProvider
