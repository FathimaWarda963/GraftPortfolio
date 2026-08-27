import { content } from "../data/content";
import LeafMark from "../components/LeafMark";

export default function Contact() {
  const { cta } = content;

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <LeafMark className="w-8 h-8 text-bark mb-6 mx-auto" />

        <p className="uppercase tracking-widest text-sm text-sage font-semibold mb-2">
          Ask
        </p>

        <h2 className="font-display text-4xl text-forest mb-6">
          {cta.prompt}
        </h2>

        <p className="text-ink/70 mb-8">{cta.action}</p>

        <a
          href={`mailto:${cta.email}`}
          className="inline-block bg-forest text-paper px-8 py-4 rounded-full font-medium hover:bg-bark transition-colors duration-200"
        >
          {cta.email}
        </a>
      </div>
    </section>
  );
}