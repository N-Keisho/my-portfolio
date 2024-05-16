# 自分のポートフォリオ

## 目的

今までやったことを一覧にすることで，自分の成長を可視化するとともに，自分の魅力を伝える

## 伝えたいこと

- デザインに興味があること
- 様々なことに積極的に取り組んでいるということ
- 遊び心にあふれていること
- 簡素に物事を伝えられること

## デザイン

- シンプルかつ分かりやすい見た目にする
- Figma : https://www.figma.com/file/a51uDrI2zHd9pGW0V8Nx2M/%E3%83%9D%E3%83%BC%E3%83%88%E3%83%95%E3%82%A9%E3%83%AA%E3%82%AA?type=design&node-id=0%3A1&mode=design&t=6TlX2k288LNq7SSs-1

## データ追加時

- Work_.tsがテンプレート
- public/worksに画像を正方形でトリミングして保存
- Works.tsにWorkを追加する

## 耳追加時

- 縦：横が1:2となるようにする
- piskel/earsに保存する
- WorkCard.tsxとworks/[slug]/page.tsxのears_lengthを更新する

## Table

### works

- id(PK): number
- title : string
- thumbnail : string
- created_at : string
- tag : string[]
- description : string
- creation_time : string
- tech : stirng[]
- links : link[]
  - Github, Figma, Deployment

### link

- id(PK) : number
- name : string
- url : string
