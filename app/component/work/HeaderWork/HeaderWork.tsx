import styles from "./HeaderWork.module.css";
import Image from "next/image";
import Link from "next/link";
const HeaderWork = () => {
  return (
    <header className={styles.header}>
      <nav>
        <Link href="/#works">
          <Image
            src={"/logo/logo.png"}
            alt="Logo"
            sizes="(max-width: 70px) 10vw"
            fill
          />
        </Link>
      </nav>
    </header>
  );
};

export default HeaderWork;