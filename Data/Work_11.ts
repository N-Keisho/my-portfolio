import { Work } from "@/types/work";

const Work11: Work = {
  id: 11,
  title: "流行語を仕分けろ！",
  thubmnail: "/works/11.png",
  created_at: "2024-05-16",
  tag: ["個人製作", "ゲーム"],
  description: `
カードに書かれた流行語大賞が，指定された年代よりも大きいか小さいかを考え，左右に仕分けるゲームです．
学校の授業でJavaを学んだ際にひらめいたアイディアを実装してみました．
授業で学んだことをもっと深く理解し，活用するために作りこみを意識して作成しました．
最近流行りの左右にスワップする機能を作ってみたかったというのもあります．
流行語大賞はPythonにてスクレイピングして取得しています．
  `,
  season: "大学2年生の1月",
  creation_time: "5日間",
  tech: ["Java"],
  links: [
    {
      name: "GitHub",
      url: "https://github.com/N-Keisho/Separate-Buzzwords-of-the-year",
    },
  ],
};

export default Work11;
