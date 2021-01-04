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
  NavbarText
} from 'reactstrap';
import {Link} from 'react-router-dom';

// const {Search} = Input;
// const onSearch = value => console.log(value);


const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Babies and Kids</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
              <Link to="/Accueil">Acceuil</Link>
              </NavLink>
            </NavItem>
            {/* <NavItem>
            <Search
                placeholder="Recherche des articles"
                allowClear
                onSearch={onSearch}
                style={{ width: 400, margin: '10px', border: 5, marginRight:120}}
            />
            </NavItem> */}
            <NavItem>
              <NavLink>
             <Link to='/Vente'>Vends tes articles</Link>
             </NavLink>
            </NavItem> 
            <NavItem>
             <NavLink> <Link to='/recherche'>Rechercher des articles</Link></NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Profil
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <NavLink ><Link to='/Achete'>Articles achetés</Link></NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink > <Link to='/Vendu'>Articles en vente</Link></NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink><Link to='/information'>Informations personelles</Link></NavLink>
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
          <NavbarText></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;