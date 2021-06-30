import React from 'react'
import './styles/Universal.css'
import './styles/Login.css'

function Label({text, className}) {
    return (
        <div className={`fs18 mg-rl-10 bold ${className}`} >
            {text}
        </div>
    )
}

export default Label
