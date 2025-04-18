/*
 * Creación del contexto que se va a encargar de guardar los elementos que se agreguen a través de 
 * formulario y los va a renderizar en la pagina.
*/
import { createContext, useContext } from "react";
export const ElementsContext = createContext();
export const useElements = () => {
  const context = useContext(ElementsContext);
  return context;
}
