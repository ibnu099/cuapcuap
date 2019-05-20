import React, { Component } from 'react'
import {Card, ListGroup} from 'react-bootstrap'

export class Side extends Component {
  render() {
    return (
        <Card style={{ width: '18rem' }} bg="primary">
            <Card.Header>Trends For You</Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
        </Card>
    )
  }
}

export default Side
