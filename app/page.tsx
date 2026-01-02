import { Github, Linkedin, Mail, FileText, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Nav } from "@/components/nav"
import { ProjectCard } from "@/components/project-card"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-accent selection:text-accent-foreground">
      <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Sidebar */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/3 lg:flex-col lg:justify-between lg:py-24">
            <div>
              {/* Updated image treatment with a subtle grayscale filter and refined container */}
              <div className="mb-8 h-28 w-28 overflow-hidden rounded-full ring-1 ring-foreground/10 ring-offset-4 ring-offset-background">
                <Image
                  src="/alex-portrait.jpg"
                  alt="Alex Mureti Maingi"
                  width={112}
                  height={112}
                  className="h-full w-full object-cover grayscale contrast-[1.1] hover:grayscale-0 transition-all duration-500"
                  priority
                />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Alex Mureti Maingi</h1>
              <h2 className="mt-4 text-lg font-medium tracking-tight text-accent sm:text-xl uppercase tracking-widest">
                Software Engineer
              </h2>
              <p className="mt-6 max-w-xs leading-relaxed text-muted-foreground text-pretty">
                I architect and deploy high-performance frontend systems with a focus on technical clarity and
                engineering discipline.
              </p>

              <div className="mt-12">
                <Nav />
              </div>
            </div>

            <ul className="mt-12 flex items-center gap-6" aria-label="Social media links">
              <li>
                <Link
                  href="https://github.com/AlexMureti"
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github size={20} />
                  <span className="sr-only">GitHub</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/alex-maingi-18084b373/"
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin size={20} />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:alexmkmaingi@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail size={20} />
                  <span className="sr-only">Email</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/cv.pdf"
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <FileText size={20} />
                  <span className="sr-only">Resume</span>
                </Link>
              </li>
            </ul>
          </header>

          {/* Content */}
          <div className="pt-24 lg:w-3/5 lg:py-24">
            {/* About */}
            <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">About</h2>
              </div>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I focus on building systems that are{" "}
                  <span className="text-foreground font-medium">understandable, maintainable, and deployable</span>. I
                  don't chase tools for their own sake; I care about how things work and why decisions are made.
                </p>
                <p>
                  My engineering philosophy is grounded in <span className="text-foreground">fundamentals</span>.
                  Whether it's architecting a component library or refactoring a complex state machine, I prioritize
                  clarity over cleverness. I view AI as a powerful assistant that augments engineering discipline, not
                  as a replacement for deep technical understanding.
                </p>
                <p>
                  Currently, I'm deepening my expertise in frontend architecture while expanding into full-stack systems
                  and systems-level thinking.
                </p>
              </div>
            </section>

            {/* Projects */}
            <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">Projects</h2>
              </div>
              <div className="space-y-0">
                <ProjectCard
                  name="Medi0ne"
                  description="A specialized pharmaceutical inventory and health product platform built for streamlined discovery."
                  problem="Created a high-fidelity interface for managing medicine categories and inventory with a focus on trust and clarity."
                  built={[
                    "Dynamic category filtering",
                    "Mobile-first inventory UI",
                    "Production Netlify deployment",
                    "Component-driven structure",
                  ]}
                  tags={["React", "Vite", "Tailwind"]}
                  live="https://medi0ne-pharmacy.netlify.app/"
                  github="https://github.com/AlexMureti/Medi0ne"
                />
                <ProjectCard
                  name="Factoraised Group"
                  description="A comprehensive car dealership and spare parts marketplace with advanced filtering logic."
                  problem="Architected a system to handle two distinct product types (vehicles vs parts) within a unified user journey."
                  built={[
                    "Complex state management",
                    "Asset-heavy performance tuning",
                    "Multi-stage filter architecture",
                    "Scalable routing pattern",
                  ]}
                  tags={["React", "State Management", "Netlify"]}
                  live="https://factoraised-group.netlify.app/"
                  github="https://github.com/AlexMureti/Factoraised-Group-Website"
                />
                <ProjectCard
                  name="La-Satarah"
                  description="High-fidelity product showcase for herbal exports, emphasizing branding and visual storytelling."
                  problem="Balanced rich media integration (background video/animations) with strict performance requirements for international trade."
                  built={[
                    "Media optimization pipeline",
                    "Animation-driven UI logic",
                    "Product detail abstraction",
                    "Visual-first architecture",
                  ]}
                  tags={["React", "Animation", "UI/UX"]}
                  live="https://la-satarah.netlify.app/"
                  github="https://github.com/AlexMureti/La-satarah"
                />
              </div>
            </section>

            {/* Engineering Approach */}
            <section id="approach" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">Approach</h2>
              </div>
              <div className="border-l border-foreground/10 pl-6 py-2">
                <div className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground pt-1.5">Focus</span>
                    <div className="md:col-span-3">
                      <h3 className="text-xl font-medium mb-2">Clarity over Complexity</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        I approach every feature by first understanding the underlying data flow. I build components
                        that are easy to delete, easy to move, and easy to understand for the next engineer.
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground pt-1.5">Tools</span>
                    <div className="md:col-span-3">
                      <h3 className="text-xl font-medium mb-2">AI-Assisted Discipline</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        I use generative AI to accelerate boilerplate and exploration, but I take full ownership of the
                        logic. I believe in manual code reviews and rigorous testing of AI-assisted outputs.
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground pt-1.5">Growth</span>
                    <div className="md:col-span-3">
                      <h3 className="text-xl font-medium mb-2">Continuous Refactoring</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Shipping is the goal, but maintenance is the reality. I actively set aside time to refactor
                        brittle patterns, improve type safety, and reduce technical debt.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">Skills</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest mb-4">Core Languages</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>TypeScript & JavaScript (ES6+)</li>
                    <li>HTML5 Semantic Markup</li>
                    <li>CSS3 & Tailwind CSS</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest mb-4">Frontend Systems</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>React & Vite</li>
                    <li>Component Architecture</li>
                    <li>State Management</li>
                    <li>Routing & Logic</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest mb-4">Tools & Deployment</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>Git & GitHub</li>
                    <li>Vercel & Netlify</li>
                    <li>Generative AI Tools</li>
                    <li>Vite Tooling</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest mb-4">Current Development</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>Backend Architecture</li>
                    <li>Advanced TypeScript Systems</li>
                    <li>AI Integration Patterns</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section id="contact" className="pb-24">
              <div className="border-t pt-12">
                <h2 className="text-3xl font-medium tracking-tight mb-4">Get in touch.</h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-md">
                  I'm currently open to frontend and junior full-stack opportunities where I can contribute to
                  production systems.
                </p>
                <Link
                  href="mailto:alexmkmaingi@gmail.com"
                  className="inline-flex items-center gap-2 text-foreground font-medium group text-xl"
                >
                  alexmkmaingi@gmail.com
                  <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
                </Link>

                <footer className="mt-24 pt-8 border-t flex flex-col sm:flex-row justify-between gap-4 text-xs text-muted-foreground uppercase tracking-widest">
                  <p>© 2026 Alex Mureti Maingi</p>
                  <p>Built with React & Engineering Discipline</p>
                </footer>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
