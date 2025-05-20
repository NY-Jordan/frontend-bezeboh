import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MenuItemLink({name, icon, to} : {name : string, icon : string, to : string}) {
  return (
     <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center space-x-4 my-4 rounded-md px-2 py-1
         ${isActive ? 'bg-menu-link-hover' : 'hover:bg-menu-link-hover'}`
      }
    >
      <div>
        <img src={icon} alt={`${name} icon`} />
      </div>
      <div>
        <span className="text-white text-sm font-medium">{name}</span>
      </div>
    </NavLink>
  )
}
