import React from 'react'
import Header from '../../components/Header'
import Left from '../../components/Left'
import Tache from '../../components/Tache'


const Aujourdhui = () => {
  return (
    <div>
        <Header />
        <div className='flex w-full'>
            <Left className="w-[20%]"/>
            <Tache className="w-[80%] flex justify-center"/>
        </div>
    </div>
  )
}

export default Aujourdhui