import Image from "next/image";
import styles from "./Contact.module.css";

const Contact = () => {
  const mailUser = "keisho.n.dev";
  const mailDomain = "gmail.com";
  return (
    <div className={styles.div} id="contact">
      <Image
        src={"/svg/contact.svg"}
        alt="Contact"
        className={styles.image}
        width={100}
        height={100}
      />
      <a href={`mailto:${mailUser}@${mailDomain}`}>
        <div className={styles.mail_container}>
          <Image
            src={"/svg/mail.svg"}
            alt="keisho.n.dev at gmail.com"
            className={styles.mail}
            width={100}
            height={100}
          />
        </div>
      </a>
    </div>
  );
};

export default Contact;
