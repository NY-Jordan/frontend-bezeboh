import React, { useEffect, useState } from 'react'
import TeamMembersTableHeader from './TeamMembersTableHeader'
import TeamMembersItem from './TeamMembersItem'
import TeamMemberPagination from './TeamMemberPagination'
import { useAppSelector } from '../../../../../app/store/hook'
import { fetchMembers, MEMBERS_PER_PAGE } from '../../../../../infrastructure/services/MembersService'

export default function TeamMembersTable() {

  const membersState = useAppSelector(state => state.members).list
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    fetchMembers(page)
  }, [])
  
  return (
    <div>
      <table className='w-full mt-5 border border-gray-100'>
      <TeamMembersTableHeader />
      <tbody>
       {
        membersState.data && membersState.data.map((member, key) => {
          return  <TeamMembersItem member={member} key={key} />
        })
       }
      </tbody>
    </table>
    {membersState.pagination && membersState.pagination.total > MEMBERS_PER_PAGE ?  
     <TeamMemberPagination pagination={membersState.pagination}  /> : <></>}
    </div>

  )
}
