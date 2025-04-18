/*
 * Creación del contexto que se va a encargar de actualizar un elemento
*/
import { createContext, useContext } from "react";
export const ContextUpdate = createContext();
export const useUpdate = () => {
	const context = useContext(ContextUpdate);
	return context;
};
