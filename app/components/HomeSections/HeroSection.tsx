'use client'
import React, { useState } from 'react'
import Image from "next/image";
import Search from '../ReusableComponents/Search';

const HeroSection = () => {

  const [imageLoaded, setImageLoaded] = useState<boolean>(false)


  return (
      <div className='flex items-center flex-grow px-24 sm:px-[155px]
      bg-no-repeat bg-contain bg-top bg-[url("/media/destinos-top.svg")] lg:bg-none'>
        {imageLoaded && <div className='text-center lg:text-left flex flex-col w-full lg:w-1/2 justify-center items-center lg:items-start
         h-full'>
          <p className="text-text-faded">eSim Internacional</p>
          <h1 className="text-hero font-medium leading-body tracking-tight">
            <span className="whitespace-nowrap">Mantén tu conexión</span><br></br>
            <span className='font-bold text-primary whitespace-nowrap'>estés donde estés.</span>
          </h1>
          <p>¿Preparando tu próximo viaje? Con ViajareSIM, disfruta de internet de alta velocidad sin limites y olvidate de las costosas tarifas de roaming.</p>
          <Search extraClasses="w-full sm:w-2/3 lg:w-full" callAPIimmediately={true}/>
        </div>}
        <div className={`hidden relative lg:translate-x-128 xl:translate-x-0 w-1/2 h-full ${imageLoaded && 'lg:block'}`}>
        <Image
          priority
            src='/media/imagen-heroe-actualizada3.png'
            alt='mano con celular'
            fill={true}
            style={{ objectFit: 'contain', objectPosition: 'right' }}
            onLoad={() => setImageLoaded(true)}
            sizes='40vw'
          />
        </div>
      </div>
  )
}

export default HeroSection
