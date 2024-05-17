"use client";
import Image from "next/image";
import styles from "./ToTop.module.css";
import { useEffect, useState, useCallback } from "react";

// 下までスクロールしたかどうかの判定は以下の記事を参考にした
// https://zenn.dev/jojojo/articles/73f8f4daad9e49

const ToTop = () => {
  const [showToTop, setShowToTop] = useState(false);
  const [bottom, setBottom] = useState(20);
  const footerHeight = 40;

  const changeBottom = useCallback(() => {
    const bottomPosition =
      document.body.offsetHeight - (window.scrollY + window.innerHeight);
    if (bottomPosition < footerHeight) {
      setBottom(footerHeight - bottomPosition);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", changeBottom);
    return () => window.removeEventListener("scroll", changeBottom);
  }, [changeBottom]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowToTop(true);
      } else {
        setShowToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${styles.to_top} ${showToTop ? styles.show : styles.unshow}`}
      style={{ bottom: `${bottom}px` }}
    >
      <a href="#top">
        <Image src={"/piskel/to_top.png"} alt="To Top" fill />
      </a>
    </div>
  );
};

export default ToTop;
