import React,{useEffect,useState} from 'react'
import {Redirect} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Card, CardText, CardBody, CardImg,CardTitle, CardSubtitle,Button,Col,Row} from 'reactstrap';
import Navigation from './Component/navbar';
import Jumbo from './Component/Jumbotron';
import { connect } from 'react-redux';


function ScreenHomePage({onSubmitproduct}) {

  const[productList,setProductList]=useState([])
  const [goToProduct,setGoToProduct]=useState(false)

// RECUPERER TOUS LES ARTICLES ENCORE EN VENTE A L'INITIALISATION DE L'ACCUEIL

  useEffect(() => {
    const findProducts = async () => {
      const data = await fetch(`/articles/get-all-articles`)
      const body = await data.json()
      setProductList(body.products);
    }
    findProducts()
  },[])

  console.log(productList);

// MISE EN PLACE DES ANNONCES AVEC IMAGE EN DUR

  let allCardProduct= productList.map((e,i)=>{
    return (
      <Col xs="12" lg="4" xl="3">
        <Card style={{marginTop:20}}>
          <CardImg top width="100%" src="../20201211_071442.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">{e.title}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{e.price}€</CardSubtitle>
            <CardText>{e.subcategory}</CardText>
            <Button onClick={() => {setGoToProduct(true);onSubmitproduct(e)}}>Voir l'article</Button> 
          </CardBody>
        </Card>
      </Col>
    )
  })

  if(goToProduct==true){
    return <Redirect to='/Produit'/>
  }

  return (
    <div>
      <Navigation/>
      <Jumbo/>
      <Container fluid style={{width:"80%"}}>
        <Row >
          {allCardProduct}
        </Row>
      </Container>
    </div>
  );
}

// ENVOIE DU PRODUIT CHOISIT DANS LE STORE

function mapDispatchToProps(dispatch) {
  return {
    onSubmitproduct: function (product) {
      dispatch({ type: 'productSelectedFromHomeScreen', product: product })
    }
  }
}

export default connect(
null,
mapDispatchToProps
)(ScreenHomePage)