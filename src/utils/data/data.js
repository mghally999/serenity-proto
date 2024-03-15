// creating temporary file to store data manually before backend is created;

const surveyData = {
  selectOpt: {
    mealCount: [{ val: 3, text: "Three" }, { val: 5, text: "Five" }, { val: 2, text: "Two" }],
    planType: [{ val: 7, text: "Weekly" }, { val: 1, text: "Daily" }],
  },
  dietSpec: [
    { name: "balanced", text: "Balanced Diet (Recommended)" },
    { name: "low-carb", text: "Low-Carb (Less than 20%)" },
    { name: "low-fat", text: "Low-Fat (Less than 15%%)" },
  ],
  healthSpec: [
    { name: "vegan", text: "Vegan (No meat, poultry, fish)" },
    { name: "vegetarian", text: "Vegetarian (No wheat, can have gluten)" },
    { name: "alcohol-free", text: "Alcohol-free (No alcohol contained)" },
    { name: "peanut-free", text: "Peanut Free (No peanuts contained)" },
  ],
  mealTypes: {
    3: ["Breakfast", "Lunch", "Dinner"],
    5: ["Breakfast Snack", "Breakfast", "Lunch", "Afternoon Snack", "Dinner"],
    2: ["Brunch", "Dinner"],
  },
  calories: {
    min: 1800,
    max: 2500,
  },
}
const API = {
  ID: "2d78d1f8",
  KEY: "cdcd3ba70ae6c20126a6065bd337a2cd",
  URL: "https://api.edamam.com/search?",
}
export {
  surveyData as Survey,
  API,
}
