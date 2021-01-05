import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button
} from 'reactstrap';
import {Link} from 'react-router-dom';


const NavsBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand>
            <img style={{width:'80px', margin:'5px',cursor:'pointer', borderRadius:5 ,marginRight:60, marginLeft:30}} src="./Logo_BAK(2).jpg"/>
        </NavbarBrand>
        {/* <NavbarBrand href="/" style={{color: 'rgba(214, 162, 232,1.0)'}}>S'inscrire | Se connecter</NavbarBrand> */}
        
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>

          <Nav className="mr-auto" navbar>
            <Button outline color="secondary" style={{marginRight:60}}size="sm">
                <NavItem>
                  <NavLink>
                    <Link  to='/' style={{color: 'rgba(214, 162, 232,1.0)'}}>S'inscrire | Se connecter</Link>
                  </NavLink>
                </NavItem>
              </Button>
              <NavItem>
                <NavLink>
                <Link style={{color: 'rgba(214, 162, 232,1.0)',marginRight:60}} to="/Accueil">Acceuil</Link>
                </NavLink>
              </NavItem>
                <NavItem>
                  <NavLink> 
                    <Link style={{color: 'rgba(214, 162, 232,1.0)', marginRight:60}} to='/Recherche'>Rechercher des articles</Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <Link style={{color: 'rgba(214, 162, 232,1.0)',marginRight:60}} to='/Vendre'>Vends tes articles</Link>
                  </NavLink>
                </NavItem>            
              

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle  nav caret style={{color: 'rgba(214, 162, 232,1.0)',marginRight:60}}>
                  Profil
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                  <NavLink ><Link style={{color: 'rgba(214, 162, 232,1.0)'}} to='/Achats'>Articles achetés</Link></NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink > <Link style={{color: 'rgba(214, 162, 232,1.0)'}} to='/Ventes'>Articles en vente</Link></NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink><Link style={{color: 'rgba(214, 162, 232,1.0)'}} to='/Information'>Informations personelles</Link></NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    Porte feuille
                  </DropdownItem>
                  <DropdownItem>
                    Favories
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                  <NavLink href='/'>Log Out</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          <NavbarText style={{color: 'rgba(214, 162, 232,1.0)'}}>Babies and Kids</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavsBar;