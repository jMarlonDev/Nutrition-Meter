
import Form from "./Form.jsx";
import Card from "./Card.jsx"
import Information from "../components/Information.jsx";
const NutritionMeter = () => {

  return (
    <div className="bg-[#FCF8EC] font-jetbrains ">
      <h1 className="text-center text-red-400 p-5 border-2 border-black text-3xl font-semibold">Nutrition Meter</h1>
      <Form/>
      <Card />
      <Information />
    </div>
  );
}

export default NutritionMeter;
