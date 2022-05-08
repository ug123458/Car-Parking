import React, { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Container,
} from "react-bootstrap"
import { PayPalButton } from "react-paypal-button-v2"
import products from "../products"
import Rating from "./Rating"
const ProductScreen = () => {
  const [sdkReady, setsdkReady] = useState(false)
  const history = useNavigate()
  const addPaypalScript = async () => {
    const script = document.createElement("script")
    script.type = "text/javascript"
    script.src = `https://www.paypal.com/sdk/js?client-id=ARCFX71xR98mYVCrJJ8o5NlwLEEttqVRwnxhcBSWbiDYIoc-qax7PZQZGKyv6Xhk1tscWjy48u1Ve2RQ`
    script.async = true
    script.onload = () => {
      setsdkReady(true)
    }
    document.body.appendChild(script)
  }
  const successPaymentHandler = () => {
    history("/success")
  }
  const { id } = useParams()
  const product = products.find((p) => p._id === id)
  return (
    <Container>
      <Link className='btn btn-light my-3' to='/'>
        GO Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price for Parking:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0
                      ? "Parking Available"
                      : "Parking Not Available"}
                  </Col>
                </Row>
              </ListGroup.Item>
              {product.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Timing</Col>
                    <Col>
                      <select>
                        <option>1:30 pm-2:30pm</option>
                        <option>2:30 pm-3:30pm</option>
                        <option>3:30 pm-4:30pm</option>
                        <option>4:30 pm-5:30pm</option>
                      </select>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}
              <ListGroup.Item>
                <Button
                  className='btn btn-block'
                  type='button'
                  disabled={product.countInStock === 0}
                  onClick={addPaypalScript}
                >
                  Book Parking
                </Button>
              </ListGroup.Item>
              <ListGroup.Item>
                {sdkReady && (
                  <PayPalButton
                    amount={product.price}
                    onSuccess={successPaymentHandler}
                  />
                )}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductScreen
