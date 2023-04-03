import React from "react";

interface RecipesProps {
    prompt: any;
    recipeList: any;
    onBack: any;
}

const Recipe: React.FC<RecipesProps> = (props) => {
    function makeList(JsonList: []) {
        let res = [];
        for (let i = 0; i < 3; i++) {
            let curJsonRecipe = JsonList[i];
            let cur = (
                <li>
                    <div>
                        <h1>{curJsonRecipe["title"]}</h1>    
                        <p>Ingredients: {curJsonRecipe["title"]}</p>    
                        <img src={curJsonRecipe["image"]}/>
                    </div>
                </li>
            ) 
            res[i] = cur;
        }
        return res;
    }

    const rList = props.recipeList.results;
    console.log(rList);
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