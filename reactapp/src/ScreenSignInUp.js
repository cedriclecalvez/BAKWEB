import React, {useState} from 'react';
import {Button,Row} from 'reactstrap'
import {Redirect} from 'react-router-dom'
import {Container,Col,Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Jumbo from './Component/Jumbotron';
import {connect} from 'react-redux'
import './App.css';



function ScreenSignInUp({onSubmitToken}) {

  const [signInEmail, setSignInEmail] = useState('')
  const [signInPassword, setSignInPassword] = useState('')
  const [signUpEmail, setSignUpEmail] = useState('')
  const [signUpPassword, setSignUpPassword] = useState('')
  const [firstName,setFirstName]=useState('');
  const [address,setAddress]=useState('')
  const [city,setCity]=useState('');
  const [postalCode,setPostalCode]=useState('')
  const [token, setToken] = useState('')
  const [isConnect, setIsConnect] = useState(false)
  const [isNotConnectSignIn, setIsNotConnectSignIn] = useState('')
  const [isNotConnectSignUp, setIsNotConnectSignUp] = useState('')
  const [tokenIsSubmited, setTokenIsSubmited] = useState(false)
  

  // VIDER TOUS LES INPUTS APRES LE CLIC

  function clickToCleanSignIn() {
    setSignInEmail("");
    setSignInPassword("");
  }
  function clickToCleanSignUp() {
    setSignInEmail("");
    setSignInPassword("");
    setFirstName("");
    setAddress("")
    setCity("");
    setPostalCode("")
  }

  var handleClickSignIn = async () => {

    const dataUsers = await fetch(`/users/sign-in`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `email=${signInEmail}&password=${signInPassword}`
    },
    );

    const dataConsumers = await dataUsers.json()
    setIsConnect(dataConsumers.result)
    setIsNotConnectSignIn(dataConsumers.error)
    console.log("dataConsumers.token-----------",dataConsumers.token)
    onSubmitToken(dataConsumers.token)
    
  }
 
// INSCRIPTION ET ENVOIE DES INFOS POUR BDD

  var handleClickSignUp = async () => {

    const dataUsers = await fetch(`/users/sign-up`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `firstName=${firstName}&email=${signUpEmail}&password=${signUpPassword}&address=${address}&postalCode=${postalCode}&city=${city}`
    });

    const dataConsumers = await dataUsers.json()
    setIsConnect(dataConsumers.result)
    setIsNotConnectSignUp(dataConsumers.error)
    onSubmitToken(dataConsumers.saveUser.token)
    
  }

if(isConnect==true){
  return <Redirect to='Accueil'/>
}

return (

  <div id='signInUp'>
    <Jumbo/>

    {/* Partie Sign In */}

    <Container>
    <Row>
      <Col xs='12' md='6'>  
        <h2>Connection</h2>
          <Form>
            <FormGroup row>
              <Label for="exampleEmail" sm={6}>Email</Label>
              <Col sm={12}>
                <Input type="email" name="email" id="exampleEmail" placeholder="Email" 
                onChange={(e) => setSignInEmail(e.target.value)}
                value={signInEmail}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="examplePassword" sm={6}>Mot de passe</Label>
              <Col sm={12}>
                <Input type="password" name="password" id="examplePassword" placeholder="Mot de passe"
                onChange={(e) => setSignInPassword(e.target.value)}
                value={signInPassword}
                />
              </Col>
            </FormGroup>
          </Form>

          <Button onClick={() => { handleClickSignIn() }} className='buttonFilterSign'> Me connecter
          </Button>

          <p>{isNotConnectSignIn}</p>
 
        {/* Partie Sign Up */}

        </Col>
        <Col xs='12' md='6'>
          <h2 >Créaction de compte</h2>
          <Form>
          <FormGroup row>
            <Label  sm={6}>Nom</Label>
            <Col sm={12}>
              <Input type="firstName" name="firstName"  placeholder="firstName" 
              onChange={(e) => setFirstName(e.target.value)} 
              value={firstName}
              />
            </Col>
          </FormGroup>
          <FormGroup row> 
            <Label for="exampleEmail" sm={2}>Email</Label>
            <Col sm={12}>
              <Input type="email" name="email" id="exampleEmail" placeholder="Email" 
              onChange={(e) => setSignUpEmail(e.target.value)} 
              value={signUpEmail}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="examplePassword" sm={6}>Mot de passe</Label>
            <Col sm={12}>
              <Input type="password" name="password" id="examplePassword" placeholder="mot de passe"
              onChange={(e) => setSignUpPassword(e.target.value)}
              value={signUpPassword}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label  sm={6}>Adresse</Label>
            <Col sm={12}>
              <Input type="Address" name="Address"  placeholder="ton adresse"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label  sm={6}>Ville</Label>
            <Col sm={12}>
              <Input type="City" name="City"  placeholder="ville"
              onChange={(e) => setCity(e.target.value)}
              value={city}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label  sm={6}>Code postal</Label>
            <Col sm={12}>
              <Input type="codepostal" name="codepostal"  placeholder="code postal"
              onChange={(e) => setPostalCode(e.target.value)} 
              value={postalCode}
              />
            </Col>
          </FormGroup>
        </Form>

        <Button className='buttonFilterSign' onClick={() => { handleClickSignUp() }}>Créer un compte
        </Button>

        <p>{isNotConnectSignUp}</p>
     
      </Col>
      </Row>
    </Container>
  </div>
)
}

// ENVOIE DU TOKEN DE L'UTILISATEUR VERS LE STORE LORS DE L'INSCRIPTION

function mapDispatchToProps(dispatch) {
  return {
    onSubmitToken: function (token) {
      dispatch({ type: 'informationFromSignInUp', token: token })
    }
  }
}
export default connect(
  null,
  mapDispatchToProps
)(ScreenSignInUp);
