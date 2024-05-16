import Link from "next/link";
import styles from "./IndexButton.module.css";
import Image from "next/image";

const IndexButton = ({ index, length }: { index: number; length: number }) => {
  return (
    <div className={styles.indexButton}>
      <Link href={`/work/${index - 1}`} className={`${styles.link} ${index === 1 ? styles.hidden : ""}`}>
        <Image
          src="/piskel/arrow.png"
          alt="Left Arrow"
          className={styles.left_arrow}
          width={50}
          height={50}
        />
      </Link>
      <div className={styles.index}>
        {index} / {length}
      </div>
      <Link href={`/work/${index + 1}`} className={`${styles.link} ${index === length ? styles.hidden : ""}`}>
        <Image
          src="/piskel/arrow.png"
          alt="Right Arrow"
          className={styles.right_arrow}
          width={50}
          height={50}
        />
      </Link>
    </div>
  );
};

export default IndexButton;
