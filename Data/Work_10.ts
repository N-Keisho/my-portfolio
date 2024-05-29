import { Work } from "@/types/work";

const Work10: Work = {
  id: 10,
  title: "家族用LINEBot",
  thubmnail: "/works/10.png",
  created_at: "2024-05-16",
  tag: ["個人製作", "家族"],
  description: `
家族のために作成したLINEBotです．
スケジュールをGoogleFormで入力すると，LINEBotがGoogleSpreadSheetからデータを取得し，家族全員に通知を送ります．
また献立の登録を行うと必要な食材をリストアップしてくれる機能もあります．
家族の普段の生活をより便利にするためにはどのようにしたらよいかを考え，全員にヒアリングを行い，実装しました．
  `,
  season: "大学2年生の12月",
  creation_time: "2週間",
  tech: ["GAS", "LINEBot"],
  links: [
    {
      name: "GitHub",
      url: "https://github.com/N-Keisho/LINEBotforFamily",
    },
  ],
};

export default Work10;