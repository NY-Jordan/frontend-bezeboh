import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import TeamMembersTable from '../components/templates/TeamMembers/Table/TeamMembersTable'
import NewTeamMemberModal from '../components/templates/TeamMembers/NewTeamMemberModal'

export default function SetupGuides() {
  const [activeNewMemberModal, setActiveNewMemberModal] = useState<boolean>(false)
  return (
    <div className='flex justify-center items-center h-screen'>
      <span className=' bg-spec-primary text-white p-4 rounded-sm'>Setup Guides</span>
    </div>
  )
}
