import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShop } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent";
import { getAllCategories } from "../../services/productsServices";

const NavBarComponent = () => {
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    getAllCategories()
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      bg="black"
      data-bs-theme="dark"
    >
      <Container>
        <FontAwesomeIcon
          icon={faShop}
          style={{
            color: "#7ADFBB",
            fontSize: "1.4rem",
            marginRight: "0.6rem",
          }}
        />
        <Navbar.Brand href="#home">UniversalStore CHL</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">Inicio</Link>
            <Nav.Link href="#link">Ofertas</Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              {categories.map((category, index) => {
                return (
                  <NavDropdown.Item key={index}>
                    <Link to={category}>{category}</Link>
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidgetComponent />
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
