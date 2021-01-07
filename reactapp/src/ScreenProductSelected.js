import React , {useState} from 'react';
import {Card, Button, CardImg, CardTitle, CardText, CardDeck,CardSubtitle, CardBody} from 'reactstrap';
import Navigation from './Component/navbar'

import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom'



  function ScreenProductSelected (props) {
    console.log(props.product)
    const [goToProduct,setGoToProduct]=useState(false)
    
    if(goToProduct==true){
      return <Redirect to='/basket'/>
    }

  return (
    <div>
    <Navigation/>
    <CardDeck style={{width:400,marginLeft:30, marginTop:30}}>
      <Card >
        <CardImg top width="100px" src="../20201211_071442.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{props.product.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{props.product.subcategory}</CardSubtitle>
          <CardText>{props.product.description}</CardText>
          <Button onClick={() => {setGoToProduct(true)}}>Acheter ({props.product.price}€)</Button>
        </CardBody>
      </Card>
    </CardDeck> 
    </div>
  )
}
function mapStateToProps(state) {
  return {product:state.product}
}

export default connect(
  mapStateToProps,
  null
  )
  (ScreenProductSelected) 