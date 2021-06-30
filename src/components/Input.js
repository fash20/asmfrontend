import React from 'react'
import './styles/Input.css'

function Input({ placeholder, type, className }) {
    return (
        
        <div className='input-cont'>
            <input type={type} className={`input ${className}`} required/>
            <label className='placeholder'>{placeholder}</label>
        </div>
    )
}

export default Input
