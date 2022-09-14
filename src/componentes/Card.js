import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { getImage } from "../utiles/getImage";

const Card = ({ data }) => {
  const imageUrl = getImage(data.poster_path, 300);
  // const imageUrl = data.poster_path
  //   ? "https://image.tmdb.org/t/p/w300" + data.poster_path
  //   : image;
  return (
    <Link to={"/movie/descripcion/" + data.id}>
      <li className={styles.movieCard}>
        <img className={styles.imgCard} src={imageUrl} alt={data.title} />
        <h4>{data.title}</h4>
      </li>
    </Link>
  );
};

export default Card;
