import React from "react";
import styles from "./page.module.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Category from "@/components/category";
import { getCategories } from "@/actions/category.action";
import Test from "@/components/test";

export default async function Page() {
  const { error, categories } = await getCategories();

  return (
    <>
      <Test />
      <div className={`${styles.Hero}`}>
        <div className={`${styles.hero_content} ${styles.center}`}>
          <h2 className={styles.heading}>Chicken Resturant</h2>
          <p className={styles.subheading}>
            "Food That Speaks to Your Soul, Delivered with Care"
          </p>
          <Link href={`/category/clsk4r1i500011aa8k0w6jvkk`}>
            <Button
              variant={"secondary"}
              className={`${styles.cta} ${styles.btn_primary}`}
            >
              Explore more
            </Button>
          </Link>
        </div>
      </div>
      {/* Category */}
      <div className="mt-5">
        <h1 className="font-bold text-3xl text-center">Categories</h1>
        <div className="flex mt-5 flex-wrap justify-evenly gap-x-4 gap-y-6">
          {categories &&
            categories?.map((category) => (
              <Category
                key={category?.id}
                id={category?.id}
                image={category?.image}
                title={category?.name}
              />
            ))}
        </div>
      </div>
    </>
  );
}
