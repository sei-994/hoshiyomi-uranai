import type { Metadata } from "next";
import TarotDeck from "@/components/tarot/TarotDeck";

export const metadata: Metadata = {
  title: "あの人の気持ちタロット | 無料で本格三枚引き",
  description:
    "気になるあの人は今あなたをどう思ってる？タロットカードが相手の本音・現在の気持ち・今後の展開を映し出します。完全無料。",
};

export default function TarotPage() {
  return (
    <div className="pt-20 pb-24">
      {/* Hero */}
      <div className="mb-10 text-center">
        <span className="mb-2 inline-block text-4xl">🃏</span>
        <h1 className="text-shimmer mb-2 text-2xl font-bold">あの人の気持ちタロット</h1>
        <p className="text-sm text-foreground/50">
          あの人の本音を3枚のカードが映し出す
        </p>
        <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
      </div>

      <TarotDeck />
    </div>
  );
}
