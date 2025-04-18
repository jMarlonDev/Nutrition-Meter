/*
 * Provider: Encargado de encapsular el contexto que almacena el estado de actualización de un elemento en la pagina.
*/
import { useState } from "react";
import { ContextUpdate } from "./ContextUpdate";
const UpdateProvider = ({ children }) => {
  const [editingItem, setEditingItem] = useState(null);
  return (
    <ContextUpdate value={{ editingItem, setEditingItem }}>
      {children}
    </ContextUpdate>
  )
}

export default UpdateProvider;

