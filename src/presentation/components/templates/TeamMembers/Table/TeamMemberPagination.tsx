import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { IPagination } from '../../../../../domain/entities/members.entities';
import { useAppDispatch } from '../../../../../app/store/hook';
import { fetchMembers } from '../../../../../infrastructure/services/MembersService';

export default function TeamMemberPagination({pagination} : {pagination : IPagination}) {
  const [pageSelected, setPageSelected] = useState<number>(pagination.page);
  const dispatch = useAppDispatch();

  const handleChangePage = (page : number) => {
    fetchMembers(page)
  }
  return (
      <div className="flex border-gray-100   border-l border-r border-b items-center  w-full space-x-5 justify-center text-white xs:py-3 lg:py-5">
        <span className="text-sm  text-black">Total {pagination.total} items</span>
        <div className="flex items-center space-x-5">
          <button disabled={pageSelected === 1} onClick={() => {
            if (pageSelected > 1) {
              setPageSelected(pageSelected -1);
              handleChangePage(pageSelected  - 1)
            }
          }} className=' disabled:text-gray-300  hover:cursor-pointer text-black ' ><FontAwesomeIcon size="xs" icon={faChevronLeft} /></button>
          <div className="flex space-x-2">
            {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((page) => (
              <div key={page}>
                <input
                  type="radio"
                  name="pagination"
                  onChange={() => {}}
                  id={`page${page}`}
                  className="peer hidden"
                  checked={pageSelected === page ? true : false}
                />
                <label
                  htmlFor={`page${page}`}
                  aria-label={`Page ${page}`}
                  onClick={() => {
                    setPageSelected(page);
                     handleChangePage(page)

                  }}
                  className="peer-checked:text-spec-primary peer-checked:border peer-checked:border-spec-primary
                    cursor-pointer px-3 py-1 rounded text-black text-sm w-[32px] h-[32px] peer-checked:font-semibold"
                >
                  {page}
                </label>
              </div>
            ))}
          </div>
          <button disabled={pageSelected === 5} onClick={() => {
            if (pageSelected < 5) {
              setPageSelected(pageSelected  + 1);
              handleChangePage(pageSelected  + 1)
            }
          }} className=' disabled:text-gray-300 hover:cursor-pointer text-black'><FontAwesomeIcon size="xs" icon={faChevronRight} /></button>
        </div>
      </div>
       

  )
}
