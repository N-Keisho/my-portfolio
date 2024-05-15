import WorksData from "@/Data/Works";
import HeadersWork from "../../component/work/HeaderWork/HeaderWork";
import Image from "next/image";
import styles from "./page.module.css";

export function generateStaticParams() {
  return WorksData.map((work) => {
    return {
      slug: work.id.toString(),
    };
  });
}

const Page = ({ params }: { params: { slug: string } }) => {
  const work = WorksData.find((work) => work.id.toString() === params.slug);
  if (!work) return { notFound: true };
  const ears = `/piskel/ears/ears_${work.id}.png`;
  return (
    <div>
      <HeadersWork />
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
          layout="responsive"
          width={200}
          height={200}
        />
        <div className={styles.div}>
          <h1>{work.title}</h1>
          <p className={styles.tag}>{work.tag}</p>
          <p className={styles.description}>{work.description}</p>
          <div className={styles.explanation}>
            {/* <div className={styles.set}>
                <p className={styles.key_p}>Period :</p>
                <p className={styles.value_p}>{work.period}</p>
            </div>
            <div className={styles.set}>
                <p  className={styles.key_p}>Tech :</p>
                <p className={styles.value_p}>{work.tech}</p>
            </div>
            {work.links.map((link) => (
              <div className={styles.set} key={link.name}>
                <p className={styles.key_p}>{link.name} :</p>
                <p className={styles.value_p}>
                  <a href={link.url}>{link.url}</a>
                </p>
              </div>
            ))} */}

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
        </div>
      </div>
    </div>
  );
};

export default Page;
