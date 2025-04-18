/*
 * Formatea los campos de input para permitir que se ingrese solo números y un máximo de 2 decimales
 * @params (Event) Evento que se activa cuando se ingresa un valor en el campo del input
 * @params {boolean} isNumeric - Variable que me indica si el input solo me permite ingresar valores númericos
 * @description:
 * 1. Permite que se ingrese valores númericos en los campos de input y un punto decimal
 * 2. Limita a 2 decimales despúes del punto decimal
 * 3. Corrige el valor automaticamente si   no cumple con la condición de que debe ser un número
*/

export const handleNumberInput = (event, isNumeric) => {
	if (!isNumeric) {
		return;
	}

	const value = event.target.value;

	const regex = /^[0-9]*\.?[0-9]*$/;

	if (!regex.test(value)) {
		event.target.value = value.slice(0, -1);
		return;
	}

	if (value.includes(".")) {
		const parts = value.split(".");
		if (parts[1] && parts[1].length > 2) {
			event.target.value = `${parts[0]}.${parts[1].slice(0, 2)}`;
		}
	}
};
