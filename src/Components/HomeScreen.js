import React from 'react'
import products from '../products'
import { Row, Col, Container } from 'react-bootstrap'
import Product from './Product'
const HomeScreen = () => {
  return (
    <Container>
      <h3 className='mt-5'>Parking Spaces</h3>
      <Row>
        {products.map((product) => {
          return (
            <Col sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default HomeScreen
