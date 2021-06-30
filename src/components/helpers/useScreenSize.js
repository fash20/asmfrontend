import {useState, useEffect} from 'react'


const useScreenSize = (initial) => {
    const [isScreenSmall, setIsScreenSmall] =useState(initial)


    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 750px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery)

        return () => {
           mediaQuery.removeListener(handleMediaQueryChange)
        }

    }, [])

    const handleMediaQueryChange =(mediaQuery)=>{
        // mediaQuery.matches === true ? setIsScreenSmall(true) : setIsScreenSmall(false)
        mediaQuery.matches === true ? setIsScreenSmall(true) : setIsScreenSmall(false)
    }
    return [isScreenSmall , setIsScreenSmall ]

}

export default useScreenSize