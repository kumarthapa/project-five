import React, {useContext,useState, useEffect} from "react"
import {auth} from "../firebase"

const AuthContext=React.createContext();
export const useAuth=()=>{
    return useContext(AuthContext)
}

export const AuthProvider=({children})=>{
    const [currentUser,setCurrentUser]=useState()
    
    const signup=(email,password)=>{
        return auth.createUserWithEmailAndPassword(email,password).then(res=>{
            console.log(res)
        })
    }

    useEffect(()=>{
      const  unsubscriber=auth.onAuthStateChanged(user=>{
          setCurrentUser(user)
      })

      return unsubscriber
    },[])

    const value={
        signup,
        currentUser
    }


    return(
         <AuthContext.Provider value={value}>
             {children}
         </AuthContext.Provider>
    )
}
