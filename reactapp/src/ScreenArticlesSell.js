
import Navigation from './Component/navbar'
import React,{useEffect,useState} from 'react'
import {Container,Card, CardText, CardBody, CardImg,CardTitle, CardSubtitle,Button,Col,Row} from 'reactstrap';
import { connect } from 'react-redux';

function ScreenArticlesSell({token}) {

  const[productList,setProductList]=useState([])

  useEffect(() => {
    const findProducts = async () => {
      const data = await fetch(`articles/get-article-by-seller?SellerToken=${token}`)
      const body = await data.json()
      setProductList(body.products);
    }
  findProducts()
  },[])

  console.log(productList);

  let sellProduct= productList.map((e,i)=>{
    return (
      <Col xs="12" lg="6" xl="4">
        <Card>
          <CardImg top width="100%" src="../20201211_071442.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">{e.title}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{e.price}</CardSubtitle>
            <CardText>{e.description}</CardText>
            <Button>Voir l'article</Button>
          </CardBody>
        </Card>
      </Col>
    )
  })


  return (
    <div>
      <Navigation/>
      <Container fluid style={{width:"80%"}}>
          <h1>Mes articles en ventes</h1>
        <Row>
          {sellProduct}
        </Row>
      </Container>
    </div>
  );
}


function mapStateToProps(state) {
  return {token:state.token}}

export default connect(
  mapStateToProps,
  null
)(ScreenArticlesSell)