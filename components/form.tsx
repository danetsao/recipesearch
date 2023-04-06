import React from "react";
import styles from "../styles/form.module.css"

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
        <div className={styles.formContainer}>
            <p className={styles.formLabel}>Please enter you food you want recipe for</p>
            <input
            type="text"
            placeholder="pasta"
            className={styles.formInput}
            onChange={(e) => updatePromptValue(e.currentTarget.value)}
            ></input>
            <button
            className={styles.formButton}
            onClick={()=> props.onSubmit(props.prompt)}
            >Search</button>
        </div>
    );
};

export default Form;