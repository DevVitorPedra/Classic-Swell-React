import React, {createContext,useContext, useState} from 'react'

export const sessionContext =  createContext()


export default function SessionProvider({children}){
   const [validSession,setValidSession] = useState('')
   return (<SessionProvider.Povider value={{
      validSession,
      setValidSession
   }}>{children}</SessionProvider.Povider>)
}

export function useSession(){
  const context = useContext(sessionContext)
  const {validSession, setValidSession } = context
  return {validSession, setValidSession}
}
