import React from 'react'
import Button from '../Button'
import Textbox from '../Textbox'
import Label from '../Label'
import Header from '../Header'
import Stats from '../Stats'
import { FaCheckCircle } from 'react-icons/fa'

function Report() {
    return (
        <div className='ful-wit background-white shadow flex flex-col ali-cent'>
            <Header title='Activity Report' className="header-1" item2={`${Date().substring(0, 15)} `} />
            {/* <Stats title={"Todays Activity Report Count"} count={0} /> */}
            <div className='mg-tb-20'>
               <div className='flex '> 1. <Label className='report-label' text='Problem Description' /></div> <Textbox placeholder='Problem Description' />
               <div className='flex '> 2. <Label className='report-label' text='Applied Solution' /></div> <Textbox placeholder='Solution' />
               <div className='flex '> 3. <Label className='report-label' text='Result' /></div> <Textbox placeholder='Result' />
            </div>
            <label>Staus dropdown</label>
            <Button icon={<FaCheckCircle size={24} className='btn-icon' />} name='Submit report' color='btn-clr-pri' />
        </div>
    )
}

export default Report
