import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
// import cardimage from "../../assets/cardimage.jpg"



 const MusicCard= ({obj})=>{
  
    let cardObj={...obj};

    return <div> <Card sx={{borderRadius:5}}>
    <CardMedia
      sx={{ height: 200}}
      image={cardObj.image}
      
    />
    <CardContent>
    <Chip label={cardObj.follows+" follows"} sx={{backgroundColor:"black",color:"white"}}/>
    </CardContent>
    
    </Card>
    <div>{cardObj.title}</div>
    </div>
  
}


export default MusicCard;
