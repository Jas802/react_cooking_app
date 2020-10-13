import React, { useContext } from 'react'
import Recipe from './Recipe'
import { RecipeContext } from './App'

export default function RecipeList({ recipes }) {
    const { handleRecipeAdd } = useContext(RecipeContext)
    return (
    <div className="recipe-list">    
        <div>
            {recipes.map(recipe => { //puts all recipes in array
                return ( //returns each recipe
                <Recipe 
                    key={recipe.id} //assigns each recipe its own key
                    {...recipe} 
                />
                )
            })}
        </div>
        <div className="recipe-list__add-recipe-btn-container">
            <button 
             className="btn btn--primary"
             onClick={handleRecipeAdd}
             >
                 Add Recipe
            </button>
        </div>
    </div>
    )
}