import React from "react";
import MusicCard from "../Card/Card";
import styles from "./Section.module.css"
import Button from "../Button/Button";



const Section= ({Albums,name})=>{
    console.log(Albums)

    if(Albums.length){
      return <><div className={styles.header}>
      <h2>{name}</h2>
      <Button text="Collapse"/>
    </div><div className={styles.grid}>
        
      {Albums.map(ele =>  {return <div className={styles.grid_items}><MusicCard obj={ele}/></div>}  )}
       </div></>
    }
      
    

     return <div>Hi</div>  }

     
  


export default Section;