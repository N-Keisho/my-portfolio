import styles from "./page.module.css";
import Image from "next/image";
import Title from "./component/top/Title/Title";
import Arrow from "./component/top/Arrow/Arrow";

export default function Home() {
  return (
    <div className={styles.container}>
      <Title />
      <Arrow />
    </div>
  );
}
