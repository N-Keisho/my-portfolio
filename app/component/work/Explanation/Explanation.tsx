  import styles from "./Explanation.module.css";
  import {Work} from "@/types/work";
  const Explanation = ({work}:{work:Work}) => {

    return (
        <div className={styles.explanation}>
            <div className={styles.keys}>
              <p>Period :</p>
              <p>Tech :</p>
              {work.links.map((link) => (
                <p key={link.name}>{link.name} :</p>
              ))}
            </div>
            <div className={styles.values}>
              <p>{work.period}</p>
              <p>
                {work.tech.map((tech) => (
                  <a key={tech}>{tech} </a>
                ))}
              </p>
              {work.links.map((link) => (
                <p key={link.name}>
                  <a href={link.url} target="_blank">
                    リンク
                  </a>
                </p>
              ))}
            </div>
          </div>
    );
  };

    export default Explanation;