import React from "react";
import styles from "./page.module.css";
import { Button } from "@/components/ui/button";
import Category from "@/components/category";
import banner from "@/assets/banner.jpg";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className={`${styles.Hero}`}>
        <div className={`${styles.hero_content} ${styles.center}`}>
          <h2 className={styles.heading}>Chicken Resturant</h2>
          <p className={styles.subheading}>
            "Food That Speaks to Your Soul, Delivered with Care"
          </p>
          <Link href={`/category/xoila`}>
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
          <Category image={banner as any} title="Momo" />
          <Category image={banner as any} title="Thukpa" />
          <Category image={banner as any} title="Mutton" />
          <Category image={banner as any} title="Xoila" />
          <Category image={banner as any} title="Chowming" />
          <Category image={banner as any} title="Biryani" />
        </div>
      </div>
    </>
  );
}
