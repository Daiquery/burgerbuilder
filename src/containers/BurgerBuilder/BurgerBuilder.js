import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    }

    addIngredientHandler = ingredient => {
        let { ingredients, totalPrice } = this.state;
        const ingredientPrice = INGREDIENT_PRICES[ingredient];

        totalPrice = totalPrice + ingredientPrice;

        ingredients[ingredient] = ingredients[ingredient] + 1; 
     
        this.setState({
            totalPrice,
            ingredients
        });
    }

    removeIngredientHandler = (ingredient) => {
        let { ingredients, totalPrice } = this.state;
        const ingredientPrice = INGREDIENT_PRICES[ingredient];
        
        if ( ingredients[ingredient] === 0){
             return; 
            }

        totalPrice = totalPrice - ingredientPrice;

        ingredients[ingredient] = ingredients[ingredient] - 1; 
     
        this.setState({
            totalPrice,
            ingredients
        });
    }

    render () {
        // const disabledInfo = {
        //     ...this.state.ingredients
        // };
        // for (let key in disabledInfo) {
        //     disabledInfo[key] = disabledInfo[key] <= 0  
        // }
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                ingredientAdded={this.addIngredientHandler}
                ingredientRemoved={this.removeIngredientHandler} />
            </Aux>
        )
    }
}


export default BurgerBuilder;
