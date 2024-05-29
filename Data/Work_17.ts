import { Work } from "@/types/work";

const Work17: Work = {
  id: 17,
  title: "握手に反応するキャラクター",
  thubmnail: "/works/17.png",
  created_at: "2024-05-29",
  tag: ["個人製作", "心をうごかす"],
  description: `
大学の授業の一環で，「心をうごかす」というテーマに沿って考案・制作したものです．
人が手を模した風船デバイスを握ると，その握る強さに応じてバーチャルキャラクターの応答が変化します．
これにより，握手を通じてコミュニケーションを取ることができ，インタラクションが生まれると考えました．
  `,
  season: "大学3年生の春",
  creation_time: "2日間",
  tech: ["Unity", "C#"],
  links: [
    {
      name: "GitHub",
      url: "https://github.com/N-Keisho/ReactionToHandshake",
    },
  ],
};

export default Work17;