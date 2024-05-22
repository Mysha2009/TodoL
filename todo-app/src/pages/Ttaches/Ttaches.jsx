import React from 'react'
import AllTasks from '../../components/AllTasks'
import Header from '../../components/Header'
import Left from '../../components/Left'
const Ttaches = () => {
  return (
    <div>
        <Header />
         <div className='flex'>
            <Left />
            <AllTasks />
         </div>
    </div>
  )
}

export default Ttaches