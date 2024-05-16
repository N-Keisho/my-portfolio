import { Work } from "@/types/work";
import Image from "next/image";
import styles from "./WorkCard.module.css";
import Link from "next/link";

const ears_length = 6;
const WorkCard = ({ work }: { work: Work }) => {
  const ears = `/piskel/ears/ears_${work.id%ears_length}.png`;
  return (
    <Link href={`/work/${work.id}`} legacyBehavior>
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
          {work.tag.map((t,i) => {
            if(i < 1) {
              return (
                <span key={t} className={styles.tag}>
                  {`${t} `} 
                </span>
              );
            }
          })}
          {work.tech.map((t, i) => {
            if (i < 2) {
              return (
                <span key={t} className={styles.tech}>
                  {`${t} `}
                </span>
              );
            }
          })}
        </div>
      </div>
    </Link>
  );
};

export default WorkCard;
