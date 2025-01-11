import CrossIcon from "../icons/CrossIcon";
import Button from "./Button";
import { useRef,useState} from "react";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../../config";

type CreateContentModalProps = {
  open: boolean;
  onClose: () => void;
};

enum ContentType{
  Youtube="youtube",
  Twitter="twitter"
}

function CreateContentModal({ open, onClose }: CreateContentModalProps) {
  const titleRef=useRef<HTMLInputElement>();
  const linkRef=useRef<HTMLInputElement>();
  const [type,setType]=useState(ContentType.Youtube);

  async function addContent(){
     const title=titleRef.current?.value;
     const link=linkRef.current?.value;
     await axios.post(`${BACKEND_URL}/api/v1/content`,{
      link,title,type
     },{
      headers:{
        "Authorization":localStorage.getItem("token")
      }
     })

     onClose();
  }

  return (
    <div>
      {open && (
        <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center">
          {/* Background Overlay */}
          <div className="absolute w-full h-full bg-slate-500 opacity-60"></div>

          {/* Modal Content */}
          <div className="relative bg-white p-4 rounded shadow-md">
            <div className="flex justify-end">
              <div onClick={onClose} className="cursor-pointer">
                <CrossIcon />
              </div>
            </div>
            <div>
              <Input placeholder={"Title"} reference={titleRef}/>
              <Input placeholder={"Link"} reference={linkRef}/>
            </div>
            <h1 className="pl-3">Select Type:</h1>
            <div className="flex p-2 gap-2">
              <Button text="Youtube" variant={type===ContentType.Youtube?"primary":"secondary"} onClick={()=>setType(ContentType.Youtube)}/>
              <Button text="Twitter" variant={type===ContentType.Twitter?"primary":"secondary"} onClick={()=>setType(ContentType.Twitter)}/>
            </div>
            <div className="flex justify-center mt-4">
              <Button onClick={addContent} variant="primary" text="Submit" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateContentModal;

