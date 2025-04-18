/*
 * Provider: Encargado de encapsular el contexto que guarda los elementos agregados para acceder al contexto de manera global.
*/
import { useState } from "react";
import { ElementsContext } from "./ElementsContext";
import json from "../data/elements.json"
const elements = json.data;
const ElementsProvider = ({ children }) => {
  const [nutrients, setNutrients] = useState(elements);

  return (
    <ElementsContext.Provider value={[nutrients, setNutrients]}>
      {children}
    </ElementsContext.Provider>
  )
}

export default ElementsProvider;
