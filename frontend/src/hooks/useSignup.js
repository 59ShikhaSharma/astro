import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [error,setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const{dispatch} = useAuthContext()

    const signup = async (email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('/signup', {
            method:'POST',
            body: JSON.stringify({email, password}),
            headers:{
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){
            //save the local storage
            localStorage.setItem('user', JSON.stringify(json))

            //update the auth context
            dispatch({type:'LOGIN', payload: json})
            setIsLoading(false)
        }
    }

    return {signup, isLoading, error}
}
