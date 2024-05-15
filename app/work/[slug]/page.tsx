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
  return (
    <div>
      <HeadersWork />
      <div className={styles.container}>
        <div className={styles.thumbnail}>
          <Image
            src={work.thubmnail}
            alt={work.title}
            className={styles.image}
            layout="responsive"
            width={200}
            height={200}
          />
        </div>
        <div className={styles.div}>
          <h1>{work.title}</h1>
          <p className={styles.tag}>{work.tag}</p>
          <p className={styles.description}>{work.description}</p>
          <div className={styles.keys}>
            <p>Period :</p>
            <p>Tech :</p>
            {work.links.map((link) => (
              <p key={link.name}>{link.name} :</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
