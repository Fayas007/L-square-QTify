import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Carousel from '../Carousel/Carousel';


import { useState } from 'react';
import { useEffect } from 'react';


const TabComponent=({genres,Albums})=>{

    

    const [songs,setSongs]=useState(Albums)
    const [value,setValue]=useState(0);
    const [firstLoad,setFirstLoad]=useState(true)



    const search=(tabNumber)=>{

      if(tabNumber==0){
        setSongs(Albums);
        
      }else{
        let selectedGenre=genres[tabNumber-1].key
        let songList=Albums.filter((ele)=>ele.genre.key==selectedGenre);
        setSongs(songList);
      } 
      
    }
    
    

    const handleChange=(event,value)=>{
        setFirstLoad(false);
        setValue(value);
        search(value);
    }



    return (
        
          <><Tabs value={value} onChange={handleChange} sx={{backgroundColor:"black"}}>
            <Tab key="all" sx={{color:"white"}} label="All"/>
            {genres.map((ele) => (
              <Tab key={ele.key} sx={{color:"white"}} label={ele.label}/>
            ))}
          </Tabs>
          <Carousel Albums={songs}/>
          { firstLoad && <Carousel Albums={Albums}/>}
          </>
          
      );
           
    }
    
  

export default TabComponent;
  


