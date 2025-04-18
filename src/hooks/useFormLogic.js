import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { nutritionActions } from "../functions/formAction";
import { useElements } from "../context/ElementsContext";
import { useUpdate } from "../context/ContextUpdate";
import { useState } from "react";

/*
 * Hook personalizado para manejar la lógica del formulario de nutrición utilizando react-hook-form
 * @return {Object} Retorna un objeto con todos lo métodos y propiedades del formulario
 * @property {function} register - Función para registrar los valores de los campos del formulario que nos proporciona react-hook-form
 * @property {function} handleSubmit - Función para manejar el envío de los datos del formulario
 * @property {Object} errors - Encargado de revisar los datos ingresados en los campos para validar si hay errores
 * en el formulario
 * @property {boolean} isValid - variable que me indica si los datos ingresados en los campos del 
 * formulario son validos para ser enviados
 * @property {Object} editingItem - Estado que indica si un elemento se está actualizando dentro del formulario
 * @property {boolean} valueChanges - Variable que me indica si hay cambios en los valores de un elemento
 * dentro de los campos del formulario
 * @property {function} onSubmit - Función para enviar los datos ingresados dentro del formulario
 * @property {function} resetForm - Función para resetear o limpiar los campos del formulario
 * @property {boolean} showLimitError - Variable que me indica si debe mostrar el error del limite de elementos por agregar
 * fuen alcanzado en este caso para esta pagina solo se permite un maximo de 6 elementos para agregar si se pasa este limite 
 * se debe mostrar un mensaje de error
*/

export const useFormLogic = () => {
	const { addNutritionItem, updateItem } = nutritionActions();
	const { editingItem, setEditingItem } = useUpdate();
	const [nutrients, setNutrients] = useElements();
	const [showLimitError, setShowLimitError] = useState(false);

  //Configuración inicial del formulario con react-hook-form
	const formMethods = useForm({
		mode: "onChange",
		defaultValues: {
			name: "",
			calories: "",
			protein: "",
			carbs: "",
			fat: "",
		},
	});

	const {
		register,
		handleSubmit,
		reset,  
		setValue,
		watch,
		formState: { errors, isDirty, isValid },
	} = formMethods;

  // Observar cambios en los valores del formulario con el método watch que proporciona react-hook-form
	const formValues = watch();

  /*
   * Determina si se han realizado cambios en un elemento dentro del formulario para saber si se está actualizando un elemento 
  */
	const valueChanges = editingItem
		? Object.keys(formValues).some((key) => {
				const value = formValues[key];
				const editedValue = editingItem[key];
				return value !== editedValue.toString();
			})
		: isDirty;

  // Uso del useEffect para cargar los valores de un elemento dentro de los campos del formulario cuando se este actualizando
	useEffect(() => {
		if (editingItem) {
			setValue("name", editingItem.name);
			setValue("calories", editingItem.calories.toString());
			setValue("protein", editingItem.protein.toString());
			setValue("carbs", editingItem.carbs.toString());
			setValue("fat", editingItem.fat.toString());
		}
	}, [editingItem, setValue]);

  /*
   * Función encargada de enviar los datos del formulario
   * @params {Object} data - Datos que se ingresaron en los campos de formulario
   * @params {String} data.name - Nombre del alimento
   * @params {String} data.calories - Calorías que contiene el alimento
   * @params {String} data.protein - Proteínas que contiene el alimento
   * @params {String} data.carbs - Carbohidratos que contiene el alimento
   * @params {String} data.fat - grasas que contiene el alimento
   */

	const onSubmit = useCallback(
		(data) => {
			if (editingItem) {
				updateItem(editingItem.id, data);
				resetForm();
			} else {
				const added = addNutritionItem(data);
				if (!added) {
					setShowLimitError(true);
					setTimeout(() => setShowLimitError(false), 5000);
					return;
				}
				resetForm();
			}
			setEditingItem(null);
		},
		[editingItem, addNutritionItem, updateItem],
	);
	const resetForm = useCallback(() => {
		reset();
		setEditingItem(null);
	}, [reset, setEditingItem]);

	return {
		register,
		handleSubmit,
		errors,
		isValid,
		editingItem,
		valueChanges,
		onSubmit,
		resetForm,
		showLimitError,
	};
};
