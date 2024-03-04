import React from 'react'

import { Logo } from '../Logo/Logo'
import { MenuList } from "../../Components/MenuList/MenuList";

import './Header.scss'

export const Header = () => {
  return (
    <div className='header'>
      <div className='container'>
        <div className="navigator">
          <Logo />
          <MenuList />  
        </div>
      </div>
    </div>
  )
}
