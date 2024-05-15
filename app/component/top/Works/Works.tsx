import styles from "./Works.module.css";
import Image from "next/image";
import WorkCard from "./WorkCard/WorkCard";
import WorksData from "@/Data/Works";

const Works = () => {
 return (
    <div className={styles.container} id="works">
      <Image
        src={"/svg/works.svg"}
        alt="Works"
        className={styles.image}
        width={100}
        height={100}
      />
      <div className={styles.works_data}>
      {
        WorksData.map((work) => (
          <WorkCard key={work.id} work={work} />
        ))
      }
      </div>
    </div>
 );
};

export default Works;