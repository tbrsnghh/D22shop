import React, { useContext, useState } from 'react'
import { Collapse, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';
import { Link } from 'react-router-dom';
import cart from '../../redux/cartSlice';
export default function Header() {
  const [collapsed, setCollapsed]=useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed)
  
  return (
    <div>
      <Navbar color="faded" light expand="md">
        <NavbarBrand href='/'>Shop</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar}></NavbarToggler>
        <Collapse isOpen={!collapsed}>
          
        </Collapse>
        <Link to="/cart">Cart <span>{cart.length}</span></Link>
      </Navbar>
    </div>
  )
}
