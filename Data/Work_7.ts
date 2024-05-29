import { Work } from "@/types/work";

const Work7: Work = {
  id: 7,
  title: "単語帳ツール",
  thubmnail: "/works/7.png",
  created_at: "2024-05-29",
  tag: ["個人製作", "ハッカソン"],
  description: `
Career Creation Festival 2023にて作成した単語帳ツールです．
初めてのハッカソンでしたが，メンター制度や丁寧なインプットセッションがあったため，なんとか完成させることができました．
私が他のハッカソンに参加するきっかけになった作品です．
技術的な面では，初めてJavaScriptに触れたため，非同期処理に悩まされました．
  `,
  season: "大学2年生の夏",
  creation_time: "1日",
  tech: ["HTML", "CSS", "JavaScript"],
  links: [
    {
      name: "Deploy",
      url: "https://n-keisho.github.io/flashcard/",
    },
    {
      name: "GitHub",
      url: "https://github.com/N-Keisho/flashcard",
    },
  ],
};

export default Work7;