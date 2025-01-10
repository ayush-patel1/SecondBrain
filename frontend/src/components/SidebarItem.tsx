import { ReactElement } from "react";

const SidebarItem = ({text,icon}:{
  text:string;
  icon:ReactElement
}) => {
  return (
    <div className="p-2 pl-5 flex text-gray-700 gap-3 items-center justify-start
    cursor-pointer hover:bg-gray-200 rounded max-w-48 pl-4 transition-all duration-150">
       {icon} {text}
    </div>
  )
}

export default SidebarItem