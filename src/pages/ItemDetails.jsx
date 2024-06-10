import React from "react";
import { useParams } from "react-router-dom";
import useProductDetails from "../hooks/useProductDetails";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ImageGallery from "../components/ImageGalleryComponent/ImageGalleryComponent";
import styles from "./styles/itemDetails.module.css";
import withFadeLoader from "../hoc/withFadeLoader";

const ItemDetailsContainer = ({ product, error }) => {
  const { itemId } = useParams();
  const { product: fetchedProduct, loading, error: fetchError } = useProductDetails(itemId);

  const productToUse = product || fetchedProduct;
  const errorToUse = error || fetchError;

  if (errorToUse) {
    return (
      <div className={styles.errorContainer}>
        <p>{errorToUse}</p>
      </div>
    );
  }

  if (!productToUse) {
    return null; //
  }

  const getStockMessage = (stock) => {
    if (stock === 0) {
      return "Producto agotado";
    } else if (stock === 1) {
      return "Última unidad disponible";
    } else if (stock >= 2 && stock <= 10) {
      return "Últimas unidades disponibles";
    } else {
      return "Producto disponible";
    }
  };

  const calculateDiscountedPrice = (price, discount) => {
    return (price * (1 - discount / 100)).toFixed(2);
  };

  return (
    <Card className={styles.card}>
      <Card.Body>
        <Card.Title className={styles.cardTitle}>{productToUse.title}</Card.Title>
        <ImageGallery images={productToUse.images || []} className={styles.imageGallery} />
        <Card.Text className={styles.cardText}>{productToUse.description}</Card.Text>
      </Card.Body>
      <ListGroup className={styles.listGroupFlush}>
        <ListGroup.Item className={styles.listGroupItem}>
          Precio: <span className={styles.price}>${productToUse.price}</span> 
          <span className={styles.discountedPrice}>${calculateDiscountedPrice(productToUse.price, productToUse.discountPercentage)}</span> 
          <span className={styles.discountPercentage}> ({productToUse.discountPercentage}% de descuento)</span>
        </ListGroup.Item>
        <ListGroup.Item className={styles.listGroupItem}>
          Stock: {getStockMessage(productToUse.stock)}
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#" className={styles.cardLink}>Comprar Ahora</Card.Link>
        <Card.Link href="#" className={styles.cardLink}>Agregar al carrito</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default withFadeLoader(ItemDetailsContainer);