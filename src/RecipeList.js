import React, {Component} from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import './RecipeList.css';

class RecipeList extends Component {
    static defaultProps = {
        recipes: [
            {
                title: "Spaghetti",
                instructions: "Heat sauce and poor over cooked pasta",
                ingredients: ["pasta", "8 cups water", "1 can sauce"],
                img: "spaghetti.jpg"
            }, 
            {
                title: "Milkshake",
                instructions: "Combine ice cream and milk. Blend.",
                ingredients: ["2 Scoops Ice cream", "8 oz milk"],
                img: "milkshake.jpg"
            }, 
            {
                title: "PB Toast",
                instructions: "Toast bread. Spread peanut butter on and sprinkle cinnamon",
                ingredients: ["Slice of bread", "Peanut Butter", "Cinnamon"],
                img: "pbtoast.jpg"
            }, 
        ]
    }
    
    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.object).isRequired
    }
    
    render () {
        const recipes = this.props.recipes.map((r, index) => (
            <Recipe key={index} {...r}/>    
        ));
        
        return (
            <div className = 'recipe-list'>
                {recipes}
            </div>
        )
            
    }
}

export default RecipeList;