import React from "react";
import Navbar from "../Navbar/Navbar";
import Section from "../Section/Section";
import Hero from "../Hero/Hero";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";





const Page=()=>{

    const [TopAlbums,setTopAlbums]=useState([]);
    const [NewAlbums,setNewAlbums]=useState([]);

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


    const newAlbums=async()=>{

        let url="https://qtify-backend-labs.crio.do/albums/new"
        
        try{
            let response=await axios.get(url);
            console.log(response.data);
            setNewAlbums(response.data);
            return response.data;
        }catch(error){
            console.log(error,"custom error");
            return [];
        }
    }

    useEffect(()=>{
        
        topAlbums();
        newAlbums();
         
    },[])





    return <div>
        <Navbar/>
        <Hero/>
        <Section Albums={TopAlbums} name="TopAlbums"/>
        <Section Albums={NewAlbums} name="NewAlbums"/>
        

    </div>
}

export default Page;

    
      