import { v4 as uuidv4 } from "uuid";
import { useElements } from "../context/ElementsContext";

export const nutritionActions = () => {
	const [nutrients, setNutrients] = useElements();

  const addNutritionItem = (data) => {
    if (nutrients.length >= 6) {
      return false;
    }

    const itemToAdd = {
      ...data,
      id: uuidv4(),
      quantity: 1,
    };

    setNutrients([...nutrients, itemToAdd]);
    return true;
  };

	const updateItem = (id, data) => {
		const updatedItems = nutrients.map((item) => {
			return item.id === id ? { ...item, ...data } : item;
		});
		setNutrients(updatedItems);
		return true;
	};

	const deleteItem = (id) => {
		const deletedItems = nutrients.filter((item) => {
			return item.id !== id;
		});
    setNutrients(deletedItems);
	};

	const resetNutritionItems = () => {
		setNutrients([]);
	};

	return {
		addNutritionItem,
		updateItem,
    deleteItem,
		resetNutritionItems,
	};
};
