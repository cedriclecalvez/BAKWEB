import React from 'react';
import {Container,Card,CardImg,CardImgOverlay,CardTitle,CardSubtitle } from 'reactstrap';

const Jumbo = (props) => {
  return (
    <div>      
        <Container fluid >
            <Card inverse  >
                <CardImg width="100%" src="../igor-starkov-8u-OaI3MZrc-unsplash(2).jpg" alt="Card image cap" />
                <CardImgOverlay style={{positionItem:"flex-start"}}>
                  {/* <h1>Babies And Kids</h1> */}
                  <CardTitle  tag="h1">Babies And Kids</CardTitle>
                  <CardSubtitle tag="h5">Le meilleur pour vos enfants à tout petit prix</CardSubtitle>
                </CardImgOverlay>
            </Card>
        </Container>       
    </div>
  );
};

export default Jumbo;