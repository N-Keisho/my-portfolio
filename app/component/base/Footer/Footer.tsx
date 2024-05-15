import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© Keisho Nagae All rights reserved.</p>
      <Link href="https://github.com/N-Keisho">
        <Image
          src={"/github-mark/github-mark-white.svg"}
          alt="GitHub"
          width={30}
          height={30}
          className={styles.image}
        />
      </Link>
    </footer>
  );
};

export default Footer;
