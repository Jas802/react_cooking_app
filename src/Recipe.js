import React from 'react'
import IngredientList from './IngredientList';

export default function Recipe(props) { //call all of props
    const {
        name,
        cookTime, 
        servings,
        instructions,
        ingredients
    } = props //sets all props
    return ( // renders Recipe component
        <div>
            <div>
                <h3>{ name }</h3>
                <div>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
            <div>
                <span>Cook Time:</span>
                <span>{ cookTime }</span>
            </div>
            <div>
                <span>Servings:</span>
                <span>{ servings }</span> 
            </div>
            <div>
                <span>Instructions:</span>
                <div>{ instructions }</div>
            </div>
            <div>
                <span>Ingredients:</span>
                <div>
                    <IngredientList ingredients={ingredients} />
                </div>
            </div>
        </div>
    )
}
