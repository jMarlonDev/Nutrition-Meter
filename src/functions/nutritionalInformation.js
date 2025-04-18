export const limitsNutritional = {
  calories: 2500,
  protein: 150,
  carbs: 300,
  fat: 70
}

export const totalCalories = (nutrients) => {
  return nutrients.reduce((total, item) => total + Number(item.calories), 0);
}

export const totalProtein = (nutrients) => {
  return nutrients.reduce((total, item) => total + Number(item.protein), 0);
}

export const totalCarbs = (nutrients) => {
  return nutrients.reduce((total, item) => total + Number(item.carbs), 0);
}

export const totalFat = (nutrients) => {
  return nutrients.reduce((total, item) => total + Number(item.fat), 0);
}


