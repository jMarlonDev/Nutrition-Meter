import { IoIosAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { incrementQuantity, decrementQuantity } from "../functions/cardAction";

const Options = ({ id, nutrients, setNutrients, onEdit, onDelete }) => {

  const currentItem = nutrients.find(item => item.id === id);
  const quantity = currentItem ? currentItem.quantity : 0;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between gap-2">
        <button onClick={() => incrementQuantity(id, nutrients, setNutrients)} className="bg-[#3dc51e] px-[26.2px] py-2 cursor-pointer shadow-[1px_1px_0_0_rgba(0,0,0)] border-2 border-black">
          <IoIosAdd  size={20} className="text-white"/>
        </button>

        <span className="font-bold">{quantity}</span>

        <button className="cursor-pointer bg-red-400 px-[36.5px] py-2 shadow-[1px_1px_0_0_rgba(0,0,0)] border-2 border-black" onClick={() => decrementQuantity(id, nutrients, setNutrients)}>
          <FaMinus size={16} />
        </button>
      </div>

      <div className="flex gap-[35px] w-full">
        <button className="cursor-pointer flex flex-row-reverse items-center justify-center gap-2 bg-[#FBC359] py-2 px-2 shadow-[1px_1px_0_0_rgba(0,0,0)] border-2 border-black" onClick={() => onEdit(currentItem)}>
          <span className="font-bold">Edit</span>
          <FaEdit size={20}/>
        </button>

        <button className="cursor-pointer flex flex-row-reverse items-center gap-2 bg-red-400 py-2 px-2 shadow-[1px_1px_0_0_rgba(0,0,0)] border-2 border-black" onClick={() => onDelete(id)}>
          <span className="font-bold">Delete</span>
          <RiDeleteBin6Fill size={16}/>
        </button>
      </div>
    </div>
  );
}

export default Options;
