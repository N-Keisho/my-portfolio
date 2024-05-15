import styles from "./page.module.css";
import Title from "./component/top/Title/Title";
import Arrow from "./component/top/Arrow/Arrow";
import About from "./component/top/About/About";
import Works from "./component/top/Works/Works";
import Skills from "./component/top/Skills/Skills";
import Contact from "./component/top/Contact/Contact";
import ToTop from "./component/ui/ToTop/ToTop";

export default function Home() {



  return (
    <div className={styles.container}>
      <Title />
      <Arrow />
      <About />
      <Arrow />
      <Works />
      <Arrow />
      <Skills />
      <Arrow />
      <Contact />
      <ToTop />
    </div>
  );
}
