import React from 'react';
import style from "../recipe.module.css";

export default function Details({ingredients, showInfo}){
    return(
        <div>
            {showInfo ?
                ingredients.map((ingredient, i) => {
                    return <ul className={style.list} key={i}>
                        <li className={style.ingredient}>{ingredient.amount.metric.value} {ingredient.amount.metric.unit} {ingredient.name}</li>
                    </ul>
                })
                : null}
        </div>
    )
};