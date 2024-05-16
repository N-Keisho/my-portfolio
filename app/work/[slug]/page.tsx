import WorksData from "@/Data/Works";
import HeadersWork from "../../component/work/HeaderWork/HeaderWork";
import Image from "next/image";
import styles from "./page.module.css";
import Explanation from "@/app/component/work/Explanation/Explanation";
import IndexButton from "@/app/component/work/IndexButton/IndexButton";

const url = "https://n-keisho.com";
export function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const work = WorksData.find((work) => work.id.toString() === params.slug);
  if (!work)
    return {
      title: "ページが見つかりません",
      description: "ページが見つかりません",
      openGraph: {
        images: [`${url}/logo/logo.png`],
      },
    };

  return {
    title: work.title,
    description: work.description,
    image: work.thubmnail,
    openGraph: {
      title: work.title,
      description: work.description,
      image: work.thubmnail,
    },
    twitter: {
      title: work.title,
      description: work.description,
      image: work.thubmnail,
    },
  };
}

export function generateStaticParams() {
  return WorksData.map((work) => {
    return {
      slug: work.id.toString(),
    };
  });
}

const Page = ({ params }: { params: { slug: string } }) => {
  const work = WorksData.find((work) => work.id.toString() === params.slug);
  const length = WorksData.length;
  if (!work) return { notFound: true };
  const ears = `/piskel/ears/ears_${work.id}.png`;

  return (
    <>
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
          <Explanation work={work} />
        </div>
        <IndexButton index={work.id} length={length} />
      </div>
    </>
  );
};

export default Page;
