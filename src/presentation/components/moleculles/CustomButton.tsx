import React from 'react'

enum VariantButtonEnum {
    primary = 'primary',
    secondary = 'secondary',
    outline = 'outline',
    link = 'link'
}
export type VariantButtonType = 'primary' | 'secondary' | 'outline' | 'link';

type CutomButtonProps  = {
    variant : VariantButtonType,
    name : string,
    onClick : Function,
    disabled? : boolean
    pill? : boolean
    type : 'button' | 'submit',
    isLoading? : boolean
}

  const variantClasses : Record<VariantButtonEnum, string> = {
        primary: 'bg-spec-primary text-white ',
        secondary: 'bg-[#F5F5F5] text-black',
        outline : 'bg-white text-black border border-gray-200',
        link : 'bg-white text-[#1677FF] border-none shadow-none hover:shadow-none ',
    };

export default function CustomButton({variant, name, onClick, type, pill = false,disabled, isLoading = false} : CutomButtonProps) {
    
    const  handleClick = () => {
        if (disabled && !disabled) {
            onClick();
        }
    }
  
  return (
        
        <button name={name} type={type}  onClick={() => handleClick()} className={`btn flex justify-between px-3 h-[36px] w-[170px] text-sm 
            ${pill ? 'rounded-full' : ''}
         ${disabled === true ? 'opacity-40' : '' }  ${variantClasses[variant]}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <span className=' font-[500] '>Button Label</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>

        </button>
  )
}
