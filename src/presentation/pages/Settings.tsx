import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import CustomButton from '../components/moleculles/CustomButton'

export default function Settings() {
  return (
    <div className='flex justify-center  h-screen'>
      <div className='w-1/3'>
        <h3 className='text-xl text-center'>Buttons</h3>
        <div className='flex justify-center mt-3'>
            <ul className='space-y-4'>
                <li className='flex items-center space-x-14'>
                    <span className='text-sm'>Primary</span>
                    <CustomButton name='primary' type='button' variant='primary' onClick={() => {}}/>
                </li>
                <li className='flex items-center space-x-14'>
                    <span className='text-sm'>Secondary</span>
                    <CustomButton name='primary' type='button' variant='secondary' onClick={() => {}}/>

                </li>
                <li className='flex items-center space-x-14'>
                    <span className='text-sm'>Outline</span>
                    <CustomButton name='primary' type='button' variant='outline' onClick={() => {}}/>

                </li>
                <li className='flex items-center space-x-14'>
                    <span className='text-sm'>Link</span>
                    <CustomButton name='primary' type='button' variant='link' onClick={() => {}}/>

                </li>

                {/* disabled variant start  */}

                <li className='flex items-center space-x-14'>
                    <div>
                        <h4 className='text-sm'>Primary </h4>
                        <h4 className='text-xs text-[#9BA5B7]'>DISABLED</h4>
                    </div>
                    <CustomButton name='primary' disabled type='button' variant='primary' onClick={() => {}}/>
                </li>
                <li className='flex items-center space-x-14'>
                    <div>
                        <h4 className='text-sm'>Secondary </h4>
                        <h4 className='text-xs text-[#9BA5B7]'>DISABLED</h4>
                    </div>
                    <CustomButton name='primary' disabled type='button' variant='secondary' onClick={() => {}}/>

                </li>
                <li className='flex items-center space-x-14'>
                    <div>
                        <h4 className='text-sm'>Outline </h4>
                        <h4 className='text-xs text-[#9BA5B7]'>DISABLED</h4>
                    </div>
                    <CustomButton name='primary' disabled type='button' variant='outline' onClick={() => {}}/>

                </li>
                <li className='flex items-center space-x-14'>
                     <div>
                        <h4 className='text-sm'>Link </h4>
                        <h4 className='text-xs text-[#9BA5B7]'>DISABLED</h4>
                    </div>
                    <CustomButton name='primary' disabled type='button' variant='link' onClick={() => {}}/>

                </li>

                 {/* pill variant start  */}

                <li className='flex items-center space-x-14'>
                    <div>
                        <h4 className='text-sm'>Primary </h4>
                        <h4 className='text-xs text-[#9BA5B7]'>PILL</h4>
                    </div>
                    <CustomButton name='primary' pill type='button' variant='primary' onClick={() => {}}/>
                </li>
                <li className='flex items-center space-x-14'>
                    <div>
                        <h4 className='text-sm'>Secondary </h4>
                        <h4 className='text-xs text-[#9BA5B7]'>PILL</h4>
                    </div>
                    <CustomButton name='primary' pill  type='button' variant='secondary' onClick={() => {}}/>

                </li>
                <li className='flex items-center space-x-14'>
                    <div>
                        <h4 className='text-sm'>Outline </h4>
                        <h4 className='text-xs text-[#9BA5B7]'>PILL</h4>
                    </div>
                    <CustomButton name='primary' pill type='button' variant='outline' onClick={() => {}}/>

                </li>
                <li className='flex items-center space-x-14'>
                     <div>
                        <h4 className='text-sm'>Link </h4>
                        <h4 className='text-xs text-[#9BA5B7]'>PILL</h4>
                    </div>
                    <CustomButton name='primary' pill  type='button' variant='link' onClick={() => {}}/>

                </li>

                {/* pill disabled variant start  */}

                <li className='flex items-center space-x-14'>
                    <div>
                        <h4 className='text-sm'>Primary </h4>
                        <h4 className='text-xs text-[#9BA5B7]'>PILL</h4>
                    </div>
                    <CustomButton name='primary' disabled pill type='button' variant='primary' onClick={() => {}}/>
                </li>
                <li className='flex items-center space-x-14'>
                    <div>
                        <h4 className='text-sm'>Secondary </h4>
                        <h4 className='text-xs text-[#9BA5B7]'>PILL</h4>
                    </div>
                    <CustomButton name='primary' disabled pill  type='button' variant='secondary' onClick={() => {}}/>

                </li>
                <li className='flex items-center space-x-14'>
                    <div>
                        <h4 className='text-sm'>Outline </h4>
                        <h4 className='text-xs text-[#9BA5B7]'>PILL</h4>
                    </div>
                    <CustomButton name='primary' disabled pill type='button' variant='outline' onClick={() => {}}/>

                </li>
                <li className='flex items-center space-x-14'>
                     <div>
                        <h4 className='text-sm'>Link </h4>
                        <h4 className='text-xs text-[#9BA5B7]'>PILL</h4>
                    </div>
                    <CustomButton name='primary' disabled pill  type='button' variant='link' onClick={() => {}}/>

                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

