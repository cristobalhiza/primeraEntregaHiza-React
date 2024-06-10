import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import styles from "./ItemListContainerComponent.module.css";
import withFadeLoader from "../../hoc/withFadeLoader";

const ItemListContainerComponent = ({ products }) => {
  if (!Array.isArray(products) || products.length === 0) {
    return (
      <div className={styles.container}>
        <h1>Nuestro Productos</h1>
        <p>No hay productos disponibles</p>
      </div>
    );
  }

  const calculateDiscountedPrice = (price, discount) => {
    return (price * (1 - discount / 100)).toFixed(2);
  };

  return (
    <div className={styles.container}>
      <h1>Nuestro Productos</h1>
      <Container>
        <Row className={styles.row}>
          {products.map((product) => (
            <Col
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={product.id}
              className={styles.col}
            >
              <Card className={styles.card}>
                <Card.Img variant="top" src={product.thumbnail} />
                <Card.Body className={styles["card-body"]}>
                  <Card.Title className={styles["card-title"]}>
                    {product.title}
                  </Card.Title>
                  <Card.Text className={styles["card-text"]}>
                    Precio:{" "}
                    <span className={styles["original-price"]}>
                      ${product.price}
                    </span>
                    <span className={styles["discounted-price"]}>
                      {" "}
                      $
                      {calculateDiscountedPrice(
                        product.price,
                        product.discountPercentage
                      )}
                    </span>
                    <span className={styles["discount-percentage"]}>
                      {" "}
                      ({product.discountPercentage}% Off)
                    </span>
                  </Card.Text>
                  <Link
                    to={`/item/${product.id}`}
                    className={styles["card-link"]}
                  >
                    Ir al detalle
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default withFadeLoader(ItemListContainerComponent);
