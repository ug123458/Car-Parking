import React, { useState } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import { PayPalButton } from 'react-paypal-button-v2'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const PaymentScreen = () => {
  const { price } = useParams()
  const [sdkReady, setsdkReady] = useState(false)
  const history = useNavigate()

  const addPaypalScript = async () => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = `https://www.paypal.com/sdk/js?client-id=ARCFX71xR98mYVCrJJ8o5NlwLEEttqVRwnxhcBSWbiDYIoc-qax7PZQZGKyv6Xhk1tscWjy48u1Ve2RQ`
    script.async = true
    script.onload = () => {
      setsdkReady(true)
    }
    document.body.appendChild(script)
  }

  const successPaymentHandler = () => {
    history('/success')
  }
  return (
    <Container>
      <Row>
        <Col>
          <h3>Kindly Complete the Payment to Book you Parking Slot</h3>
          <br></br>
          <h1>Confirm your selection</h1>
          <br></br>
          <h2>{price}</h2>
        </Col>
      </Row>
      <Row>
        {!sdkReady && (
          <Button className='btn' onClick={addPaypalScript}>
            Confirm
          </Button>
        )}
        {sdkReady && (
          <PayPalButton amount={price} onSuccess={successPaymentHandler} />
        )}
      </Row>
    </Container>
  )
}

export default PaymentScreen
