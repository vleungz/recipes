import React, {useState, useContext} from 'react';
import Details from './recipeDetails';
import style from "../recipe.module.css";
import {RecipeContext} from '../context/index'

export default function Recipe ({ title, id }){
    const [ingredients, setIngredients] = useState([]);
    const [showInfo, setShowInfo] = useState(false);
    const appContext = useContext(RecipeContext);
    const {APP_KEY} = appContext;

    const handleShowInfo = async (e) => {
        const {id} = e.target.dataset;
        fetch(`https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${APP_KEY}`)
            .then(response => response.json())
            .then(data => {
                setIngredients(data.ingredients);
            })
        setShowInfo(!showInfo);
    }

    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <div>
                <img src={`https://spoonacular.com/recipeImages/${id}-240x150.jpg`} alt=""/>
            </div>
            <div>
                <button className={style.details} type="button" onClick={handleShowInfo} data-id={id} value={id}>
                    View Ingredients
                </button>
                <Details
                    key ={id}
                    ingredients={ingredients}
                    showInfo={showInfo}
                />
            </div>
        </div>
    )
};