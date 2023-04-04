import React from "react";
import Form from "./form";
import Recipe from "./recipe";


const RecipeSearch = () => {
    //Use state, variables and functions to set them
    //Of type x, useState(x)
    const [Recipes, setRecipes] = React.useState({});
    const [prompt, setPrompt] = React.useState("");
    const [HasResult, setHasResult] = React.useState(false);
    
    const APIURL = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=';
    //deafult for know, will input functionality for this later
    const UserInputFirstHalf = '&query=';
    const UserInputSecondHalf = '&fillIngredients=true';
    
    const APIKEY = "9c86fee9c00b401e97accb0ced5dbc59";
    
    const onResult = (data: any) => {
        console.log(data);
        setRecipes(data);
        setHasResult(true);
        console.log("We have a result!");
        //setIsLoading(false);
      };
    const onSubmit = (data: any) => {
        fetch(APIURL+APIKEY+UserInputFirstHalf+data+UserInputSecondHalf)
        .then((res) => res.json())
        .then(onResult); // call onresult funtion, take in data of json from api and sets our result use state to this data
        console.log("Searching for: "+data);
    }

    const onBack = () => {
        setHasResult(false);
        console.log("Going back to search page");
    }
    const Footer = (
        <div>
            <h2>Project by <a href="https://github.com/danetsao">Dane</a> | 2023</h2>
        </div>
    );

    let displayedElement = null;
    if (HasResult) {
        displayedElement = (
          <Recipe
          recipeList={Recipes}
          onBack= {onBack}
          prompt= {prompt}
          />
        );
      } 
      else {
        displayedElement = (
          <Form
            //Set props for form
            prompt= {prompt}
            setPrompt= {setPrompt}
            characterLimit={20}
            onSubmit= {onSubmit}
          />
        );
      }
    return (
        <div>
            {displayedElement}
            {Footer}
        </div>
    );
};

export default RecipeSearch;