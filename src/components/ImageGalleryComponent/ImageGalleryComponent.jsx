import React, { useState } from "react";
import { Row, Col, Image } from "react-bootstrap";
import styles from "./ImageGalleryComponent.module.css"; // Importa el CSS Module

const ImageGalleryComponent = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <Row className={styles.ImageGalleryComponent}>
      <Col md={2} className={styles.ImageGalleryComponent__thumbnails}>
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            thumbnail
            onClick={() => setSelectedImage(image)}
            className={`${styles.ImageGalleryComponent__thumbnail} ${
              selectedImage === image
                ? styles["ImageGalleryComponent__thumbnail--selected"]
                : ""
            }`}
            style={{ cursor: "pointer" }}
          />
        ))}
      </Col>
      <Col md={10} className={styles.ImageGalleryComponent__mainImage}>
        <Image
          src={selectedImage}
          fluid
          className={styles.ImageGalleryComponent__image}
        />
      </Col>
    </Row>
  );
};

export default ImageGalleryComponent;
