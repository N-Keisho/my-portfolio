import { Work } from "@/types/work";

const Work14: Work = {
  id: 14,
  title: "総人口推移グラフ",
  thubmnail: "/works/14.png",
  created_at: "2024-05-16",
  tag: ["個人製作", "ゆめみパスポート"],
  description: `
ゆめみパスポートのフロントエンド試験に応募するために作成した，都道府県別の総人口推移グラフのSPAです．
試験には落ちてしまいましたが，制作の過程でフロントエンド開発の学びが深まり，フィードバックをもらたったことで，より良いものを作るためのヒントを得ることができました．
特にテストケースの作成や，Module CSSの使い方は，今後の開発に活かしていきたいです．
この経験を糧に再受験に向けて，もっとつよつよになります．
  `,
  season: "大学3年生の5月",
  creation_time: "1週間",
  tech: ["Next.js", "ModuleCSS"],
  links: [
    {
      name: "Deploy",
      url: "https://yumemi-pass.n-keisho.com/",
    },
    {
      name: "GitHub",
      url: "https://github.com/N-Keisho/yumemi-pass-front",
    },
    {
        name: "Figma",
        url: "https://www.figma.com/design/oWWVrEPukLptsYWheyMp1l/%E3%82%86%E3%82%81%E3%81%BF%E3%83%91%E3%82%B9%E3%83%9D%E3%83%BC%E3%83%88?node-id=0%3A1&t=kTi7nxfTvtnw87VL-1"
    }
  ],
};

export default Work14;