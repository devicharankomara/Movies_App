

import { useState } from "react";
import Movie from "./componenets/movie"
import Infopage from "./componenets/infopage";


function App() {
 const API_KEY="fcaa3b4f"
  const [search,setsearch]=useState()
  const [timeoutid,settimeoutid]=useState()
  const[movielist,setmovielist]=useState([])
  const[selectedmovie,setselectedmovie]=useState()

  const fetchdata=  async(searchString)=> {
    const response= await fetch(`https://www.omdbapi.com/?s=${searchString}&apikey=fcaa3b4f`)
    const users= await response.json();
    console.log(users)
    setmovielist(users.Search)
    setselectedmovie(null)
  }

  const updatesearch=(event)=>{
    clearTimeout(timeoutid)
    setsearch(event.target.value)
    const timeout=setTimeout(()=>fetchdata(event.target.value),500)
    settimeoutid(timeout)
  }
  return (
    <div id="container ">
  <div id="header">
  <div id="name">
  <img id="siteicon" src="film.png" />
  React Movies App
  </div>

  <div id="searchbar">
  <img src="search.png"/>
  <input 
  id="sinput" 
  placeHolder="Search Your Favorite Movies"
  value={search}
  onChange={updatesearch}
  >
  </input>
  </div>

  
  </div>
 
  {selectedmovie && <Infopage movieid={selectedmovie}/>}
  
  <div id="movielistcontainer">
  {movielist?.length? 
  movielist.map((movie,index)=><Movie movie={movie} key={index} setselectedmovie={setselectedmovie}/>):
  <img id="placeholder" src="newicon.png" />
}


  </div>
  <div id="footer">

  </div>
    </div>
   
  );
}

export default App;
