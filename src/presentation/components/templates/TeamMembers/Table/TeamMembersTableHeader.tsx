import React from 'react'

export default function TeamMembersTableHeader() {
  return (
    <thead className='bg-[#F5F5F5] text-[#0000008C]  font-normal '>
        <tr className='text-sm  table-row space-x-9'>
          <th className='p-3 w-2/6 text-start font-normal'>Member</th>
          <th className='p-3 w-1/6 text-start font-normal'>Role</th>
          <th className='p-3 w-1/6 text-start font-normal'>Status</th>
          <th className='p-3 w-1/6 text-start font-normal'>Last Updated</th>
          <th className='p-3 w-1/6 text-center font-normal'>Actions</th>
        </tr>
      </thead>
  )
}
