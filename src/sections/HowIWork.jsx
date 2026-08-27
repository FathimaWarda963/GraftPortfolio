import { content } from "../data/content";
import LeafMark from "../components/LeafMark";

export default function HowIWork() {
  return (
    <section id="how-i-work" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <LeafMark className="w-7 h-7 text-bark mb-4" />
        <p className="uppercase tracking-widest text-sm text-sage font-semibold mb-2">
          Ties It Together
        </p>
        <h2 className="font-display text-4xl text-forest mb-4">How I Work</h2>
        <p className="text-ink/70 mb-12 max-w-xl">
          Four pillars that hold up every project on this page — even when the domain changes.
        </p>

        <div className="space-y-8">
          {content.howIWork.map((pillar, index) => (
            <div key={pillar.label} className="flex gap-5">
              <span className="font-display text-2xl text-sage w-8 shrink-0">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-semibold text-forest mb-1">{pillar.label}</h3>
                <p className="text-ink/80 leading-relaxed">{pillar.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}