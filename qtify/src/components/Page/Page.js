import React from "react";
import Navbar from "../Navbar/Navbar";
import Section from "../Section/Section";
import Hero from "../Hero/Hero";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";




const Page=()=>{

    const [TopAlbums,setTopAlbums]=useState([]);

    const topAlbums=async()=>{

        let url="https://qtify-backend-labs.crio.do/albums/top"
        
        try{
            let response=await axios.get(url);
            console.log(response.data);
            setTopAlbums(response.data);
            return response.data;
        }catch(error){
            console.log(error,"custom error");
            return [];
        }
    }

    useEffect(()=>{
        
        topAlbums();
         
    },[])





    return <div>
        <Navbar/>
        <Hero/>
        <Section Albums={TopAlbums}/>
        

    </div>
}

export default Page;

    
      