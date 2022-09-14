import styles from "./MoviesDetails.module.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../utiles/fetching";
import { getImage } from "../utiles/getImage";

const MoviesDetails = () => {
  const [detalle, setDetalle] = useState([]);
  const { movieId } = useParams();
  const imageUrl = getImage(detalle.poster_path, 300);

  useEffect(() => {
    getData("/movie/" + movieId)
      .then((res) => res.json())
      .then((data) => setDetalle(data));
  }, [movieId]);

  if (!detalle) return null;

  return (
    <div className={`${styles.container} `}>
      <img
        className={`${styles.col} ${styles.imgCard}`}
        src={imageUrl}
        alt={detalle.title}
      />
      <div className={styles.col}>
        <p>
          <strong>Titulo:</strong> {"  " + detalle.title}
        </p>
        <p>
          <strong>Descripcion:</strong> {"  " + detalle.overview}
        </p>
      </div>
    </div>
  );
};

export default MoviesDetails;

//Las url se consumen segun la api
