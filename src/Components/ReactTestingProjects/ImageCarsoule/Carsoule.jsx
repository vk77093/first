import { useState } from "react"
const carsouleImages=[
    "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
];
export function Carsoule(){
    
    const[currentImage,SetCurrentImage]=useState(0);
    function NextImage(){
       
        SetCurrentImage(currentImage===carsouleImages.length-1 ? 0:currentImage +1);
        console.log('Next Image Clicked');
    }
    function PreviousImage(){
        
        SetCurrentImage(currentImage===0 ? carsouleImages.length-1 :currentImage -1 );
        console.log('Previous Image Clicked');
    }
    return(
       
      <div className="carousel slide">
  <div className="carousel-inner">
{carsouleImages.map((imgage,index)=>
currentImage===index &&(
    <div key={imgage} className="carousel-item active" >
    <img className="d-block w-100" src={imgage} alt={index+'slide'}/>
  </div>
))}  
  </div>
  <a className="carousel-control-prev" role="button">
    <span className="carousel-control-prev-icon"></span>
    <span className="sr-only" onClick={PreviousImage}>Previous</span>
  </a>
  
  <a className="carousel-control-next" role="button">
    <span className="carousel-control-next-icon"></span>
    <span className="sr-only" onClick={NextImage}>Next</span>
  </a>
</div>
       
    )
}

