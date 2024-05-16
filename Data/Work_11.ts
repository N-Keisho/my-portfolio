import { Work } from "@/types/work";

const Work11: Work = {
  id: 11,
  title: "PAREO",
  thubmnail: "/works/11.png",
  created_at: "2024-05-15",
  tag: ["チーム製作", "ハッカソン"],
  description: `
Open Hack U 2024 Tokyoで作成したWebアプリケーションです．
「個人に最適化されたレビューサイト」をコンセプトに，ユーザの好みを学習し，最適なお店をお勧めしてくれるようになっています．
ユーザはレビューをすればするほど，趣向が分析され，より適切なお店が提案されるようになります．
私はフロントエンジニアとして，Next.jsを用いて開発を行いました．
仲間に助けられながら，3週間で完成させることができました．
現在はバックエンドが料金の関係で動いていないので見た目だけになっています．
  `,
  season: "大学2年生の2月",
  creation_time: "3週間",
  tech: ["Next.js", "Django", "PostgreSQL"],
  links: [
    {
      name: "Deploy",
      url: "https://pareo.kogcoder.com/",
    },
    {
      name: "Figma",
      url: "https://www.figma.com/design/jlRkaOf3VOnSCNE6E4mNn3/HackU_UI%E3%82%A4%E3%83%A1%E3%83%BC%E3%82%B8?node-id=0%3A1&t=Eq8A82rqmkkm7Nyt-1",
    },
    {
      name: "Canva",
      url: "https://www.canva.com/design/DAF9VgIZKq0/Eu3OKWdVy4GlGf0EA9bQPQ/edit?utm_content=DAF9VgIZKq0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
    },
  ],
};

export default Work11;