import Navigation from './Component/navbar'
import React,{useEffect,useState} from 'react'
import {Container,Card, CardText, CardBody, CardImg,CardTitle, CardSubtitle,Button,Col,Row} from 'reactstrap';
import { connect } from 'react-redux';

function ScreenResultSearch(props) {

  console.log('subcat from resultscreen',props.subcat)

  const[productList,setProductList]=useState([])

  useEffect(() => {
    const findProducts = async () => {
      const data = await fetch(`articles/filter-articles?subcat=${props.subcat}`)
      const body = await data.json()
      setProductList(body.products);

    }
    findProducts()
  },[])

  console.log('from resultscreen',productList);

  let searchProduct= productList.map((e,i)=>{
    return (
      <Card>
        <CardImg top width="200%" src="../20201211_071442.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{e.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{e.price}</CardSubtitle>
          <CardText>{e.description}</CardText>
          <Button>Voir l'article</Button>
        </CardBody>
      </Card>
      )
  })

  return (
    <div>
      <Navigation/>
      <Container>
        <h2>Résultats de votre recherche</h2>
        <Row>
          <Col xs="12" lg="4" xl="3">
            {searchProduct}
          </Col>
        </Row>
      </Container>
    </div>
  );
}


function mapStateToProps(state) {
  return {subcat:state.subcat}}

export default connect(
  mapStateToProps,
  null
)(ScreenResultSearch)