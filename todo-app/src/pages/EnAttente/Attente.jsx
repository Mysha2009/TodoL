import React from 'react'
import Header from '../../components/Header'
import Left from '../../components/Left'
import WaitingTask from '../../components/WaitingTask'

const Attente = () => {
  return (
    <div>
        <Header />
        <div className='flex'>
            <Left />
            <WaitingTask />
        </div>
    </div>
  )
}

export default Attente