"use client"

import React from 'react' //simply run rafce
import CustomButton from './CustomButton'
import Image from 'next/image'

const Hero = () => {

  const handleScroll = () => {

  }

  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
            Find, book, rent a car—quick and super easy!
            </h1>

            <p className='hero__subtitle'>
            Streamline your car rental experience with our effortless booking
            process.
            </p>

            <CustomButton 
            title="Explore Cars"
            containerStyles="bg-primary-blue text-white rounded-full mt-10"
            handleClick={handleScroll}
          />
        </div>
    </div>
  )
}

export default Hero