import React, { ChangeEvent, InputHTMLAttributes, useRef, useState } from 'react'

export default function UploadFile({name, onChange} : {name : string , onChange : (file : string) => void}) {
    const [file, setFile] = useState<File|null>(null);
const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const fileInputRef = useRef<HTMLInputElement>(null);
   

    const handleImageUploadClick = (e : React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (fileInputRef.current) {
        
          fileInputRef.current.click();
        }
    };
    const updateImage = (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];
        setFile(file);
        setPreviewUrl(URL.createObjectURL(file));
        if (onChange) {
          onChange(URL.createObjectURL(file));
        }
      }
    };

  return (
     <div onClick={handleImageUploadClick} className='flex items-center space-x-3 hover:cursor-pointer'>
        <div className="w-[56px] h-[56px] bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
        {previewUrl ? (
          <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
        ) : null}
      </div>
        <div className='flex flex-col space-y-2 justify-center items-center'>
            <div className='flex items-center space-x-2'>
            <img src='/images/icons/image.png' />
            <span className='text-xs text-[#1677FF]'>{file ? file.name : 'Upload Profile Image'}</span>
            </div>
            <span className='text-xs'>PNG Or JPEG (Max File Size : 2MB)</span>
        </div>
          <input type='file' className='hidden' name={name} onClick={() => {
           
          }} onChange={updateImage}  ref={fileInputRef}  />
    </div>
  )
}
