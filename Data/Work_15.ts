import { Work } from "@/types/work";

const Work15: Work = {
  id: 15,
  title: "ポートフォリオサイト",
  thubmnail: "/works/15.png",
  created_at: "2024-05-16",
  tag: ["個人製作", "ポートフォリオ"],
  description: `
今までに製作した作品を一覧できるようにしたいと思い，作成しました．
サイトを作ることで，自分のスキルをアピールできると同時に，自分の成長を可視化できるようになりました．
このサイトを作るうえで意識したのは，「一覧性」と「見やすさ」と「遊び心」です．
ゆえにドットをモチーフにして，楽しく見やすいサイトを目指しました．
デザインがお気に入りで，非常に満足感のある仕上がりとなりました．
今後もよいアイディアが浮かんだ際には更新して，魅力的なサイトにしていきたいです．
  `,
  period: "5日間",
  tech: ["Next.js", "TypeScript", "Vercel"],
  links: [
    {
      name: "Deploy",
      url: "https://www.n-keisho.com/",
    },
    {
      name: "GitHub",
      url: "https://github.com/N-Keisho/my-portfolio",
    },
    {
        name: "Figma",
        url: "https://www.figma.com/design/a51uDrI2zHd9pGW0V8Nx2M/%E3%83%9D%E3%83%BC%E3%83%88%E3%83%95%E3%82%A9%E3%83%AA%E3%82%AA?t=kTi7nxfTvtnw87VL-1"
    }
  ],
};

export default Work15;