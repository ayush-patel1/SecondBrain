type InputProps = {
    placeholder:string;
    reference : any;
  };
  
  export function Input({ placeholder, reference }: InputProps) {
    return (
      <div>
        <input
          type="text"
          placeholder={placeholder}
          className="px-4 py-2 border m-2 rounded-md"
          ref={reference}
        />
      </div>
    );
  }
  