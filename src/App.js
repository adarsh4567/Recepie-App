import React,{useEffect, useState} from 'react';
import './App.css';
import Recipe from "./Recipe"
import Image from "./poc.png";
import "./index.css";


const App = () => {
  const App_Id = "6bc83154";
  const App_Key= "19cbc18a034a5aeaaece9ea19cd90136";

  const [recipes,setRecipes] = useState([]);

  const [search,setSearch] = useState("");

  const [query,setQuery] = useState("");
  

  useEffect(() => {
    getData();

  },[query]);

  const updateSearch = (event) => {
    setSearch(event.target.value);
  }

  const getSearch = (event) => {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  }

  const getData = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_Id}&app_key=${App_Key}`);
    const data = await response.json();
    setRecipes(data.hits);
   
  }
  return(
    <div className="App">
    <div className="image">
    <img src={Image} alt="non" className="logo"></img>
    </div>
     <form className="search-form" onSubmit={getSearch}>
       <input type="text" className="search-bar" placeholder="Search Here..." value={search} onChange={updateSearch}></input>
       <button type="submit" className="search-button">Search</button>
     </form>
     <div className="recipes">
     {recipes.map(recipe => {
       return (<Recipe
        key={recipe.recipe.label}
        title={recipe.recipe.label}
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}  
        />);
     })}
     </div>
    </div>
  );
}

export default App;