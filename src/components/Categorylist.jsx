import React, { Component } from 'react'
import { Badge, ListGroup, ListGroupItem } from 'reactstrap'

export default class Categorylist extends Component {

    render() {
        return (
            <>
                <Badge className='mb-1' color="danger" style={{ width: '100%' }}>
                    <h1>Categorylist</h1></Badge>
                <ListGroup>
                    {this.props.categories.map(category => {
                        return <ListGroupItem key={category.id} active={category.categoryName === this.props.currentCategory}
                            onClick={() => this.props.changeCategory(category)}>
                            {category.categoryName}</ListGroupItem>
                    })}
                </ListGroup>
                <h2>{this.props.currentCategory}</h2>
            </>
        )
    }
}

