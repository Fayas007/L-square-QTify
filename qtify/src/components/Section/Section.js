import React from "react";
import MusicCard from "../Card/Card";
import styles from "./Section.module.css"
import Button from "../Button/Button";
import { useState } from "react";
import Carousel from "../Carousel/Carousel";
import TabComponent from "../Tab/Tab";



const Section= (props)=>{
    // console.log(props.Albums)

    const [value,setValue]=useState(true)

    const handleCollapse=()=>{
      // console.log("collapse clicked");
      setValue(!value);
    }

  

    if(props.Albums.length ){
      return <><div className={styles.header}>
      <h2>{props.name}</h2>
      <div onClick={()=>{handleCollapse()}}><Button text={value?"Collapse":"Show all"}/></div></div>
      {(value)?<div className={styles.grid}>
        {props.Albums.map(ele =>  {return <div className={styles.grid_items} key={ele.id}><MusicCard obj={ele}/></div>}  )}
       </div>:<Carousel Albums={props.Albums}/>}
       </> }

    

    if(props.songs && props.genres){
      console.log("genres from section ",props.genres)
      return <><div className={styles.header}>
      <h2>{props.name}</h2></div>
      <TabComponent genres={props.genres} Albums={props.songs}/>
       </>
    }
      
     return <div>Hi</div>  }

     
  


export default Section;