import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default class Categorylist extends Component {
    state = {
        categories: [
            {categoryId: 1, categoryName: 'Beverage'},
            {categoryId: 1, categoryName: 'Condiments'},
            {categoryId: 1, categoryName: 'Meals'}
        ],
        currentCategory: ''
    }

    changeCategory = (category) => {
        this.setState({currentCategory: category.categoryName})
    }

  render() {
    return (
      <>
      <h1>Categorylist</h1>
      <ListGroup>
        {this.state.categories.map(category => {
            return <ListGroupItem active={category.categoryName === this.state.currentCategory} onClick={() => this.changeCategory(category)}>
                {category.categoryName}</ListGroupItem>
        })}
      </ListGroup>
      <h2>{this.state.currentCategory}</h2>
      </>
    )
  }
}

