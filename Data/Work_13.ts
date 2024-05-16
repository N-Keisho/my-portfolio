import { Work } from "@/types/work";

const Work13: Work = {
  id: 13,
  title: "工学院ハッカソンHP",
  thubmnail: "/works/13.png",
  created_at: "2024-05-15",
  tag: ["個人作成"],
  description: `
私が中心となって活動している工学院ハッカソンのホームページです．
ハッカソンの概要やスケジュール，イベントの詳細などを掲載しています．
フロントエンドのデザインから設計，実装までを一貫して一人で行った初めてのプロジェクトです．
Next.jsを用いてSSGを行い，高速なページ遷移を実現しています．
バックエンドはハッカソンの運営メンバーにお願いし，Golangで実装してもらいました．
バグや改善点が多発し，困難な部分も多かったですが，それを乗り越えて完成させることができました．
これからもよりよいホームページにしていきたいと考えています．
  `,
  period: "2週間",
  tech: ["Next.js", "Figma"],
  links: [
    {
      name: "Deploy",
      url: "https://hackathon.kogcoder.com/",
    },
    {
      name: "GitHub",
      url: "https://github.com/N-Keisho/kogakuin-hackathon-homepage",
    },
    {
        name: "Figma",
        url: "https://www.figma.com/design/X37QP7eZzdiOPszBcIExbq/KogakuinHackathon?node-id=0%3A1&t=QD34T1iVgC8nFmAi-1",
    }
  ],
};

export default Work13;