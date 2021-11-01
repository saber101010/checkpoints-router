import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './component/NavBar';
import Add from './component/AddMovie';
import { useState } from 'react';
import List from './component/MovieList';
import {BrowserRouter,Route,Switch}from 'react-router-dom';
import Des from './component/Description';

function App() {
  

    const [movies,setMovies]=useState([

      {
        title:"Bloodshoot",
        description:"Ray Garrison, a slain soldier, is re-animated with superpowers.",
        posterURL:"https://i.pinimg.com/564x/ff/24/28/ff242839a6bfa703283e058566dda176.jpg",
        rating:"3",
        id:1,
        trailer:"https://www.youtube.com/embed/vOUVVDWdXbo"
          },
          {
            title:"Fast & Furious",
            description:"Lawman Luke Hobbs and outcast Deckard Shaw form an unlikely alliance when a cyber-genetically enhanced villain threatens the future of humanity.",
            posterURL:"https://i.pinimg.com/564x/c6/bd/47/c6bd47fa0260660fce0d74702aa64b98.jpg",
            rating:"3",
            id:2,
            trailer:"https://www.youtube.com/embed/FUK2kdPsBws"
              },
           {
          title:"Thor",
           description:"The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.",
           posterURL:"https://i.pinimg.com/564x/71/93/6b/71936bfeec95db7124c045cee3475707.jpg",
           rating:"4",
           id:3,
          trailer:"https://www.youtube.com/embed/npvJ9FTgZbM"
           },
           {
          title:"Jungle Cruise",
          description:"Based on Disneyland's theme park ride where a small riverboat takes a group of travelers through a jungle filled with dangerous animals and reptiles but with a supernatural element.",
          posterURL:"https://i.pinimg.com/564x/f3/c7/a9/f3c7a9f30cf48130b73e3e2941333815.jpg",
          rating:"4",
          id:4,
          trailer:"https://www.youtube.com/embed/tvTIzMyLFSg"
          },
          {
          title:"Free Guy",
          description:"A bank teller discovers that he's actually an NPC inside a brutal, open world video game..",
          posterURL:"https://i.pinimg.com/564x/ec/0d/77/ec0d77592c80e22e1a862eb2c2d2ef89.jpg",
          rating:"4",
          id:5,
          trailer:"https://www.youtube.com/embed/X2m-08cOAbc"
          }
  ])
 const [searchTitle,setsearcheTitle]=useState("");
 const [rating,setRating]=useState(1);

  const addMovie=(movie)=>{setMovies([...movies,movie])};
 
  const getSearch=(title)=>{
setsearcheTitle(title);
  }
  const getRating=(rate)=>{setRating(rate)};
  return (
    <BrowserRouter>


    <div className="App">
     <NavBar  getSearch={getSearch} getRating={getRating}/>

     <Add addMovie={addMovie} />

     <Switch>
    <Route exact path="/" > <List   movies={movies} searchTitle={searchTitle} rating={rating}/></Route>
    <Route path='/description/:movieid' render={(props)=><Des movies={movies} {...props}/>}
       />
     </Switch>

  
    </div>

    </BrowserRouter>
  );
}

export default App;
