import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const ItemListContainerComponent = ({ products }) => {
  const customStyles = {
    color: "white",
    backgroundColor: "black",
    padding: "1rem",
    margin: "auto",
    textAlign: "center",
    borderRadius: "15px",
    border: "1px solid white",
    width: "100vw",
    height: "auto",
  };

  return (
    <div style={customStyles}>
      <h1>Nuestro Productos</h1>
      <Container>
        <Row>
          {products.map((product) => (
            <Col xs={12} sm={6} md={4} lg={3} key={product.id} className="mb-4">
              <Card style={{ width: "100%" }}>
                <Card.Img variant="top" src={product.thumbnail} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Link to={`/item/${product.id}`}>Ir al detalle</Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ItemListContainerComponent;
