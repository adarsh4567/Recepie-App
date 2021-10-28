import React from "react";
import style from "./recipe.module.css"

const Recipe = (props) => {
    return(
        <div className={style.recipes}>
            <h1>{props.title}</h1>
            <ul>
                {props.ingredients.map(ingredient => {
                   return(<li> {ingredient.text}</li>);
                })}
            </ul>
            <img src={props.image} alt=""></img>
        </div>
    );
};

export default Recipe;