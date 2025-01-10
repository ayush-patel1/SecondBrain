type InputProps = {
    onChange: () => void;
    placeholder: string;
  };
  
  export function Input({ onChange, placeholder }: InputProps) {
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
  