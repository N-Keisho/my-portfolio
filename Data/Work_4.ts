import { Work } from "@/types/work";

const Work0: Work = {
  id: 4,
  title: "マインスイパー",
  thubmnail: "/works/4.png",
  created_at: "2024-05-16",
  tag: ["個人製作", "ゲーム"],
  description: `
アルバイト先のお子さんがマインスイーパーを作りたいと仰っていたので，テストとして作成しました．
私自身ドはまりしていたこともあったので，かなり力を入れて作成しました．
連鎖的に空いていく部分が難しかったですが，それぞれのマスが常に周りが開いているかどうかの判定を行うことで解決しました．
マスが連鎖的に空いていく様は非常に気持ちがよく，満足感があります．
  `,
  period: "2日間",
  tech: ["Scratch"],
  links: [
    {
      name: "Scratch",
      url: "https://scratch.mit.edu/projects/822756464/",
    },
  ],
};

export default Work0;