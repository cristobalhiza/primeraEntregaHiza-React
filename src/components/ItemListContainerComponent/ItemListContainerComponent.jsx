import React from "react";
import getAllProducts from "../../services/productsServices";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ItemListContainerComponent = ({ greeting }) => {
  const customStyles = {
    color: "white",
    fontSize: "2rem",
    backgroundColor: "black",
    padding: "1rem",
    margin: "auto",
    textAlign: "center",
    borderRadius: "15px",
    border: "1px solid white",
    width: "100vw",
    height: "auto", // Adjusted for better responsiveness
  };

  const [products, setProducts] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    getAllProducts()
      .then((res) => setProducts(res.data.products))
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch products");
      });
  }, []);

  return (
    <div style={customStyles}>
      <h1>{greeting}</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <Container>
          <Row>
            {products.map((product) => (
              <Col xs={12} sm={6} md={4} lg={3} key={product.id} className="mb-4">
                <Card style={{ width: '100%' }}>
                  <Card.Img variant="top" src={product.thumbnail} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Button variant="primary">Ir al detalle</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default ItemListContainerComponent;
