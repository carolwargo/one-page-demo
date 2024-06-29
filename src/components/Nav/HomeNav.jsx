import React from 'react';
import {Navbar, Container} from 'react-bootstrap';
import SubscribeModal from '../Modal/SubscribeModal';

const HomeNav = () => {

    return (

<Navbar className="bg-body-tertiary">
<Container fluid>
  <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
    <SubscribeModal />
    </Navbar.Text>
  </Navbar.Collapse>
</Container>
</Navbar>


    );
}


export default HomeNav;