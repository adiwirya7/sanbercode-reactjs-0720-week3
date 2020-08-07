import React from 'react'
import { BuahProvider } from './BuahContext'
import BuahForm from './BuahForm'

const Buah = () => {
  
  return (
    <>
      <BuahProvider>
        <BuahForm />
      </BuahProvider>
    </>
  )
}

export default Buah