import NutritionMeter from "./layout/NutritionMeter.jsx"
import ElementsProvider from './context/elementsProvider.jsx'
import UpdateProvider from './context/UpdateProvider.jsx'
function App() {

  return (
    <ElementsProvider>
      <UpdateProvider>
        <NutritionMeter />
      </UpdateProvider>
    </ElementsProvider>
  )
}

export default App
