import React from 'react'
import { Menus } from '../../../infrastructure/data/menu'
import MenuItem from './MenuItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {
  return (
    <div className='bg-spec-primary inset-shadow-custom w-full h-full pt-6  px-8 '>
        <div className='mb-6'>
          <a >
            <img src='/src/assets/images/icons/Vector.png' />
          </a>
        </div>
        <div className='ml-3'>
            {
            Menus.map((menu, key) => {
              return <MenuItem key={key} name={menu.name} children={menu.children} />
            })
          }
        </div>
        <div className='flex items-center justify-between  w-60  absolute bottom-5   p-3 '>
          <div className='flex items-center space-x-2'>
            <div className="avatar">
              <div className="  w-9 rounded-full  ">
                <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
              </div>
            </div>
            <div className='flex flex-col '>
              <span className='text-sm text-white font-bold'>Idris Adegoke</span>
              <span className='text-xs text-white'>Admin</span>
            </div>
          </div>
          <div>
            <a className='text-white hover:cursor-pointer hover:bg-menu-link-hover rounded-full p-2'>
              <FontAwesomeIcon icon={faEllipsis} />
            </a>
          </div>
        </div>
    </div>
  )
}
