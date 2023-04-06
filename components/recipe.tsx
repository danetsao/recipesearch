import React from "react";
import styles from "../styles/recipe.module.css";

interface RecipesProps {
  prompt: any;
  recipeList: any;
  onBack: any;
}

const Recipe: React.FC<RecipesProps> = (props) => {
  function makeIngredientList(CurList: []) {
    let res = [];
    for (let i = 0; i < CurList.length; i++) {
      let cur = "";
      cur += CurList[i]["amount"] + " ";
      cur += CurList[i]["originalName"];
      res[i] = <li className={styles["ingredient-item"]}>{cur}</li>;
    }
    return res;
  }

  function makeList(JsonList: []) {
    if (JsonList.length <= 1) {
      return (
        <div>
          Please try again, the input is invalid or the API has reached its
          daily limit.
        </div>
      );
    }
    let res = [];
    for (let i = 0; i < 4; i++) {
      let curJsonRecipe = JsonList[i];
      const JsonIngredientList = curJsonRecipe["missedIngredients"];
      const IngredientList = makeIngredientList(JsonIngredientList);
      let cur = (
        <li className={styles["recipe-item"]}>
          <div>
            <h1 className={styles["recipe-title"]}>{curJsonRecipe["title"]}</h1>
            <p>Ingredients:</p>
            <ul className={styles["ingredient-list"]}>{IngredientList}</ul>
            <img className={styles["recipe-image"]} src={curJsonRecipe["image"]} />
          </div>
        </li>
      );
      res[i] = cur;
    }
    return res;
  }

  const rList = props.recipeList.results;
  const finalList = makeList(rList);

  return (
    <div className={styles["recipe-container"]}>
      <h1 className={styles["recipe-heading"]}>Recipes for {props.prompt}</h1>
      <ul className={styles["recipe-list"]}>{finalList}</ul>
      <button onClick={() => props.onBack(false)}>Back</button>
    </div>
  );
};

export default Recipe;
