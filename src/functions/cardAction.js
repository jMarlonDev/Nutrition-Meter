/*
 * Incrementa la cantidad de un elemento y hace los calculos correspondientes al incremento de sus propiedades
 * @param {string} id - ID del nutriente a modificar
 * @param {Array<Object>} nutrients - Lista de nutrientes actual
 * @param {function} setNutrients - Función para actualizar el estado de nutrientes
 * @returns {void} Actualiza el estado de la cantidad directamente.
*/
export const incrementQuantity = (id, nutrients, setNutrients) => {
	const elements = nutrients.map((item) => {
		if (item.id === id) {
			const updateAmount = item.quantity + 1;
			return {
				...item,
				calories: (item.calories / item.quantity) * updateAmount,
				protein: (item.protein / item.quantity) * updateAmount,
				carbs: (item.carbs / item.quantity) * updateAmount,
				fat: (item.fat / item.quantity) * updateAmount,
				quantity: updateAmount,
			};
		}
		return item;
	});
	setNutrients(elements);
};

/*
 * Disminuye la cantidad de un elemento y hace los calculos correspondientes a la disminución de sus propiedades
 * @param {string} id - ID del nutriente a modificar
 * @param {Array<Object>} nutrients - Lista de nutrientes actual
 * @param {function} setNutrients - Función para actualizar el estado de nutrientes
 * @returns {void} Actualiza el estado de la cantidad disminuida directamente.
*/

export const decrementQuantity = (id, nutrients, setNutrients) => {
	const elements = nutrients.map((item) => {
		if (item.id === id) {
			const updateAmount = Math.max(item.quantity - 1, 1);
			return {
				...item,
				calories: (item.calories / item.quantity) * updateAmount,
				protein: (item.protein / item.quantity) * updateAmount,
				carbs: (item.carbs / item.quantity) * updateAmount,
				fat: (item.fat / item.quantity) * updateAmount,
				quantity: updateAmount,
			};
		}
		return item;
	});
	setNutrients(elements);
};
