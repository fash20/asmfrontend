import React from 'react'
import './styles/Header.css'

function Header({title, className, item1, item2}) {
    return (
        <div className={`header ${className}`}>
           <label className='item-1'>{item1}</label>
           <label className='title'>{title}</label> 
           <label className='item-2'>{item2}</label>
        </div>
    )
}

export default Header
