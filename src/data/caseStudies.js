export const caseStudies = [
  {
    slug: "task-crud-api",
    title: "Task CRUD API",
    tagline: "Started as a coursework assignment; became the foundation for a real application.",
    stack: ["Python", "FastAPI", "Pydantic", "Swagger UI"],
    problem:
      "Part of the backend track at my FlyRank internship, echoed across coursework pointing to the same core skill: REST API design. I'd already built a version in JavaScript with curl, and saw a chance to go deeper in Python. What made it stick was purpose — I needed this exact skill for a finance app I was building on the side, one that depended on solid user auth and conversation history.",
    whatIDid:
      "Kept it focused: pure Python, built around FastAPI with Pydantic for clean schemas. I chose FastAPI for its readability and the way it pairs naturally with Swagger UI and raw curl -i testing. I deliberately left out a database, using an in-memory array instead, since the goal was to demonstrate CRUD mechanics — not build a production system. That trade-off ended up teaching me the why behind real databases in a way theory hadn't.",
    outcome:
      "A fully functional Task CRUD API — create, retrieve, update, delete, plus live system stats, state resets, query filtering, and case-sensitive search. Tested thoroughly through Swagger UI and Redoc, then refactored the same logic to power the finance app I'd been building on the side.",
    bridge:
      "This was the project where I learned to separate 'assignment' from 'foundation' — building something minimal and correct enough that it could be reused, rather than something disposable that only satisfied a rubric.",
    github: "https://github.com/FathimaWarda963/BuildingCRUDAPI",
  },
  {
    slug: "self-destructing-messaging-app",
    title: "Self-Destructing Messaging App",
    tagline: "Built beyond a class assignment to prove that real privacy is achievable through layered security.",
    stack: ["AES-256", "AES-GCM", "RSA", "X25519", "HKDF", "bcrypt", "TOTP"],
    problem:
      "A real, personal frustration: messaging apps let photos disappear after one view, but never text — and I couldn't shake whether a 'deleted' message was truly gone or just sitting in a database. When my information security professor gave us project freedom, I picked the gap between what messaging apps promise about privacy and what they deliver. I made a deliberate trade-off: full non-repudiation and full confidentiality don't coexist easily in a self-destructing system, so I chose partial non-repudiation — because knowing a message truly vanished mattered more than proving who sent it.",
    whatIDid:
      "Built with defense in depth: every message gets its own ephemeral AES-256 key, encrypted with AES-GCM, wrapped with the recipient's RSA public key. I implemented a full Double Ratchet mechanism using X25519 and HKDF — the same protocol that powers Signal — going beyond the course brief. I layered in bcrypt password hashing, enforced complexity, and TOTP-based 2FA, none of which were required. At the center: once a message is read, it's stripped from storage entirely, from sender, receiver, and database alike.",
    outcome:
      "A fully working app — signup, login, 2FA, encrypted messaging, functioning end-to-end. Watching a message disappear from the JSON backend the moment it was read was the proof. It was graded above average for going beyond the standard assignment scope. Next step: a real database and group messaging.",
    bridge:
      "This project required treating a security course brief as a design constraint, not a checklist — deciding what to sacrifice (non-repudiation) in service of the actual human problem (trust that deletion is real).",
    github: "https://github.com/FathimaWarda963/SecureMessagingApp",
  },
  {
    slug: "mental-health-response-system",
    title: "Mental Health Response System",
    tagline: "Built around clinical psychology; customized to fit an individual's culture and values.",
    stack: ["Python", "scikit-learn", "pandas", "scipy", "TextBlob", "Hugging Face Transformers"],
    problem:
      "A course brief to build something meaningful using AI and search algorithms. Instead of sports or finance, I went toward psychology — I'd noticed existing mental health apps like Wysa and Reflectly stopped at clinical frameworks and never accounted for who a person actually is: their ethnicity, spirituality, cultural lens. I wanted those dimensions treated as real, not optional.",
    whatIDid:
      "Python backbone using scikit-learn, pandas, and scipy for pattern detection, paired with TextBlob and a Hugging Face transformer for emotion detection — with a simpler fallback so the system never broke without the advanced model. For response selection, I implemented Best-First Search, Depth-Limited Search, and a context-aware search across a decision graph, weighing mood history, not just the current message. On top, cultural and spiritual response modifiers shifted tone and framing based on what a person valued.",
    outcome:
      "A genuinely responsive companion: the interface shifts color with detected mood, responses pair with actionable coping mechanisms, and cultural/spiritual preferences shape the language used. Users could journal and track mood over time, with flagging for concerning trends. Scored well above average for taking personalization seriously as a missing layer in mental health tools.",
    bridge:
      "This is where personalization, emotional context, and technical implementation had to coexist in the same system — the clearest case of pairing a technical method with real human context rather than applying a generic model.",
    github: "https://github.com/FathimaWarda963/MentalHealthApp",
  },
  {
    slug: "kaaviakhdar-plant-health",
    title: "KaaviAkhdar — Plant Health Monitor",
    tagline: "Practiced the pillars of OOP — delivered a real planting decision.",
    stack: ["Java", "OOP", "Java GUI"],
    problem:
      "A course requirement, but I chose to build it at the intersection of plants and code — a plant health monitoring app that would recommend the best growing environment for a given plant and region, based on temperature and other conditions. Tested against a fixed set of hardcoded data, without an external database, since the plant domain wasn't actually the thing being tested.",
    whatIDid:
      "Built in Java — my first real chance to practice the four pillars of OOP: encapsulation, abstraction, inheritance, and polymorphism. The plant-recommendation logic was intentionally simple, including a GUI built in Java itself, because the focus wasn't the database or data scale — it was proving I understood OOP through something concrete rather than a textbook exercise.",
    outcome:
      "A working, user-facing tool — someone picks a plant (say, olive) and a region, and gets a real recommendation on whether to go ahead with planting. Simple, but genuinely useful — proof that OOP concepts had actually landed, not just been read about.",
    bridge:
      "Unlike the other three projects, this one didn't start with a domain problem I wanted to solve — it started with a technical skill I wanted to learn, and I chose the plant domain deliberately as something concrete to anchor it in.",
    github: "https://github.com/FathimaWarda963/Plant-Health-Monitoring",
  },
  {
    slug: "velora",
    title: "VELORA — Luxury E-Commerce Platform",
    tagline: "Built a frontend that didn't pick a side — because the brief never did.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    problem:
      "A group MERN-stack project. The initial concept was female-targeted self-care, but to differentiate it from an existing brand like Bath & Body Works, I pushed to broaden it — gender-neutral, including children's items, expanding \"self-care\" beyond vitamins into makeup, body care, and baby care.",
    whatIDid:
      "Built the frontend and routing layer in React, including routes for login, signup, and an admin panel, alongside sales and offers pages spanning the broadened product catalog. Contributed to partial authentication implementation as part of the team's backend work.",
    outcome:
      "A fully functional shopping flow — users could sign up, log in, browse across categories, review products, add to cart, and checkout, right up to (but not including) the actual payment step. As a group project, I don't hold full rights to the codebase, so no public link — but the frontend and routing architecture were mine.",
    bridge:
      "This project meant working inside someone else's stack decision (MERN was assigned) and someone else's initial concept (female-targeted self-care) — the adaptability here was pushing a scoping decision within a team, not just solving a technical problem alone.",
    github: "",
  },
  {
    slug: "disease-spread-simulation",
    title: "Disease Spread Simulation",
    tagline: "Built to satisfy a DSA requirement. Ended up revealing how geography shapes contagion.",
    stack: ["Python", "Graph Theory", "Barabási–Albert Model", "DSA"],
    problem:
      "A DSA course requirement to adapt a graph structure and apply it to a real simulation. What started as a rubric-driven assignment became genuinely exploratory when my teammate and I decided to build two versions — a city and a village — specifically to understand how Barabási–Albert graph complexity behaves differently across settlement types.",
    whatIDid:
      "I built the village version; my teammate built the city version, using Barabási–Albert graphs for both. We varied population, spread speed, and location density as real model parameters — villages with isolated housing but shared community resources (a well, a community center) and a single hospital serving a large area; cities with denser, more distributed infrastructure. We coordinated our parts to stay cohesive — matching stage counts and structure so the two versions could be compared directly. The simulation generated 100 visual progression states tracking infection stages over time.",
    outcome:
      "The two versions revealed a real structural insight rather than just a speed difference: infection in the village consistently originated at shared communal points — despite isolated housing — while the city's more distributed infrastructure changed how and where spread concentrated. It confirmed that settlement structure, not just population size, shapes how disease moves through a network.",
    bridge:
      "This project meant translating a graph-theory course requirement into an actual epidemiological argument — and coordinating a shared technical decision (graph type, stage count) across two collaborators building structurally different simulations.",
    github: "https://github.com/FathimaWarda963/DiseaseSpreadSimulation",
  },
  {
    slug: "moneymate",
    title: "MoneyMate",
    tagline: "A first project, built low-level and fast, with room I can already see to grow.",
    stack: ["C++"],
    problem:
      "My first university project, built as a group — an expense manager covering income, tax, total budgeting, savings, and cash flow tracking, alongside bill due-dates, debt tracking with deadline reminders, and expense categorization.",
    whatIDid:
      "Built collaboratively in C++ without an initial task split — we added and configured features together as we went rather than each owning a separate piece. The frontend was kept intentionally simple, since the priority was getting the underlying logic (tracking, categorization, deadlines) working correctly in a low-level language.",
    outcome:
      "It worked end-to-end — income, expenses, savings, and deadline tracking all functioned as intended. Looking back, what stands out is that we built something at that level fully from scratch, in C++, quickly, and around a genuinely unique idea for a first project. If I rebuilt it today, I'd make it more user-friendly, with real reminders and features like checkboxes for due items.",
    bridge:
      "As my first university project, this wasn't about adapting to an unfamiliar domain — it was about adapting to a completely unfamiliar way of working: building something substantial in a low-level language, collaboratively, without a structured division of labor.",
    github: "",
  },
];