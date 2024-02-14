"use client";

import { useRouter } from "next/navigation";
import styles from "./category.module.css";

type CategoryProps = {
  id: string;
  image: string;
  title: string;
};

export default function Category({ image, title, id }: CategoryProps) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/category/${id}`)}
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
