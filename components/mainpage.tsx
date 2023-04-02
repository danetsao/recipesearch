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
    const UserInput = '&query=ice-cream&addRecipeInformation=true';
    
    const APIKEY = "9c86fee9c00b401e97accb0ced5dbc59";
    
    const onResult = (data: any) => {
        setRecipes(data.results);
        setHasResult(true);
        console.log("We have a result!");
        //setIsLoading(false);
      };
    const onSubmit = (data: any) => {
        fetch(APIURL+APIKEY+UserInput)
        .then((res) => res.json())
        .then(onResult) // call onresult funtion, take in data of json from api and sets our result use state to this data
        .then(console.log);
        console.log("Searching for: "+data)
    }
    let displayedElement = null;
    if (HasResult) {
        displayedElement = (
          <Recipe
          recipes={Recipe}
          />
        );
      } 
      else {
        displayedElement = (
          <Form
            //Set props for form
            prompt= {prompt}
            setPrompt= {setPrompt}
            characterLimit={10}
            onSubmit= {onSubmit}
          />
        );
      }
    return (
        <div>
            {displayedElement}
        </div>
    );
};

export default RecipeSearch;