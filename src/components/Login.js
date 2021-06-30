import React from 'react'
import Input from './Input'
import './styles/Dimensions.css'
import './styles/Universal.css'
import './styles/Colors.css'
import { FaUserTie } from 'react-icons/fa';
import Button from './Button'
import Label from './Label'
function Login() {
    return (
        <div className='sign-in-panel login-dim flex flex-col background-white ali-cent bdr5 shadow'>
            <div className='form-header'> <FaUserTie fontSize={45} className="icon-color" /> <Label text="SIGN IN" /></div>
            <div className='mg-tb-20'>
                <Input className='login-input' placeholder='Username' type="text" />
                <Input className='login-input' placeholder="Password" type="password" />
            </div>
            <Button name='Login' color='btn-clr-pri' />
            <a href='/'>Forgtten Password</a>
        </div>
    )
}

export default Login
