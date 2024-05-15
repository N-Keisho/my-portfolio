import { Work } from "@/types/work";
import Image from "next/image";
import styles from "./WorkCard.module.css";
import Link from "next/link";

const WorkCard = ({ work }: { work: Work }) => {
  const ears = `/piskel/ears/ears_${work.id}.png`;
  return (
    <Link href={`/works/${work.id}`} legacyBehavior>
      <div className={styles.container}>
        <Image
          src={ears}
          alt="ears"
          className={styles.ears}
          width={100}
          height={100}
        />
        <Image
          src={work.thubmnail}
          alt={work.title}
          className={styles.image}
          width={200}
          height={200}
        />
        <div className={styles.centence}>
          <h3>{work.title}</h3>
          <p>{work.tag}</p>
        </div>
      </div>
    </Link>
  );
};

export default WorkCard;
