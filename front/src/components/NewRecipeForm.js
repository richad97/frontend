import React from 'react';

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
                placeholder="instructions"
                value={props.values.instructions}
                name="instructions"
                onChange={handleChange}
                /><br/>
            </label>
            <label><br/>category: 
                <input
                placeholder="category"
                value={props.values.category}
                name="category"
                onChange={handleChange}
                /><br/>
            </label>
            <label><br/>Upload an Image: 
                <input
                type="file"
                value={props.values.recipeImg}
                name="recipeImg"
                onChange={handleChange}
                /><br/>
            </label>
            
            <label>Public
                <input
                type="radio"
                name="privacy"
                value="public"
                onChange={handleChange}
                checked={props.values.privacy === "public"}
                />
            </label>
            <label>Private
                <input
                type="radio"
                name="privacy"
                value="private"
                onChange={handleChange}
                checked={props.values.privacy === "private"}
                />
            </label>
            <input type="submit" value="Submit Recipe"/>
        </form>
    )
}
export default NewRecipeForm