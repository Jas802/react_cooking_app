import React from 'react';
import RecipeList from './RecipeList'

function App() {
  return (
    <RecipeList recipes={sampleReciepes} />
  )
}
const sampleReciepes = [
  {
    id: 1,
    name: "Plain Chicken",
    servings: 3,
    cookTime: "1:45",
    instructions: "1. Put salt on Chicken\n2. Put chicken in oven\n 3. Eat chicken"
  },
  {
    id: 2,
    name: "Plain Pork",
    servings: 5,
    cookTime: "0:45",
    instructions: "1. Put paprika on Pork\n2. Put pork in oven\n 3. Eat pork"
  }
]
export default App;
