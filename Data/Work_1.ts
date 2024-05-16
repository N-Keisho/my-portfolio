import { Work } from "@/types/work";

const Work1: Work = {
  id: 1,
  title: "高校のクラスの文化祭用HP",
  thubmnail: "/works/1.png",
  created_at: "2024-05-16",
  tag: ["個人製作", "文化祭"],
  description: `
  高校生時代に作成した，私の原点となるホームページです．
  当時はプログラミングなどを勉強したことがなく，様々なサイトを参照しながら必死に作成しました．
  環境構築の知識もなかったため，Windowsに標準搭載されているメモ帳でコーディングを行いました．
  コンセプトは「2000年代当初のホームページ」で，古めかしくも懐かしいデザインを意識しています．
  広告を触ると出てくる詐欺サイトは，私のお気に入りの要素です．
  `,
  period: "2週間",
  tech: ["HTML", "CSS"],
  links: [
    {
      name: "Deploy",
      url: "https://n-keisho.github.io/Kunitachi_72600HP/",
    },
    {
      name: "GitHub",
      url: "https://github.com/N-Keisho/Kunitachi_72600HP",
    },
  ],
};

export default Work1;
