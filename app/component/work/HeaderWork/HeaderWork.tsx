import styles from "./HeaderWork.module.css";
import Image from "next/image";
import Link from "next/link";
const HeaderWork = () => {
  return (
    <header className={styles.header}>
      <nav>
        <Link href="/">
          <Image
            src={"/logo/logo.png"}
            alt="Logo"
            sizes="(max-width: 70px) 10vw"
            width={60}
            height={60}
          />
        </Link>
      </nav>
    </header>
  );
};

export default HeaderWork;