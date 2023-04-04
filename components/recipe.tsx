import React from "react";

interface RecipesProps {
    prompt: any;
    recipeList: any;
    onBack: any;
}

const Recipe: React.FC<RecipesProps> = (props) => {
    function makeIngredientList(CurList: []) {
        let res = [];
        for (let i= 0; i < CurList.length; i++) {
            let cur = "";
            cur += CurList[i]["amount"] + " ";
            cur += CurList[i]["originalName"];
            res[i] = (<li>{cur}</li>);
        }
        return res;
    }

    function makeList(JsonList: []) {
        if (JsonList.length <= 1) {
            return (
                <div>
                    Please try again, the input is invalid or the API has reached its daily limit.
                </div>
            );
        }
        let res = [];
        for (let i = 0; i < 4; i++) {
            let curJsonRecipe = JsonList[i];
            const JsonIngredientList = curJsonRecipe["missedIngredients"];
            const IngredientList = makeIngredientList(JsonIngredientList);
            let cur = (
                <li>
                    <div>
                        <h1>{curJsonRecipe["title"]}</h1>    
                        <p>Ingredients:</p> 
                        <ul>{IngredientList}</ul>       
                        <img src={curJsonRecipe["image"]}/>
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
      <div>
        <h1>Recipes for {props.prompt}</h1>
        <ul>{finalList}</ul>
        <button
            onClick={()=> props.onBack(false)}
            >Back</button>
      </div>
    );
};

export default Recipe;