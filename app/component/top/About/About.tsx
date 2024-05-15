import Image from "next/image";
import styles from "./About.module.css";
import Link from "next/link";

const About = () => {
  return (
    <div className={styles.div} id="about">
      <Image
        src={"/svg/about.svg"}
        alt="About"
        className={styles.image}
        width={100}
        height={100}
      />
      <section className={styles.section}>
        <p>
          ものづくりが大好きな大学3年生，永江 恵尚（ながえ
          けいしょう）です．高校生の時にWindowsのメモ帳でホームページを作ってから，プログラムに興味を持ち始めました．
        </p>
        <p>
          常に何か新しいチャレンジができないか探しており，好奇心が旺盛．知らないことを知るとすごくワクワクします．
        </p>
        <p>
          現在は工学院大学の情報学部に所属し，趣味でWebアプリケーションの開発を行っています．
        </p>
        <p>
          また，IT系サークルKogCoderの代表や初心者のためのハッカソン「工学院ハッカソン」の運営代表を務めています．
        </p>
        <p>
          - GitHub:{" "}
          <Link href="https://github.com/N-Keisho" target="_blank">
            https://github.com/N-Keisho
          </Link>
        </p>
      </section>
    </div>
  );
};

export default About;
