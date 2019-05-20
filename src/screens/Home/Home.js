import React, { Component } from 'react'
import Content from './components/Content'
import Side from './components/Side'
import {Container,
        Row,
        Col} from 'react-bootstrap'

export class Home extends Component {
  render() {
    return (
        <Container>
            <Row className='Content'>
                <Col sm={8}>
                    <Content />
                </Col>
                <Col sm={4}>
                    <Side />
                </Col>
            </Row>
        </Container>
    )
  }
}

export default Home
