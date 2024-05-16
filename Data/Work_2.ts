import { Work } from "@/types/work";

const Work2: Work = {
  id: 2,
  title: "パワポ音声倍速ツール",
  thubmnail: "/works/2.png",
  created_at: "2024-05-16",
  tag: ["個人製作"],
  description: `
コロナの影響でPowerPointによるオンデマンド授業が増えたことを受け，授業の効率化を目的として作成しました．
PowerPointは拡張子をzipに変更することで中身を見ることができ，その中には音声ファイルも含まれています．
その音声ファイルをffmpegを用いて倍速編集して，zipに戻すことで，音声のみを倍速再生することができます．
学生生活の中で間違いなく一番役立ったツールです．
  `,
  season: "大学1年生の10月頃",
  creation_time: "1週間",
  tech: ["Python", "ffmpeg"],
  links: [
    {
      name: "GitHub",
      url: "https://github.com/N-Keisho/change_pptx_speed",
    },
  ],
};

export default Work2;