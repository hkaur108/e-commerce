import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonContainer } from './Button';
import logo from '../logo.svg';

export default class NavBar extends Component {
  render() {
    return (
      <NavWrapper className='navbar navbar-expand-lg navbar-dark px-sm-5'>
        <Link className='nav-link' >
          <img src={logo} alt="store-logo" className='nav-brand' />
        </Link>
        <ul className='navbar-nav  mr-auto'>
          <li className='nav-item ml-5'>
            <Link to= "/" className='nav-link'>products</Link>
          </li>
        </ul>
        <Link to="/cart" className='ml-auto'>
          <ButtonContainer>
            <i className="fas fa-cart-plus"/>
            my cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
      
    )
  }
}

const NavWrapper = styled.nav`
background:var(--mainBlue);
.nav-link{
  color: var(--mainWhite),!important;
  font-size:1.3rem;
  text-transform:capitalize;
}
`

