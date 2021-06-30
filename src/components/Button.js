import React from 'react'
import './styles/Button.css'
import './styles/Colors.css'

function Button({name, icon ,color, size }) {
    return (
        <div className={`${color} button bdr5 ${size}` }>
            {icon}
           {name.toUpperCase()} 
        </div>
    )
}

export default Button
