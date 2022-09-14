import Card from "./Card";

import styles from "./Main.module.css";

const Main = ({ datos }) => {
  return (
    <ul className={styles.grid}>
      {datos.map((el) => (
        <Card key={el.id} data={el} />
      ))}
    </ul>
  );
};

export default Main;
