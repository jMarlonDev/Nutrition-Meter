import { handleNumberInput } from "../functions/inputAction";

const Input = ({ label, type, error, placeholder, register, name, options, isNumeric = false }) => {

  return (
    <div className="mb-4">
      <label className="font-bold flex justify-center m-2 text-[#22252E]">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={`
          w-full px-3 py-2 rounded-md
          border-2
          ${error
            ? 'border-red-500 shadow-[1px_1px_0_0_rgba(239,68,68)] focus:shadow-[2px_2px_0_0_rgba(239,68,68)]'
            : 'border-black shadow-[1px_1px_0_0_rgba(0,0,0)] focus:shadow-[2px_2px_0_0_rgba(0,0,0)]'
          }
          bg-white
          focus:outline-none 
          focus:bg-gray-50
          transition-all
        `}        {...register(name, options)}
        onInput={(event) => handleNumberInput(event, isNumeric)}
      />
      {error && (
        <span className="text-red-500 text-xs mt-1 block">
          {error.message}
        </span>
      )}
    </div>
  );
};

export default Input;
