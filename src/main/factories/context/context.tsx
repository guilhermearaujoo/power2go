import React, { useState } from 'react'
import {
  getConsultHistory,
  setConsultHistory
} from '@/main/adapters/consult-history-adapter'

export const Context = React.createContext(null)

export type NotificationType = {
  message: string
  severity: string
}

const ContextProvider: React.FC = ({ children }) => {
  const [notification, setNotification] = useState<NotificationType>({
    message: '',
    severity: ''
  })

  const state = {
    consultHistory: getConsultHistory,
    setConsultHistory: setConsultHistory,
    notification,
    setNotification
  }

  return <Context.Provider value={state}>{children}</Context.Provider>
}

export default ContextProvider
