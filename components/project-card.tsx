import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

interface ProjectProps {
  name: string
  description: string
  problem: string
  built: string[]
  tags: string[]
  github?: string
  live?: string
}

export function ProjectCard({ name, description, problem, built, tags, github, live }: ProjectProps) {
  return (
    <div className="group relative border-t border-border/50 py-12 first:border-t-0">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <h3 className="text-xl font-medium tracking-tight mb-4 group-hover:underline underline-offset-4 decoration-1">
            {name}
          </h3>
          <div className="flex gap-5 mt-auto">
            {live && (
              <Link
                href={live}
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5 text-xs uppercase tracking-widest font-medium"
              >
                Live <ExternalLink size={14} />
              </Link>
            )}
            {github && (
              <Link
                href={github}
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5 text-xs uppercase tracking-widest font-medium"
              >
                Code <Github size={14} />
              </Link>
            )}
          </div>
        </div>
        <div className="md:col-span-8 space-y-8">
          <p className="text-lg leading-relaxed text-balance text-foreground/90">{description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Background
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{problem}</p>
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">Key Work</h4>
              <ul className="space-y-2">
                {built.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-baseline">
                    <span className="mr-3 text-primary font-mono text-[10px] font-bold">{i + 1}.</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="rounded-none bg-muted text-[9px] uppercase tracking-widest font-bold px-2 py-0.5 border-none"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
