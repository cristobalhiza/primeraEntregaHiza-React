import React from "react";
import getAllProducts from "../../services/productsServices";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
    height: "80vh"
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
        products.map((product) => (
          <Card key={product.id} style={{ width: '18rem', margin: '1rem auto' }}>
            <Card.Img variant="top" src={product.thumbnail} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Button variant="primary">Ir al detalle</Button>
            </Card.Body>
          </Card>
        ))
      )}
    </div>
  );
};

export default ItemListContainerComponent;
