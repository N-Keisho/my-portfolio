import { Work } from "@/types/work";

const Work18: Work = {
  id: 18,
  title: "ふくワン",
  thubmnail: "/works/18.png",
  created_at: "2024-05-15",
  tag: ["チーム製作", "ハッカソン", "受賞"],
  description: `
Open Hack U 2024 Tokyo Vol.2にて作成した，腹話術ロボットです．
世の中の言いづらいことを代弁してくれる秘密道具のようなプロダクトで，私は裁縫担当としてぬいぐるみの制作を行いました．
またプレゼンテーションも担当し，作品とプレゼンテーションが大ウケしてHappy Hacking 賞をいただくことができました．
  `,
  season: "大学3年生の夏",
  creation_time: "2週間",
  tech: ["Python", "RasberryPi"],
  links: [
    {
      name: "ProtoPedia",
      url: "https://protopedia.net/prototype/6092",
    },
    {
      name: "GitHub",
      url: "https://github.com/Hack-U-KogCoder/fuku-wan",
    },
    {
        name: "Hack U",
        url: "https://hacku.yahoo.co.jp/hacku2024_tokyo2/",
    }
  ],
};

export default Work18;