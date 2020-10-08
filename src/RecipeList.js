import React from 'react'
import Recipe from './Recipe'
export default function RecipeList({ recipes }) {
    return (
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
    )
}
