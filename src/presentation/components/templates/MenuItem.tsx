import React from 'react'
import { IMenuItemLink } from '../../../domain/entities/menu.entities'
import MenuItemLink from './MenuItemLink'

type MenuItemPropsType = {
    name : string ,
    children : IMenuItemLink[]
}

export default function MenuItem({name, children} : MenuItemPropsType) {
  return (
    <div className=' hover:cursor-pointer'>
      <div>
        <span className='text-xs text-white'>{name}</span>
      </div>
      {
        children.map((child, key) => {
            return <MenuItemLink key={key} to={child.to} name={child.name} icon={child.icon} />
        })
      }
    </div>
  )
}
