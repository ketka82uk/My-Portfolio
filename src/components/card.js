import React from 'react'
import Card from 'react-bootstrap/Card'

export default function PortfolioCard(props) {
  return <Card>
  <Card.Body>{props.cardContent}</Card.Body>
  </Card>
}

