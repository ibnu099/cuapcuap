import React, { Component } from 'react'
import {Card, Form, FormControl, Button, Row, Col} from 'react-bootstrap'

export class Ngecuap extends Component {
  render() {
    return (
      <Card.Body>
        <Form>
        <Row>
            <Col sm={10}>
                <FormControl type="text" placeholder="CuapCuap" />
            </Col>
            <Col sm={2}>
                <Button variant="outline-primary">Cuap</Button>
            </Col>
        </Row>
        </Form>
      </Card.Body> 
    )
  }
}

export default Ngecuap
