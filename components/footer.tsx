import { APP_NAME } from '@/lib/constants';
import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='border-t'>
      <div className='p-5 flex item-center justify-center'>
        {currentYear} {APP_NAME}. All Rigths Reserved
      </div>
    </footer>
  )
}

export default Footer;