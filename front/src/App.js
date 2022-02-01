import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import NewRecipeForm from './components/NewRecipeForm';

function App() {
 
  const [recipes, setRecipes] = useState([]);
  const [values, setValues] = useState({ recipeTitle:'', author: '', ingredients: '',instructions:'', category:'', recipeImg:'', public:''})

  const onSubmit=()=>{
    setRecipes([values, ...recipes]);
    setValues({recipeTitle:'', author: '', ingredients: '', instructions:'', category:'', recipeImg:'', public:''});
  }

  const onChange = (name, value)=>{
    setValues({ ...values, [name]: value});
  }

  return (
    <div className="App">
      <h1>Secret Family Recipes</h1>
      <div className='Container'>
      <NewRecipeForm
        values={values}
        change={onChange}
        submit={onSubmit}
      />
      {recipes.map((recipes, idx)=>{
        return (
           //..\/ Will connect to API when possible
          <div key={idx}>
            {recipes.recipeTitle}, {recipes.author}, {recipes.ingredients}, {recipes.instructions}, {recipes.category}, {recipes.recipeImg}, {recipes.public}
            </div>
        )
      })}
      </div>
    </div>
  );
}

export default App;
