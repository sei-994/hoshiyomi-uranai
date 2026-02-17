import Link from "next/link";

const features = [
  {
    href: "/tarot",
    icon: "🃏",
    title: "あの人の気持ちタロット",
    description: "気になるあの人は今、あなたをどう思ってる？タロットカードが本音を映し出します",
    cta: "カードを引く",
  },
  {
    href: "/daily",
    icon: "💗",
    title: "今日の恋愛運",
    description: "12星座別の恋愛運を毎日更新。出会い運・アプローチのタイミングをチェック",
    cta: "恋愛運を見る",
  },
  {
    href: "/numerology",
    icon: "💫",
    title: "恋愛タイプ診断",
    description: "生年月日から恋愛傾向を分析。あなたの恋のパターンと理想の相手がわかります",
    cta: "診断する",
  },
  {
    href: "/compatibility",
    icon: "💕",
    title: "ふたりの恋愛相性",
    description: "気になるあの人との恋愛相性を数秘術で徹底分析。相性スコアと攻略法を公開",
    cta: "相性を調べる",
  },
];

export default function HomePage() {
  return (
    <div className="pt-14">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-4 py-20 text-center md:py-32">
        <div className="animate-float mb-6 text-6xl">💘</div>
        <h1 className="text-shimmer mb-4 text-3xl font-bold tracking-wider md:text-4xl">
          恋愛占いラボ
        </h1>
        <p className="mb-2 text-sm text-foreground/60 md:text-base">
          あの人の気持ち、恋の行方を占う
        </p>
        <p className="mb-4 text-xs text-foreground/40">
          恋愛攻略研究家・タケシ監修 ── 完全無料
        </p>
        <p className="mb-8 max-w-md text-xs leading-relaxed text-foreground/50">
          マッチングアプリで100連敗から理想の彼女をゲットした
          恋愛研究家が監修する、恋に本気のあなたのための占いサイト
        </p>
        <Link
          href="/tarot"
          className="glow-gold rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-8 py-3 text-sm font-bold text-mystic-900 transition-all hover:scale-105 hover:shadow-lg"
        >
          あの人の気持ちを占う
        </Link>
      </section>

      {/* Divider */}
      <div className="mx-auto h-px w-48 bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      {/* Features */}
      <section className="mx-auto max-w-3xl px-4 py-16">
        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((f) => (
            <Link
              key={f.href}
              href={f.href}
              className="group rounded-2xl border border-mystic-700/30 bg-surface/50 p-6 backdrop-blur-sm transition-all hover:border-gold-500/30 hover:bg-surface-light/50"
            >
              <span className="mb-3 block text-3xl">{f.icon}</span>
              <h2 className="mb-2 text-base font-bold text-foreground transition-colors group-hover:text-gold-400">
                {f.title}
              </h2>
              <p className="mb-4 text-xs leading-relaxed text-foreground/50">
                {f.description}
              </p>
              <span className="text-xs font-bold text-gold-500/70 transition-colors group-hover:text-gold-400">
                {f.cta} →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto h-px w-48 bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      {/* About */}
      <section className="mx-auto max-w-xl px-4 py-16 text-center">
        <h2 className="mb-4 text-lg font-bold text-gold-400">恋愛占いラボとは？</h2>
        <p className="text-sm leading-relaxed text-foreground/60">
          「非モテでも正しい戦略で必ず変われる」をモットーに、
          恋愛攻略研究家・タケシが監修する恋愛特化の占いサイトです。
          タロット占い、恋愛運、恋愛タイプ診断、相性診断──
          すべて完全無料であなたの恋を後押しします。
        </p>
        <div className="mt-6 rounded-xl border border-mystic-700/30 bg-surface/50 p-4">
          <p className="text-xs text-foreground/50">
            📱 Xでも恋愛攻略情報を発信中
          </p>
          <a
            href="https://x.com/Ks8MAlyoNZ39181"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block text-sm text-gold-400 hover:text-gold-300"
          >
            @恋愛攻略研究家・タケシ をフォロー →
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-24 text-center">
        <Link
          href="/tarot"
          className="inline-block rounded-full border border-gold-500/30 px-6 py-2.5 text-sm text-gold-400 transition-all hover:bg-gold-500/10"
        >
          今すぐ恋を占う 💘
        </Link>
      </section>
    </div>
  );
}
