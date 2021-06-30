import React from 'react'
import { BsSearch } from 'react-icons/bs'
import Input from '../Input'
import Button from '../Button'
import Header from '../Header'

function Asset() {
    return (
        <div className='ful-wit background-white flex flex-col bdr5 shadow ali-cent' >
            <Header title='Asset' item2={'There are 256 items in this category'} className='header-1' />
            <div className='wit-h flex ali-cent just-cent'>
                <Input placeholder='Search Asset' className='search-input' />
                <Button
                    icon={<BsSearch className='btn-icon' fontSize={20} />}
                    name='' color='btn-clr-gold' size={'btn-size'}
                />
            </div>
            <div className='wit-h flex'>
                <a href='/' className='link-1'>View All Assets</a>
                <a href='/addasset' className='link-1'>Add a new Asset</a>
            </div>
            <div>
                <div>Desktop Computers</div>
                <div>Laptop Computers</div>
                <div>Servers</div>
                <div>UPS</div>
                <div>Scanners</div>
                <div>Printers</div>
            </div>
            <div>

            </div>
        </div>

    )
}

export default Asset
