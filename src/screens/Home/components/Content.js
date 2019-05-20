import React, { Component, Fragment } from 'react'
import Ngecuap from './Ngecuap'
import Cuapan from './Cuapan'
import {Card} from 'react-bootstrap'

export class Content extends Component {
  render() {
    return (
      <Fragment>
        <Card>
            <Card.Header style={{background: '#007bff'}}>Home</Card.Header>
            <Ngecuap />
            <hr />
            <Cuapan />
        </Card>
      </Fragment>
    )
  }
}

export default Content
