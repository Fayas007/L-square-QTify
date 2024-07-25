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
    const [Songs,SetSongs]=useState([]);
    const [genres,setGenres]=useState([]);
    

    const topAlbums=async()=>{

        let url="https://qtify-backend-labs.crio.do/albums/top"
        
        try{
            let response=await axios.get(url);
            
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
            
            setNewAlbums(response.data);
            return response.data;
        }catch(error){
            console.log(error,"custom error");
            return [];
        }
    }

    const allSongs=async()=>{

        let url="https://qtify-backend-labs.crio.do/songs"
        
        try{
            let response=await axios.get(url);
           
            SetSongs(response.data);
            return response.data;
        }catch(error){
            console.log(error,"custom error");
            return [];
        }
    }

    

    const allGenre=async()=>{

        let url="https://qtify-backend-labs.crio.do/genres"
        
        try{
            let response=await axios.get(url);
            // console.log("from genre function",response.data)
            setGenres(response.data.data);
            return response.data.data;
        }catch(error){
            console.log(error,"custom error");
            return [];
        }
    }

    


    


    useEffect(()=>{
        
        topAlbums();
        newAlbums();
        allSongs();
        allGenre();
         
    },[])





    return <div>
        <Navbar/>
        <Hero/>
        <Section Albums={TopAlbums} name="TopAlbums"/>
        <Section Albums={NewAlbums} name="NewAlbums"/>
        <Section Albums songs={Songs} name="Songs" genres={genres}/>

    </div>
}

export default Page;

    
      