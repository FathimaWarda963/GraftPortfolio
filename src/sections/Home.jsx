import { content } from "../data/content";
import LeafMark from "../components/LeafMark";

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 pt-20 pb-16">
      <div className="max-w-3xl mx-auto">
        <LeafMark className="w-8 h-8 text-bark mb-6" />

        <p className="uppercase tracking-widest text-sm text-sage font-semibold mb-4">
          Computer Science Undergraduate
        </p>

        <h1 className="font-display text-5xl sm:text-6xl text-forest leading-tight mb-6">
          Adaptability, proven in code.
        </h1>

        <p className="text-lg text-ink/80 leading-relaxed mb-8 max-w-xl">
          {content.bio}
        </p>

        <blockquote className="border-l-2 border-sage pl-6 mb-10 text-ink/70 italic leading-relaxed">
          {content.proofStatement}
        </blockquote>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="bg-forest text-paper px-6 py-3 rounded-full font-medium hover:bg-bark transition-colors duration-200"
          >
            See the work
          </a>
          <a
            href="#contact"
            className="border border-forest text-forest px-6 py-3 rounded-full font-medium hover:bg-forest hover:text-paper transition-colors duration-200"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}