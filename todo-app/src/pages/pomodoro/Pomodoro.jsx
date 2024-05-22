import React from 'react'
import Pomodo from '../../components/Pomodo'
import Header from "../../components/Header"
import Left from '../../components/Left'

const Pomodoro = () => {
  return (
    <div>
        <Header />
        <div className='flex'>
            <Left />
            <Pomodo />
        </div>
        
    </div>
  )
}

export default Pomodoro