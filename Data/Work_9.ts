import { Work } from "@/types/work";

const Work9: Work = {
  id: 9,
  title: "家族用LINEBot",
  thubmnail: "/works/9.png",
  created_at: "2024-05-16",
  tag: ["個人製作", "家族"],
  description: `
家族のために作成したLINEBotです．
スケジュールをGoogleFormで入力すると，LINEBotがGoogleSpreadSheetからデータを取得し，家族全員に通知を送ります．
また献立の登録を行うと必要な食材をリストアップしてくれる機能もあります．
家族の普段の生活をより便利にするためにはどのようにしたらよいかを考え，全員にヒアリングを行い，実装しました．
  `,
  period: "2週間",
  tech: ["GAS", "LINEBot"],
  links: [
    {
      name: "GitHub",
      url: "https://github.com/N-Keisho/LINEBotforFamily",
    },
  ],
};

export default Work9;