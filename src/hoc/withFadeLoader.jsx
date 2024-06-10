import React, { useState, useEffect } from "react";
import { FadeLoader } from "react-spinners";
import styles from "./withFadeLoader.module.css";

const withFadeLoader = (WrappedComponent) => {
  return (props) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 400); 

      return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
      return (
        <div className={styles.loadingContainer}>
          <FadeLoader color="#123abc" loading={true} />
          <p>Cargando...</p>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
};

export default withFadeLoader;