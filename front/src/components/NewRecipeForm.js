import React from 'react';
import axios from 'axios';

const NewRecipeForm = (props) =>{

    const handleChange = evt => {
        const {name, value} = evt.target;
        props.change(name, value);
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        props.submit();
    }

    return (
        
        <form onSubmit={handleSubmit} className="form-align">
            <label>Recipe Title:
            <input
                placeholder="Recipe Title"
                value={props.values.recipeTitle}
                name="recipeTitle"
                onChange={handleChange}
                />
            </label>
            <label><br/>Author:
                <input
                placeholder="author"
                value={props.values.author}
                name="author"
                onChange={handleChange}
                />
            </label>
            <label><br/>ingredients: 
                <input
                placeholder="enter ingredients here..."
                value={props.values.ingredients}
                name="ingredients"
                onChange={handleChange}
                /><br/>
            </label>
            <label><br/>instructions: 
                <input
                placeholder="enter ingredients here..."
                value={props.values.instructions}
                name="instructions"
                onChange={handleChange}
                /><br/>
            </label>
            <label><br/>category: 
                <input
                placeholder="enter ingredients here..."
                value={props.values.category}
                name="category"
                onChange={handleChange}
                /><br/>
            </label>
            <label><br/>Upload an Image: 
                <input
                placeholder="enter ingredients here..."
                value={props.values.recipeImg}
                name="recipeImg"
                onChange={handleChange}
                /><br/>
            </label>
            <label><br/>Privacy: 
                <input
                placeholder="Is this recipe public or private?"
                value={props.values.public}
                name="public"
                onChange={handleChange}
                /><br/>
            </label>
            <input type="submit" value="Submit Recipe"/>
        </form>
    )
}
export default NewRecipeForm