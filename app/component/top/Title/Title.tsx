import Image from "next/image";
import styles from "./title.module.css";

const Title = () => {
    return (
        <div className={styles.div}>
            <Image src="/logo/logo.png" alt="Logo" width={400} height={400} />
            <h1 className={styles.h1}>KEISHO<br/>NAGAE</h1>
        </div>
    );
};

export default Title;