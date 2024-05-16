import { Work } from "@/types/work";

const Work5: Work = {
  id: 5,
  title: "4x4x4 LEDキューブ",
  thubmnail: "/works/5.png",
  created_at: "2024-05-16",
  tag: ["個人製作", "回路"],
  description: `
4x4x4のLEDキューブです．
LEDの点灯アニメーションを作成する際，Arduinoのメモリ容量が不足することがありましたが，アニメーションのデータを一度16進数に変換し，それをArduinoに入力することでメモリ容量を節約しました．
一方で人間に扱いにくいデータ形式になってしまったので，Unityで作成ツールを製作し，簡単にアニメーションを生成できるようにしました．
詳しくはNotionにすべて記載しています．
なかなかの力作ですが，実際に工作できていないのが心残りです．
いつか作りたいです．
  `,
  season: "大学2年生の8月",
  creation_time: "2週間",
  tech: ["Arduino", "Unity", "C#"],
  links: [
    {
      name: "Tinkercad",
      url: "https://www.tinkercad.com/things/1v2cffgrv3x-444ledcompletehexinput?sharecode=nKlRUbmuaqViyX-ld6ishApYxzf9GstTOkEkcM4kiz8",
    },
    {
      name: "Notion",
      url: "https://keisho.notion.site/4-4-4LED-087fe1912d3c4dfe8a2fc35c10fecf36",
    },
  ],
};

export default Work5;