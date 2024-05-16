import { Work } from "@/types/work";

const Work3: Work = {
  id: 3,
  title: "れふのめがね攻防戦",
  thubmnail: "/works/3.png",
  created_at: "2024-05-16",
  tag: ["個人製作", "ゲーム"],
  description: `
卒業するアルバイト先の先輩のために作成した，Scratch製の対戦ゲームです．
二人のプレイヤーがそれぞれ，「眼鏡をとる手」と「逃げる眼鏡」を操作し，手は眼鏡を取れば，眼鏡は手から逃げ切れば勝利になります．
素材もすべて自作しているのが，こだわりポイントです．
  `,
  period: "3日間",
  tech: ["Scratch", "piskel"],
  links: [
    {
      name: "Scratch",
      url: "https://scratch.mit.edu/projects/819835243/",
    },
  ],
};

export default Work3;