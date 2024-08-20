'use client';
import React from 'react'
import ButtonDark from './ButtonDark';
import SearchIcon from '@mui/icons-material/Search';
import PinDropOutlined from '@mui/icons-material/PinDropOutlined';


interface Props{
  extraClasses?: string
}

const Search = ({extraClasses} : Props) => {
  return (
    <form className={`flex justify-between px-8 py-8 border-custom rounded-custom shadow-input mt-16 ${extraClasses}`}>
      <div className='flex items-center space-x-12'>
        <PinDropOutlined style={{ fill: '#6C85FF' }} />
        <hr className='roate-90 h-16 w-1 bg-light-button-border'></hr>
        <input type='text' placeholder="¿A donde quieres ir?" />
      </div>
      <ButtonDark extraClasses='p-10' type='submit'>
        <SearchIcon style={{ fill: 'white' }} />
      </ButtonDark>
    </form>
  )
}

export default Search
