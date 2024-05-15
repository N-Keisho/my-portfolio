import styles from "./page.module.css";
import Title from "./component/top/Title/Title";
import Arrow from "./component/top/Arrow/Arrow";
import About from "./component/top/About/About";
import Works from "./component/top/Works/Works";

export default function Home() {
  return (
    <div className={styles.container}>
      <Title />
      <Arrow />
      <About />
      <Arrow />
      <Works />
      <Arrow />
    </div>
  );
}
