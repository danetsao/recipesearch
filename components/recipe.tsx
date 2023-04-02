import React from "react";

interface RecipesProps {
    recipes: any;
}

const Recipe: React.FC<RecipesProps> = (props) => {
    const constructRecipes = (listRecipes: []) => {
        return;
        //here we will construct the recipes as tsx elements and return them to be rendered
    };
    
    let r = (
        <div>
            <p>Name:</p>
        </div>
        );
    return (
        <div>
            <div>
                Recipes:
            </div>
            {r}
            {r}
        </div>
    );
};

export default Recipe;