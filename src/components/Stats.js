import React from 'react'
import './styles/Stats.css'

function Stats({title, count}) {
    return (
        <div className='stats'>
            <label className='stats-title'>{title}</label>
            <label className='stats-count'>{count}</label>
        </div>
    )
}

export default Stats
