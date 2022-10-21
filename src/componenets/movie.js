import React from "react"

function Movie(props){
    const{Title,Year,imdbID,Type,Poster}=props.movie;


    return(<div
         onClick={()=>{
            props.setselectedmovie(imdbID);
            window.scrollTo({top:0,behavior:"smooth"})
        }}
          id= "moviecontainer">
    
    <img id="posterimg" src= {Poster}/>
    <div>{Title}</div>
    <div id="mdes"> 
    <div> Year: {Year} </div>
    <div>imdb:{imdbID}</div>
        </div>
        </div>)
}

export default Movie