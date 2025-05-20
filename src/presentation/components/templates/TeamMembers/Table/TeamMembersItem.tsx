import React from 'react'
import { IMember } from '../../../../../domain/entities/members.entities'

export default function TeamMembersItem({member} : {member : IMember}) {
  return (
    <tr className='border-b border-b-gray-100'>
        <th>
            <div className=' flex my-4  items-center space-x-3 p-2'>
                <img src={member.image} className='w-[80px] h-[80px]'  />
                <div className=' flex flex-col items-start  font-normal'>
                    <h5 className='font-bold text-sm text-black'>{member.name}</h5>
                    <span className=' text-xs text-gray-500 '>{member.email}</span>
                    <span className=' text-xs text-gray-500'>{member.phone}</span>
                </div>
            </div>
        </th>
        <td className='text-[16px] font-semibold'>{member.role}</td>
        <td>
            <button className=' btn btn-xs text-sm p-3  text-[#52C41A] bg-white hover:bg-white border border-[#B7EB8F]'>{member.status}</button>
        </td>
        <td className=' text-[16px]'>{member.createdAt}</td>
        <td className=' text-center'>
            <button className=' btn btn-xs text-sm p-3 font-normal border bg-white hover:bg-white border-gray-100'>View Details</button>
        </td>
    </tr>
  )
}
