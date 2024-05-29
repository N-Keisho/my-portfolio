import { Work } from "@/types/work";

const Work9: Work = {
  id: 9,
  title: "Idova",
  thubmnail: "/works/9.png",
  created_at: "2024-05-16",
  tag: ["チーム製作", "ハッカソン"],
  description: `
NRIハッカソン2023で作成した，地図型SNSです．
コンセプトは「昔懐かしい井戸端会議！大田区に住んでいる人，訪れた人みんなで井戸端会議をしちゃおう！」です．
ピンの近くに行くことで投稿の閲覧と書き込みができるようになっており，ミチ<道, 未知>との遭遇を楽しめたり、ローカルな場所での消費を促したりする，真の意味での地域密着型SNSを目指しました．
初めての本格的なハッカソンということもあり，多くのことを学べた3日間でした．
  `,
  season: "大学2年生の11月",
  creation_time: "3日間",
  tech: ["Next.js"],
  links: [
    {
      name: "ProtoPedia",
      url: "https://protopedia.net/prototype/4868",
    },
  ],
};

export default Work9;