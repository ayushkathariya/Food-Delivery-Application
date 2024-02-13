import React from "react";
import styles from "./category.module.css";

type CategoryProps = {
  image: string;
  title: string;
};

export default function Category({ image, title }: CategoryProps) {
  return (
    <div
      className={styles.Category}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className={`${styles.category_content} ${styles.center}`}>
        <h3 className={styles.heading}>{title}</h3>
      </div>
    </div>
  );
}
