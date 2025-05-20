import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import TeamMembersTable from '../components/templates/TeamMembers/Table/TeamMembersTable'
import NewTeamMemberModal from '../components/templates/TeamMembers/NewTeamMemberModal'
import { fetchMembers } from '../../infrastructure/services/MembersService'

export default function TeamMembers() {
  const [activeNewMemberModal, setActiveNewMemberModal] = useState<boolean>(false);

 
  return (
    <div className=''>
      <div className='flex @max-xs:flex-col  justify-between'>
        <h2 className='xs:w-1/6 md:w-2/6 lg:w-4/6 text-black text-[30px] font-semibold'>Team Members</h2>
        <div className='xs:w-5/6 md:w-4/6 lg:w-2/6 flex items-center space-x-3'>
          <label className="input2">
            <FontAwesomeIcon icon={faSearch} />
            <input type="search" className="" placeholder="Search" />
          
          </label>
          <button onClick={() => setActiveNewMemberModal(true)} className=' btn bg-spec-primary text-white'>New Member</button>
        </div>
      </div>
      <TeamMembersTable />
      <NewTeamMemberModal active={activeNewMemberModal} setActive={setActiveNewMemberModal} />
    </div>
  )
}
