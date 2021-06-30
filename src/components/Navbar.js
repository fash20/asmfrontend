import React, { useState, useEffect, useRef } from 'react'
import useScreenSize from './helpers/useScreenSize'
import '../components/styles/Navbar.css'
import { RiSearch2Line } from 'react-icons/ri'
import { VscThreeBars } from 'react-icons/vsc'
import useClickOutside from './helpers/useClickOutside'

function Navbar() {
    const [isScreenSmall, setIsScreenSmall] = useScreenSize(false)
    const [isNavVisble, setIsNavVisble] = useState(false)
    const ref = useRef(null);
    const [isActive, setIsActive] = useClickOutside(ref,false)





    return (

        isScreenSmall === false ?
            <div className='navbar'>
                <div className='logo'> <a href='/'>Logo</a></div>
                <div className='nav-link'>
                    <a className='cent-cent' href='/about'><div className='link'>About</div></a>
                    <a className='cent-cent' href='/about'><div className='link'>Contact</div></a>
                    <a className='cent-cent' href='/login'><div className='link'>Login/Register</div></a>
                    <a className='cent-cent' href='/about'><div className='link'>News</div></a>
                </div>
            </div> :
            <div>
            <div className={'navbar'}>
                    <VscThreeBars onClick={()=> setIsActive(!isActive)} className={`bars ${isActive? 'active':''}`}  /> 
                    <div className='logo'> 
                    <a href='/'>Logo</a>
                    </div>
            </div>
            <div ref={ref} className={`${isActive ? 'sc-nav ' : ''}`}>
                
                {isActive && (<div className='sc-nav-link' >
                    <a className='cent-cent' href='/about'><div className='link'>About</div></a>
                    <a className='cent-cent' href='/about'><div className='link'>Contact</div></a>
                    <a className='cent-cent' href='/login'><div className='link'>Login/Register</div></a>
                    <a className='cent-cent' href='/about'><div className='link'>News</div></a>
                    <div className='search'> <input placeholder='Search item...' /> <div className='search-btn-nav'> <RiSearch2Line className='icon' size={15} /> </div></div>
                </div>)}
            </div>
            </div>

    )
}

export default Navbar
