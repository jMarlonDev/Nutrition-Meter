import { useElements } from "../context/ElementsContext";
import { limitsNutritional, totalProtein, totalCalories, totalCarbs, totalFat } from "../functions/nutritionalInformation";



const Quantities = () => {

  const [nutrients] = useElements();

  const calories = totalCalories(nutrients);
  const protein = totalProtein(nutrients);
  const carbs = totalCarbs(nutrients);
  const fat = totalFat(nutrients);

  return (
    <div className="flex flex-col justify-center items-center p-5 gap-2 font-bold shadow-[1px_1px_0_0_rgba(0,0,0)] border-2  border-black">

      <span className={`${calories > limitsNutritional.calories ? 'text-red-600 font-bold' : 'text-current'}`}>
        Total Calories: {
          calories > limitsNutritional.calories
            ? `🚨 Caloric excess! Do not exceed 2500 kcal`
            : calories
        }
      </span>
      <span className={`${protein > limitsNutritional.protein ? 'text-[#e6d912] font-bold' : 'text-current'}`}>
        Total Protein: {
          protein > limitsNutritional.protein
            ? `⚠️ Excess protein! Do not exceed 150 (g) of protein`
            : protein
        }
      </span>
      <span className={`${carbs > limitsNutritional.carbs ? 'text-red-600 font-bold' : 'text-current'}`}>
        Total Carbs: {
          carbs > limitsNutritional.carbs
            ? `🚨 Excess carbohydrates! Do not exceed 300 (g)`
            : carbs
        }
      </span>
      <span className={`${fat > limitsNutritional.fat ? 'text-[#e6d912] font-bold' : 'text-current'}`}>
        Total Fat: {
          fat > limitsNutritional.fat
            ? `🍔 High fat! Do not exceed 70 (g) total fat and saturated fat.`
            : fat
        }
      </span>
    </div>
  )
}

export default Quantities;
