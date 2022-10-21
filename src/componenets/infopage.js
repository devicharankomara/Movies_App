import React, { useEffect, useState } from "react";


function Infopage(props){
    const[movieinfo,setmovieinfo]=useState([]);
    const { movieid }= props;
    console.log(movieid)
   useEffect(()=>{
          fetch(`https://www.omdbapi.com/?i=${movieid}&apikey=fcaa3b4f`,
                ).then((response)=>response.json()
                ).then((data)=>setmovieinfo(data));
            },[movieid]);
       const link = `https://www.youtube.com/results?search_query=${movieinfo?.Title}+official+trailer`    
  
    return(
        <div id="movieinfodiv">
        {movieinfo? <>
        <img id="infoposter" src={movieinfo?.Poster}/>
        <div  id="description">
        <div>Title: <span class="color">{movieinfo?.Title}</span></div>
        <div>IMDB: <span class="color">{movieinfo?.imdbRating}</span></div>
        <div>Plot: <span class="color">{movieinfo?.Plot}</span></div>
        <div>Released on: <span class="color">{movieinfo?.Released}</span></div>
        <div>RunTime: <span class="color">{movieinfo?.Runtime}</span></div>
        <div>Genre:<span class="color">{movieinfo?.Genre}</span></div>
        <div>Languages: <span class="color">{movieinfo?.Language}</span></div>
        <div>Actors: <span class="color">{movieinfo?.Actors}</span></div>
        <div>Director: <span class="color">{movieinfo?.Director}</span></div>
        <div>Rated: <span class="color">{movieinfo?.Rated}</span></div>
        <div>Awards: <span class="color">{movieinfo?.Awards}</span></div>
        <div ><a id="trailer" target="_blank" href={link}> Trailer </a></div>
        </div> 
        </>:"Loading..."}
            
            

            
        </div>
    )
}
export default Infopage