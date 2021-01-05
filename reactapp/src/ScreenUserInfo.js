import React,{useState,useEffect} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux';
import Navigation from './Component/navbar'
import './App.css';


function ScreenUserInfo(props){

  console.log(props.token)

  const[userInfo, setUserInfo]=useState('');

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
      <div id='information'>
        <ListGroup>
          <ListGroupItem>{userInfo.email}</ListGroupItem>
          <ListGroupItem>{userInfo.address}</ListGroupItem>
          <ListGroupItem>{userInfo.city}</ListGroupItem>
          <ListGroupItem>{userInfo.postalCode}</ListGroupItem>
        </ListGroup>
      </div>
    </div>
  );
}


function mapStateToProps(state) {
  return {token:state.token}
}
export default connect(
  mapStateToProps,
  null 
)(ScreenUserInfo);
