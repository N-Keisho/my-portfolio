import { Work } from "@/types/work";

const Work8: Work = {
  id: 8,
  title: "Make Picolabos",
  thubmnail: "/works/8.png",
  created_at: "2024-05-16",
  tag: ["個人製作", "ゲーム"],
  description: `
学園祭に展示するため，1日で作成したものです．
キー操作はスペースキー押下のみで，アイテムを取りつつ，隕石を避けるシンプルなゲームとなっています．
入力を最小限にしたワンボタンゲームに興味があり，そのうえでどれだけ楽しく遊びやすいゲームを作れるかを意識して作成しました．
当日は多くの人に遊んでいただき，好評とバグ報告をいただきました．
  `,
  season: "大学2年生の10月",
  creation_time: "1日",
  tech: ["Unity", "C#"],
  links: [
    {
      name: "UnityRoom",
      url: "https://unityroom.com/games/makepicolabos",
    },
    {
      name: "GitHub",
      url: "https://github.com/N-Keisho/MakePicolabos",
    },
  ],
};

export default Work8;