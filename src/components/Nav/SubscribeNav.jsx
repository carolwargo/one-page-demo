import React from 'react';
import {Navbar, Container} from 'react-bootstrap';
import SubscribeModal from '../Modal/SubscribeModal';
import { CiHome } from "react-icons/ci";
import { Link } from 'react-router-dom';  

const SubscribeNav = () => {

    return (
      <div className='mb-5'>
<Navbar sticky='top' className="bg-body-tertiary py-0">
<Container fluid>
  <Navbar.Brand >
    <Link to='/'>
    <CiHome
    style={{
      fontSize: '1.25rem',
      color: 'black'
    
    }}/>
    </Link>
    </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
    <SubscribeModal />
    </Navbar.Text>
  </Navbar.Collapse>
</Container>
</Navbar>
</div>

    );
}


export default SubscribeNav;