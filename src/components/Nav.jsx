const links = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "How I Work", href: "#how-i-work" },
  { label: "Qualifications", href: "#qualifications" },
  { label: "Get in Touch", href: "#contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur-sm border-b border-sage/40">
      <nav className="max-w-5xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
        <a href="#home" className="font-display text-lg text-forest tracking-tight">
          Fathima Warda
        </a>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-ink">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-rose transition-colors duration-200">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}