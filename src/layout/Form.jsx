import Input from "../components/Input.jsx";
import Buttons from "../components/Buttons.jsx";
import { numberValidation } from "../functions/numberValidation.js";
import { useFormLogic } from "../hooks/useFormLogic.js";

const Form = () => {
  const {
    register,
    handleSubmit,
    errors,
    isValid,
    editingItem,
    valueChanges,
    onSubmit,
    resetForm,
    showLimitError
  } = useFormLogic();
  return (
    <div className="w-full p-2 border-2 border-t-0 shadow-[1px_1px_0_0_rgba(0,0,0)] border-black">
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4">

        {showLimitError && (
          <div className="mb-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
            Limit reached! You can only have 6 elements.
          </div>
        )}

        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Food Name"
            type={"text"}
            error={errors.name}
            placeholder="Food Name"
            register={register}
            name="name"
            options={{
              required: "Food name is required",
              minLength: {
                value: 4,
                message: "Minimum 4 characters"
              }
            }}
          />

          <Input
            label="Calories (kcal)"
            type={"text"}
            error={errors.calories}
            placeholder="0.00"
            register={register}
            name="calories"
            step="0.01"
            options={numberValidation}
            isNumeric={true}
          />

          <Input
            label="Protein (g)"
            type={"text"}
            error={errors.protein}
            placeholder="0.00"
            register={register}
            name="protein"
            step="0.01"
            isNumeric={true}
            options={numberValidation}
          />

          <Input
            label="Carbs (g)"
            type={"text"}
            error={errors.carbs}
            placeholder="0.00"
            register={register}
            name="carbs"
            step="0.01"
            options={numberValidation}
            isNumeric={true}
          />

        </div>
        <div className="grid col-span-2">
          <Input
            label="Fat (g)"
            type={"text"}
            error={errors.fat}
            placeholder="0.00"
            register={register}
            name="fat"
            step="0.01"
            options={numberValidation}
            isNumeric={true}
          />
        </div>
        <Buttons

          onReset={resetForm}
          disabled={!isValid || (editingItem && !valueChanges)}
          isEditing={editingItem !== null}
          changes={valueChanges}
        />
      </form>
    </div>
  );
};

export default Form;
