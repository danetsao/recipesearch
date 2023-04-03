import React from "react";

interface ListProps {
    list: any;
}


const ListOfRecipeComponenets: React.FC<RecipesProps> = (props) => {
    const [ListOfRecipeComponenets, makeListOfRecipeComponents] = React.useStae([]);

    
    const rList = props.recipeList.results;
    console.log(rList);

    return (
      <div>
        <p>Recipe:</p>
      </div>
    );
};

export default ListOfRecipeComponents;