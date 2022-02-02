import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import NewRecipeForm from './components/NewRecipeForm';
import Intro from './components/Intro';
import Login from './components/Login';

function App() {
 
  const [recipes, setRecipes] = useState([]);
  const [values, setValues] = useState({ recipeTitle:'', author: '', ingredients: '',instructions:'', category:'', recipeImg:'', privacy:''})

  const onSubmit=()=>{
    setRecipes([values, ...recipes]);
    setValues({recipeTitle:'', author: '', ingredients: '', instructions:'', category:'', recipeImg:'', privacy:''});
  }

  const onChange = (name, value)=>{
    setValues({ ...values, [name]: value});
  }

  return (
    <div className="App">
      <Intro/>
      <div className='Container'>
      <NewRecipeForm
        values={values}
        change={onChange}
        submit={onSubmit}
      />
      {recipes.map((recipes, idx)=>{
        return (
           //..\/ Will connect to API when possible with backend
          <div key={idx}>
            {recipes.recipeTitle}, {recipes.author}, {recipes.ingredients}, {recipes.instructions}, {recipes.category}, {recipes.recipeImg}, {recipes.privacy}, <img src={recipes.recipeImg}/>
            </div>
        )
      })}
      </div>
      <Login />
    </div>
  );
}

export default App;
