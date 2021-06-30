import { useState, useEffect } from "react"

const useClickOutside = (ref, inital) => {
    const [isActive, setIsActive] =useState(inital)

    useEffect(() => {
        const clickEvent=(e)=>{
            if (ref.current !== null && !ref.current.contains(e.target)){
                setIsActive(!isActive)
            }

        }
        if (isActive) {
            window.addEventListener('click', clickEvent);
        }
        return () => {
            window.removeEventListener('click', clickEvent)
        }

    
    }, [isActive, setIsActive])

    return [isActive, setIsActive]
}

export default useClickOutside