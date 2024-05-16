  import styles from "./Explanation.module.css";
  import {Work} from "@/types/work";
  const Explanation = ({work}:{work:Work}) => {

    return (
        <div className={styles.explanation}>
            <div className={styles.keys}>
              <p>Tag :</p>
              <p>Tech :</p>
              <p>Period :</p>
              {work.links.map((link) => (
                <p key={link.name}>{link.name} :</p>
              ))}
            </div>
            <div className={styles.values}>
              <p>
                {work.tag.map((t) => (
                  <a key={t}>{t} </a>
                ))}
              </p>
              <p>
                {work.tech.map((t) => (
                  <a key={t}>{t} </a>
                ))}
              </p>
              <p>{work.period}</p>
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