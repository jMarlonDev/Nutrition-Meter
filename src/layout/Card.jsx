
import { useContext, useState } from "react";
import { ElementsContext } from "../context/ElementsContext";
import Options from "../components/Options";
import { useUpdate } from "../context/ContextUpdate";
import { nutritionActions } from "../functions/formAction";

const Card = () => {
  const [nutrients, setNutrients] = useContext(ElementsContext);
  const { setEditingItem } = useUpdate();
  const { deleteItem } = nutritionActions();

  const handleDelete = (id) => {
    deleteItem(id);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 place-items-center p-4 gap-10 border-2 border-t-0 border-black">
      {nutrients.length === 0 ? (
        <div className="col-span-full py-20">
          <span className="text-lg">No items added yet</span>
        </div>
      ) : (
        <>
          {nutrients.map((item) => (
            <div key={item.id} className="flex flex-col items-center gap-2 shadow-[1px_1px_0_0_rgba(0,0,0)] border-2 border-black p-6 w-64 min-w-64 max-w-64">
              <span className="text-center w-full truncate font-bold">{item.name}</span>
              <span className="text-center w-full truncate">Calories: {item.calories}</span>
              <span className="text-center w-full truncate">Protein: {item.protein}</span>
              <span className="text-center w-full truncate">Carbs: {item.carbs}</span>
              <span className="text-center w-full truncate">Fat: {item.fat}</span>
              <div className="flex flex-col">
                <Options id={item.id} nutrients={nutrients} setNutrients={setNutrients} onEdit={setEditingItem} onDelete={handleDelete} />
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Card;
