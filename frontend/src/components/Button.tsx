import { ReactElement } from 'react'

interface ButtonProps{
    variant:"primary"|"secondary";
    text:string;
    startIcon:ReactElement
}

const variantClasses={
    "primary":"bg-purple-600 text-white",
    "secondary":"bg-purple-200 text-pruple-600 "
}

const defaultStyles="flex gap-3 px-4 py-2 rounded-md font-light items-center"

const Button = ({variant,text,startIcon}:ButtonProps) => {
  return (
    <button className={`${variantClasses[variant]} ${defaultStyles}` }>
         {startIcon}
       {text}
    </button>
  )
}

export default Button