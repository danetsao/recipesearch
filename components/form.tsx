import React from "react";

interface FormProps {
    characterLimit: any;
    prompt: any;
    setPrompt: any;
    onSubmit: any;
}

const Form: React.FC<FormProps> = (props) => {

    const updatePromptValue = (text: string) => {
        if (text.length <= props.characterLimit) {
          props.setPrompt(text);
          console.log(text);
        }
    }
    return (
        <div>
            <p>Please enter you food you want recipe for</p>
            <input
            type="text"
            placeholder="pasta"
            onChange={(e) => updatePromptValue(e.currentTarget.value)}
            ></input>
            <button
            onClick={()=> props.onSubmit(props.prompt)}
            >Search</button>
        </div>
    );
};

export default Form;