import React,{useState,useEffect} from 'react';
import { CardText,Col, ListGroup, ListGroupItem, Row } from 'reactstrap';
import { connect } from 'react-redux';
import Navigation from './Component/navbar'
import './App.css';


function ScreenUserInfo(props){

  console.log(props.token)

  const[userInfo, setUserInfo]=useState('');

  // RECUPERATION DU BACKEND LES INFOS CORRESPONDANT A L'UTILIASATEUR GRACE AU TOKEN RECUPERE DU STORE 

  useEffect(() => {
    const findUser = async () => {
      const rawData = await fetch(`users/display-profile?token=${props.token}`)
      const doneData = await rawData.json()
      setUserInfo(doneData)
    }
  findUser()
  }, [])

 console.log("userInfo-----------",userInfo)

  return (
    <div>
    <Navigation/>
    <Row>
      <Col xs="12" lg="4" xl={{ span: 6, offset: 3 }}>
      <div id='information'>
        <ListGroup>
        <h4>Informations de ton profil</h4>
          <ListGroupItem>{userInfo.email}</ListGroupItem>
          <ListGroupItem>{userInfo.address}</ListGroupItem>
          <ListGroupItem>{userInfo.city}</ListGroupItem>
          <ListGroupItem>{userInfo.postalCode}</ListGroupItem>
        </ListGroup>
      </div>
      </Col>
      </Row>
    </div>
  );
}

// RECUPERATION ET UTILISATION DU TOKEN DEJA STOCKE AFIN DE CONNAITRE L'UTILISATEUR

function mapStateToProps(state) {
  return {token:state.token}
}
export default connect(
  mapStateToProps,
  null 
)(ScreenUserInfo);
