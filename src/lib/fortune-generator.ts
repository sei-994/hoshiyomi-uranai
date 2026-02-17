import { DailyFortune } from "@/types";
import { createRandom, dateSeed } from "./seed-random";

const luckyColors = [
  "レッド", "ブルー", "グリーン", "イエロー", "ピンク", "パープル",
  "オレンジ", "ゴールド", "シルバー", "ホワイト", "ネイビー", "ラベンダー",
  "コーラル", "ミント", "ベージュ", "ターコイズ",
];

const luckyItems = [
  "リップグロス", "手鏡", "アロマキャンドル", "天然石ブレスレット", "ハンカチ",
  "香水", "ペアリング", "ポストカード", "リップクリーム", "カフェラテ",
  "チョコレート", "ラブレター", "お守り", "ヘアアクセサリー", "紅茶",
  "バラの花", "入浴剤", "ドライフラワー",
];

const luckyDirections = ["北", "北東", "東", "南東", "南", "南西", "西", "北西"];

const messages: string[][] = [
  // love 1
  ["恋愛は少しお休みモード。自分磨きに集中するのが吉。", "焦らないで。今は自分を大切にする時間を過ごして。"],
  // love 2
  ["穏やかな恋の一日。さりげない優しさが相手に届きそう。", "小さなアプローチの積み重ねが効果的な日。"],
  // love 3
  ["恋愛運は安定。いつも通り自然体でいることが好印象に。", "あの人との距離が少しずつ縮まりそう。"],
  // love 4
  ["恋のチャンス到来！積極的にアプローチしてみて。", "あの人からの好意のサインを見逃さないで。"],
  // love 5
  ["最高の恋愛日和！告白や大胆な行動が成功しやすい日。", "運命的な出会いの予感。心を開いて過ごして。"],
];

const advices: string[][] = [
  ["今日はSNSをチェックするより自分の時間を大切に。", "好きな音楽を聴いてリラックスすると恋愛運UP。"],
  ["あの人の好きなものをリサーチしておくと吉。", "笑顔を心がけると、良い出会いが生まれそう。"],
  ["共通の話題を見つけて会話のきっかけを作って。", "服装やヘアスタイルを少し変えると注目度UP。"],
  ["今日はデートに誘うベストタイミング！", "あの人との共通点をアピールすると距離が縮まる。"],
  ["直感を信じてアプローチして！成功率が高い日。", "思い切った告白が運命を変えるかも。"],
];

export function generateDailyFortune(zodiacId: string, date: Date): DailyFortune {
  const seed = dateSeed(date, zodiacId);
  const rng = createRandom(seed);

  const overall = rng.int(1, 5);
  const love = rng.int(1, 5);
  const money = rng.int(1, 5);
  const work = rng.int(1, 5);
  const health = rng.int(1, 5);

  return {
    overall,
    love,
    money,
    work,
    health,
    luckyColor: rng.pick(luckyColors),
    luckyItem: rng.pick(luckyItems),
    luckyDirection: rng.pick(luckyDirections),
    message: rng.pick(messages[love - 1]),
    advice: rng.pick(advices[love - 1]),
  };
}
