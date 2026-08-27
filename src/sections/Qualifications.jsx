import { content } from "../data/content";
import LeafMark from "../components/LeafMark";

export default function Qualifications() {
  const { examResults, oLevelHighlight, selfTaught, relocation, skills } =
    content.qualifications;

  return (
    <section id="qualifications" className="py-24 px-6 bg-forest/[0.03]">
      <div className="max-w-3xl mx-auto">
        <LeafMark className="w-7 h-7 text-bark mb-4" />
        <p className="uppercase tracking-widest text-sm text-sage font-semibold mb-2">
          Backup Credibility
        </p>
        <h2 className="font-display text-4xl text-forest mb-12">Qualifications</h2>

        {/* Exam results */}
        <div className="mb-10">
          <h3 className="font-semibold text-forest mb-1">{examResults.board}</h3>
          <div className="flex flex-wrap gap-3 mb-4">
            {examResults.grades.map((g) => (
              <div
                key={g.subject}
                className="border border-sage/40 rounded-xl px-4 py-2 text-sm"
              >
                <span className="text-ink/70">{g.subject}: </span>
                <span className="font-semibold text-forest">{g.grade}</span>
              </div>
            ))}
          </div>
          <p className="text-ink/80 leading-relaxed">{examResults.note}</p>
        </div>

        {/* O-Level highlight */}
        <div className="mb-10">
          <h3 className="font-semibold text-forest mb-2">O-Level</h3>
          <p className="text-ink/80 leading-relaxed">{oLevelHighlight}</p>
        </div>

        {/* Self-taught + Relocation, side by side */}
        <div className="grid sm:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="font-semibold text-forest mb-2">Self-Taught Journey</h3>
            <p className="text-ink/80 leading-relaxed text-sm">{selfTaught}</p>
          </div>
          <div>
            <h3 className="font-semibold text-forest mb-2">Relocation & SAT</h3>
            <p className="text-ink/80 leading-relaxed text-sm">{relocation}</p>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="font-semibold text-forest mb-4">Technical Skills Developed</h3>
          <div className="space-y-4">
            {skills.map((group) => (
              <div key={group.category}>
                <p className="text-sm font-medium text-bark mb-2">{group.category}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs uppercase tracking-wide bg-sage/20 text-forest px-2.5 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}