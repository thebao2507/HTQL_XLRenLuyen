import React from 'react'
import MenuManagement from '../../components/menuManagement/MenuManagement'

const Student = props => {
    return (
        <div className='flex h-screen overflow-hidden'>
            <MenuManagement />
            <div>Student</div>
        </div>
    )
}

export default Student