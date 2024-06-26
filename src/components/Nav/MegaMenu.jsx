import React from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBNavbar,
  MDBNavbarNav,
  MDBDropdown,
  MDBNavbarBrand,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBIcon,
} from 'mdb-react-ui-kit';
import LogoTrans from '../../assets/images/LogoTrans.png';
import { Link } from 'react-router-dom';

export default function App() {
  return (

    
    <MDBNavbar expand='xlg' light style={{ backgroundColor: '#e3f2fd' }}>
      <MDBContainer fluid>
     
        <MDBNavbarNav className='mr-auto mb-2 mb-lg-0' style={{ paddingLeft: '0.15rem' }}>
        <MDBNavbarBrand>
        <Link to='/'>
            <img
              src={LogoTrans}
              height='35'
              alt='logo'
              loading='lazy'
            />
            </Link>
          </MDBNavbarBrand>
            <MDBDropdown>
              <MDBDropdownToggle tag='a' className='nav-link'>
                Mega menu
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBContainer>
                  <MDBRow className='my-4  border-none'>
                    <MDBCol md='6' lg='3' className='mb-3 mb-lg-0'>
                      <MDBListGroup className='border-none'>
                        <MDBListGroupItem className='text-uppercase' tag='a' href='#' action>
                          Lorem ipsum
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          <MDBIcon icon='caret-right' className='pe-2' /> Dolor sit
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          <MDBIcon icon='caret-right' className='pe-2' />
                          Amet consectetur
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          <MDBIcon icon='caret-right' className='pe-2' />
                          Cras justo odio
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          <MDBIcon icon='caret-right' className='pe-2' />
                          Adipisicing elit
                        </MDBListGroupItem>
                      </MDBListGroup>
                    </MDBCol>
                    <MDBCol md='6' lg='3' className='mb-3 mb-lg-0'>
                      <MDBListGroup>
                        <MDBListGroupItem className='text-uppercase' tag='a' href='#' action>
                          Explicabo voluptas
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          <MDBIcon icon='caret-right' className='pe-2' /> Perspiciatis quo
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          <MDBIcon icon='caret-right' className='pe-2' />
                          Cras justo odio
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          <MDBIcon icon='caret-right' className='pe-2' /> Laudantium maiores
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          <MDBIcon icon='caret-right' className='pe-2' /> Provident dolor
                        </MDBListGroupItem>
                      </MDBListGroup>
                    </MDBCol>
                    <MDBCol md='6' lg='3' className='mb-3 mb-md-0'>
                      <MDBListGroup>
                        <MDBListGroupItem className='text-uppercase' tag='a' href='#' action>
                          Iste quaerato
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          <MDBIcon icon='caret-right' className='pe-2' /> Cras justo odio
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          <MDBIcon icon='caret-right' className='pe-2' /> Est iure
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          <MDBIcon icon='caret-right' className='pe-2' /> Praesentium
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          <MDBIcon icon='caret-right' className='pe-2' /> Laboriosam
                        </MDBListGroupItem>
                      </MDBListGroup>
                    </MDBCol>
                    <MDBCol md='6' lg='3'>
                      <MDBListGroup>
                        <MDBListGroupItem className='text-uppercase' tag='a' href='#' action>
                          Cras justo odio
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          <MDBIcon icon='caret-right' className='pe-2' /> Saepe
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          <MDBIcon icon='caret-right' className='pe-2' /> Vel alias
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          <MDBIcon icon='caret-right' className='pe-2' /> Sunt doloribus
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          <MDBIcon icon='caret-right' className='pe-2' /> Cum dolores
                        </MDBListGroupItem>
                      </MDBListGroup>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </MDBDropdownMenu>
            </MDBDropdown>
        </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
  );
}