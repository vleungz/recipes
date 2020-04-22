import React, {useContext} from 'react';
import Recipe from './recipe';
import Search from './recipeSearch';
import {RecipeContext} from '../context/index'
import '../App.css';

export default function RecipeList(){
    const appContext = useContext(RecipeContext);
    const {recipes} = appContext;

    return(
        <div className="App">
            <Search />
            <div className="recipes">
                {recipes.map(recipe =>(
                    <Recipe
                        key={recipe.id}
                        title ={recipe.title}
                        id = {recipe.id}
                    />
                ))}
            </div>
        </div>
    )
};