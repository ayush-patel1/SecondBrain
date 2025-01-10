import CrossIcon from "../icons/CrossIcon";
import Button from "./Button";

type CreateContentModalProps = {
  open: boolean;
  onClose: () => void;
};

function CreateContentModal({ open, onClose }: CreateContentModalProps) {
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
              <Input placeholder={"Title"} onChange={() => { }} />
              <Input placeholder={"Link"} onChange={() => { }} />
            </div>
            <div className="flex justify-center mt-4">
              <Button variant="primary" text="Submit" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateContentModal;

type InputProps = {
  onChange: () => void;
  placeholder: string;
};

function Input({ onChange, placeholder }: InputProps) {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        className="px-4 py-2 border m-2 rounded-md"
        onChange={onChange}
      />
    </div>
  );
}
