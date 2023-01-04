import React, { Component } from 'react'
import Navi from "./components/Navi";
import Categorylist from "./components/Categorylist";
import Productlist from "./components/Productlist";
import { Col, Container, Row } from "reactstrap";


export default class App extends Component {
  state = {
    categories: [],
    currentCategory: '',
    products: []
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName })
    this.getProducts(category.id)
  }

  getCategories = () => {

    fetch('http://localhost:3000/categories').then(response => response.json())
      .then(responseData => this.setState({ categories: responseData }))

  }
  componentDidMount() {
    this.getCategories()
    this.getProducts()
  }

  getProducts = (categoryId) => {
    let url = 'http://localhost:3000/products'
    if (categoryId) {
      url += '?categoryId=' + categoryId
    }
    fetch(url).then(response => response.json())
      .then(responseData => this.setState({ products: responseData }))
  }

  render() {
    return (
      <Container>
        <Row className="mb-2">
          <Navi color='dark' dark={true} expand='sm' />
        </Row>
        <Row>
          <Col xs="4">
            <Categorylist categories={this.state.categories} currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} />
          </Col>
          <Col xs="8">
            <Productlist products={this.state.products} />
          </Col>
        </Row>
      </Container>
    )
  }
}


