import React from "react";
import { useParams } from "react-router-dom";
import useProductDetails from "../hooks/useProductDetails";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ImageGallery from "../components/ImageGalleryComponent/ImageGalleryComponent";

const ItemDetailsContainer = () => {
  const { itemId } = useParams();
  const { product, loading, error } = useProductDetails(itemId);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;

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
    <Card style={{ backgroundColor: "#EEEEEE" }}>
      <Card.Body>
        <Card.Title style={{ fontWeight: "bold" }}>{product.title}</Card.Title>
        <ImageGallery images={product.images} />
        <Card.Text>{product.description}</Card.Text>
      </Card.Body>
      <ListGroup
        className="list-group-flush"
        style={{ backgroundColor: "#EEEEEE" }}
      >
        <ListGroup.Item style={{ backgroundColor: "#EEEEEE" }}>
          Precio: <span style={{ textDecoration: "line-through" }}>${product.price}</span> 
          <span style={{ fontWeight: "bold", color: "red" }}> ${calculateDiscountedPrice(product.price, product.discountPercentage)}</span> 
          <span> ({product.discountPercentage}% de descuento)</span>
        </ListGroup.Item>
        <ListGroup.Item style={{ backgroundColor: "#EEEEEE" }}>
          Stock: {getStockMessage(product.stock)}
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Comprar Ahora</Card.Link>
        <Card.Link href="#">Agregar al carrito</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default ItemDetailsContainer;
