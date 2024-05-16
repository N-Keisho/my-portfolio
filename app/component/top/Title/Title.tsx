import Image from "next/image";
import styles from "./Title.module.css";

const Title = () => {
  return (
    <div className={styles.div} id="top">
      <Image
        src="/svg/title.svg"
        alt="Logo"
        className={styles.image}
        width={500}
        height={500}
      />
    </div>
  );
};

export default Title;
