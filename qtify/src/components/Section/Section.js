import React from "react";
import MusicCard from "../Card/Card";
import styles from "./Section.module.css"



const Section= ({Albums})=>{
    console.log(Albums)

    if(Albums.length){
      return <div className={styles.grid}>
      {Albums.map(ele =>  {return <div className={styles.grid_items}><MusicCard obj={ele}/></div>}  )}
       </div>
    }
      
    

     return <div>Hi</div>  }

     
  


export default Section;