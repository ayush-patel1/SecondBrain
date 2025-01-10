import SidebarItem from "./SidebarItem"
import TwitterIcon from "../icons/TwitterIcon"
import YouTubeIcon from "../icons/YouTubeIcon"
import BrainIcon from "../icons/BrainIcon"
function Sidebar() {
  return (
    <div className="h-screen bg-white border-r w-72 fixed
    left-0 top-0 pl-4 p-4">
      <div className="flex text-2xl pt-4  items-center gap-2 font-extrabold">
          <div className="pr-2 text-purple-600 font-b ">
          <BrainIcon/>
          </div>
          Connect Brain
      </div>
      <div className="pt-4">
        <SidebarItem text="Twitter" icon={<TwitterIcon />} />
        <SidebarItem text="Youtube" icon={<YouTubeIcon />} />
      </div>
    </div>
  )
}

export default Sidebar
