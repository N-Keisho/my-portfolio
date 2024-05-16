import { Work } from "@/types/work";

const Work6: Work = {
  id: 6,
  title: "QRCoder",
  thubmnail: "/works/6.png",
  created_at: "2024-05-16",
  tag: ["チーム製作", "学園祭", "ゲーム"],
  description: `
サークルの仲間3人で一緒に開発したプログラミング体験アプリケーションです．
「プログラミングに触れたことのない人でも楽しく学ぶことができる」というコンセプトをもとに，カードを並び替えるだけで簡単にコーディングができるようになっています．
初めてのチーム製作のため様々な苦労がありましたが，無事に完成し，当日は小学生から大人の方まで様々な方に楽しんでいただくことができました．
私はUnityを担当しましたが，入力されたコードを解釈して実行する部分が一番大変でした．
  `,
  season: "大学2年生の9月",
  creation_time: "1ヶ月",
  tech: ["Unity", "Python"],
  links: [
    {
      name: "UnityRoom",
      url: "https://unityroom.com/games/qrcoder",
    },
    {
      name: "GitHub",
      url: "https://github.com/N-Keisho/QRCoder",
    },
  ],
};

export default Work6;