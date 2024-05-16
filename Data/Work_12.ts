import { Work } from "@/types/work";

const Work12: Work = {
  id: 12,
  title: "卒業メンターに贈るゲーム",
  thubmnail: "/works/12.png",
  created_at: "2024-05-16",
  tag: ["チーム開発", "アルバイト"],
  description: `
アルバイト先の卒業生に感謝の気持ちを込めて作成したゲームです．
卒業生が全員登場し，それぞれの特徴を生かしたステージをクリアしていくゲームに仕上がりました．
私はアイディア出し（原案）と，最終バトルのシーンを担当しています．
教室のメンバー全員（総勢19名）で協力して作成しました．
過去にないほど多くのメンバーで作成したため，その難しさと面白さを実感できるよい経験となりました．
まだUniryRoomに公開できていませんが，いつか公開できるようにしたいです．
  `,
  season: "大学2年生の3月",
  creation_time: "1ヶ月",
  tech: ["Unity", "MagicaVoxel", "C#", "Blender"],
  links: [
    {
      name: "GitHub",
      url: "https://github.com/N-Keisho/ForGraduate2024_Games",
    },
  ],
};

export default Work12;