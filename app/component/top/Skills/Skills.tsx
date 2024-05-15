import Image from "next/image";
import styles from "./Skills.module.css";
import { ReactNode } from "react";
import SkillList  from "./SkillList";

const Skills = () => {
  return (
    <div className={styles.div}>
      <Image
        src={"/svg/skills.svg"}
        alt="Skills"
        className={styles.image}
        width={100}
        height={100}
      />
      <div className={styles.console_out}>
        <div className={styles.console_in}>
          {
            Object.entries(SkillList).map(([key, value]) => (
              <SkilBox key={key} title={key} list={value} />
            ))
          }
        </div>
      </div>
      <div className={styles.description}>
        <p>☆：触れたことがある</p>
        <p>☆☆：使える気がする</p>
        <p>☆☆☆：得意気になっている</p>
      </div>
    </div>
  );
};

export default Skills;

const SkilBox = ({ title, list }: { title: string; list: Record<string, ReactNode> }) => {
  return (
    <div className={styles.skill_box}>
      <h3>- {title} -</h3>
      <div className={styles.skills}>
        <div className={styles.skill_name}>
          {Object.entries(list).map(([key]) => (
            <p key={key}>{key} : </p>
          ))}
        </div>
        <div className={styles.skill_level}>
          {Object.entries(list).map(([key, value]) => (
            <p key={key}>{value}</p>
          ))}
        </div>
      </div>
    </div>
  );
};