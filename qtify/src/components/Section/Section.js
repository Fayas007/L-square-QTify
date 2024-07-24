import React from "react";
import MusicCard from "../Card/Card";
import styles from "./Section.module.css"
import Button from "../Button/Button";
import { useState } from "react";
import Carousel from "../Carousel/Carousel";



const Section= ({Albums,name})=>{
    console.log(Albums)

    const [value,setValue]=useState(true)
    const handleCollapse=()=>{
      console.log("collapse clicked");
      setValue(false);
    }

    const handleShowall=()=>{
      console.log("Showall clicked");
      setValue(true);
    }



    if(Albums.length && value){
      return <><div className={styles.header}>
      <h2>{name}</h2>
      <div onClick={()=>{handleCollapse()}}><Button text="Collapse"/></div>
    </div><div className={styles.grid}>
        
      {Albums.map(ele =>  {return <div className={styles.grid_items} key={ele.id}><MusicCard obj={ele}/></div>}  )}
       </div></>
    }

    else if(Albums.length && !value){return <><div className={styles.header}>
    <h2>{name}</h2>
    <div onClick={()=>{handleShowall()}}><Button text="show all"/></div>
  </div><Carousel Albums={Albums}/></>}
      
     return <div>Hi</div>  }

     
  


export default Section;