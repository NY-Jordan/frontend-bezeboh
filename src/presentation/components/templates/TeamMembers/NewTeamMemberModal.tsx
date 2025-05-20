import { faChevronDown, faChevronUp, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import UploadFile from '../../moleculles/UploadFile'
import { FieldValues, useForm } from 'react-hook-form';
import { GenderTypeEnum } from '../../../../domain/enums/GenderTypeEnum';
import { IMember } from '../../../../domain/entities/members.entities';
import { useAppDispatch, useAppSelector } from '../../../../app/store/hook';
import { addMemberInit, addMemberReset, addMemberSuccess } from '../../../../app/actions/MembersActions';
import toast from 'react-hot-toast';
import { fetchMembers } from '../../../../infrastructure/services/MembersService';

export default function NewTeamMemberModal({active, setActive} : {active : boolean, setActive : React.Dispatch<React.SetStateAction<boolean>>}) {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [gender, setGender] = useState<GenderTypeEnum>();
    const [image, setImage] = useState<string|null>(null);
    const dispatch = useAppDispatch();
    const addMemberState = useAppSelector(state => state.members).add
    const [loader, setLoader] = useState<boolean>(false);

    const handleCreateNewMember = (data : FieldValues) => {
        const member : IMember =  {
          name : data.first_name + ' ' + data.last_name,
          image : image ?? '',
          email: data.email,
          phone: data.phone,
          role: 'Member',
          status: data.status,
          createdAt: Date()
        }
        setLoader(true);
        dispatch(addMemberInit());
        dispatch(addMemberSuccess(member));
    }


    useEffect(() => {
      if (addMemberState.status === 'success') {
        reset(['first_name', 'last_name', 'email', 'phone'])
        setActive(false);
        toast.success('Member has been added successfully !');
        dispatch(addMemberReset());
      }
    }, [addMemberState.status])

  return (
    <>
        <input type="checkbox" onChange={() => {}} checked={active} id="my_modal_6" className="modal-toggle" />
        <div className="modal" role="dialog">
        <div className="modal-box px-0 pb-0">
            <div className=' flex p-0 justify-between items-center border-b border-b-gray-200 px-4 pb-3'>
                <h2 className=' text-lg font-semibold'>New Member</h2>
                <a onClick={() => setActive(false)} className=' text-gray-400 font-normal  hover:cursor-pointer'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </a>
            </div>
            <div className='px-4 pt-5 border-b pb-5 border-b-gray-100'>
                <form onSubmit={handleSubmit(handleCreateNewMember)}  id='add-member' className='space-y-4'>
                  <div className='flex items-center space-x-3'>
                    <div>
                      <label className='text-gray-500 text-xs'>First Name <span className='text-red-300'>*</span></label>
                      <input {...register('first_name', {
                        required : true
                      })}  placeholder='First name' className={`input2 input-sm ${errors.first_name ? 'border-spec-primary' : ''}`} />
                    </div>
                    <div>
                      <label className='text-gray-500 text-xs'>Last Name <span className='text-red-300'>*</span></label>
                      <input {...register('last_name', {
                        required : true
                      })} placeholder='Last name' className={`input2 input-sm ${errors.last_name ? 'border-spec-primary' : ''}`}  />
                    </div>
                  </div>
                  <div>
                      <label className='text-gray-500 text-xs'>Email <span className='text-red-300'>*</span></label>
                     <input
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'Invalid email address',
                          },
                        })}
                        placeholder="Email"
                        type="email"
                        className={`input2 input-sm ${errors.email ? 'border-spec-primary' : ''}`}
                      />
                  </div>
                  <div>
                      <label className='text-gray-500 text-xs'>Phone <span className='text-red-300'>*</span></label>
                      <input  {...register('phone', {
                        required : true
                      })}  placeholder='080 123 456' type='text' className={`input2 input-sm ${errors.phone ? 'border-spec-primary' : ''}`} />
                  </div>
                  <div className='flex flex-col w-full'>
                      <label className=' text-gray-500 text-xs'>Status</label>
                      <div className="relative inline-block w-full">
                        <select className='input2' {...register('status', {
                        required : true
                      })} >
                            <option className='text-black'>Available</option>
                            <option>Unavailable</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex flex-col justify-center items-center px-2 text-black mr-3">
                           <FontAwesomeIcon fontWeight={900} fontSize={8} icon={faChevronUp} />
                           <FontAwesomeIcon fontWeight={500} fontSize={8} icon={faChevronDown} />
                        </div>
                      </div>
                  </div>
                  <div>
                      <label className='text-gray-500 text-xs'>Gender</label>
                      <div className='space-x-4'>
                          <label className='space-x-2'>
                            <input onClick={(e) => { setGender(GenderTypeEnum.MALE)} } name='gender' defaultChecked type='radio'    className=' radio radio-xs checked:before:bg-spec-primary  checked:border-spec-primary' />
                            <span className='text-sm'>Male</span>
                          </label>
                           <label className='space-x-2'>
                            <input name='gender'  onClick={(e) => { setGender(GenderTypeEnum.FEMALE) } } type='radio' className=' radio radio-xs checked:before:bg-spec-primary  checked:border-spec-primary' />
                            <span className='text-sm'>Female</span>

                          </label>
                      </div>
                  </div>

                  <div className='mt-6 '>
                     <UploadFile name='image' onChange={(file) => {setImage(file)}} />
                  </div>
                  
                </form>
            </div>
            <div className='flex items-center justify-end px-4 space-x-3 py-4'>
                <button type='button'  onClick={() => setActive(false)} className='btn btn-sm bg-gray-100 text-black'>Cancel</button>
                <button type='submit' form='add-member' className='btn btn-sm bg-spec-primary text-white'>Add Member</button>
            </div>
        </div>
        </div>
    </>
  )
}
