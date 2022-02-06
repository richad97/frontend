import React, {useState, useEffect} from 'react';
import axios from 'axios';

class Intro extends React.Component {

    render(){
        return(
            //will need to refactor for use with our api for images
            <div>
               <header id="header">
				    <div className="inner">
					    <a href="#" className="image avatar"><img src="images/avatar.jpg" alt="" /></a>
					    <h1><strong>Secret Family Recipes</strong>, your place for <br />
					generation after generation of tradition<br /></h1>
				        </div>
			    </header>
                <section id="one">
					<header className="major">
						<h2>Anyone can go out and buy a cookbook these days,<br />
								but you want a place to store all your<br /> 
								secret family recipes,<br/>
								handed down from generation to generation
                        </h2>
					</header>
				    <p>The little cards grandma wrote her recipes on in her beautiful cursive are getting lost or are hard to read. You need somewhere secure to keep my recipes with me forever!</p>
					<ul className="actions">
						<li><a href="#" className="button">Learn More</a></li>
					</ul>
				</section> 
            </div>
        )
    }
}
export default Intro