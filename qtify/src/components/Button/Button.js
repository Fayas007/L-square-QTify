import React from "react";
import styles from "./Button.module.css"

function Button(props){
    return <button className={styles.button}><h3 className={styles.text}>{props.text}</h3></button>
}

export default Button;