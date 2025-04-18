/*
 * Componente que muestra dos botones personalizados 
 * @param {string} props.text - El texto que mostrará el botón depende de al función que se esta ejecutando 
 * si se va a agregar un nuevo elemento el botón tendrá el texto de ( add Item ) 
 * si el elemento se esta actualizando entonces el botón tendrá el texto de ( Update Item )
 * @param {function} props.onClick - se van a ejecutar dos funciones dependiendo de al acción que se quiere realizar
 * función para Agregar elementos
 * función para actualizar elementos
 * @param {boolean} [props.disabled=false] - Si algunos de los campos no se llena correctamente entonces el botón se 
 * desabilita.
*/
const Buttons = ({ onReset, disabled, isEditing, changes }) => {
  const handleReset = (e) => {
    e.preventDefault();
    onReset();
  };

  return (
    <div className="flex justify-between gap-2 mt-4">
      <button
        type="submit"
        className={`w-full px-4 py-2 rounded-md ${disabled
          ? 'bg-gray-300 cursor-not-allowed'
          : 'bg-[#3dc51e] hover:bg-[#3dc51e] text-white'
          }`}

        disabled={disabled}
      >
        {isEditing ? (changes ? "Update Item" : "Add Item") : "Add Item"}
      </button>

      <button
        type="button"
        onClick={handleReset}
        className="w-full px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-red-400 hover:text-white hover:transition-all"
      >
        {isEditing && changes ? "Cancel" : "Clear Form"}
      </button>
    </div>
  );
};

export default Buttons;
