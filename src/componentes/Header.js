import React, { useEffect } from "react";
import styles from "./Header.module.css";
import logo from "../asset/icons8-búsqueda.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const Header = ({ setHashMore, setPage, setMovie, searchs, page }) => {
  const [search, setSearch] = useState(false);

  return (
    <header className={styles.header}>
      <Link to="/">
        <h1 className={styles.h1}>MOVIES</h1>
      </Link>
      {search ? (
        <Search setHashMore={setHashMore} Page={setPage} setMovie={setMovie} />
      ) : (
        <span onClick={() => setSearch(true)} className={styles.svg}>
          <img src={logo} alt="buscador" />
        </span>
      )}
    </header>
  );
};

export default Header;
