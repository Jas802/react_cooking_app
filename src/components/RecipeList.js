import React from 'react'
import Recipe from './Recipe'
export default function RecipeList(props) {
    const {
        recipes,
        handleRecipeAdd,
        handleRecipeDelete
    } = props
    return (
    <div className="recipe-list">    
        <div>
            {recipes.map(recipe => { //puts all recipes in array
                return ( //returns each recipe
                <Recipe 
                    key={recipe.id} //assigns each recipe its own key
                    handleRecipeDelete={handleRecipeDelete}
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