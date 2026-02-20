import Image from "next/image"
import { ArrowRight, Fuel, Users, Calculator, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

const highlights = [
  { icon: Fuel, label: "Fuel Prices" },
  { icon: Users, label: "Club Mgmt" },
  { icon: Calculator, label: "E6B Tools" },
  { icon: GraduationCap, label: "Training" },
]

export function HeroSection() {
  return (
    <section className="relative flex min-h-[100vh] items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/platform-hero.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20" />
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-4 pt-28 pb-20 text-center lg:px-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Beta -- Free to try. Account needed to save.
        </div>

        {/* Heading */}
        <h1 className="mt-8 max-w-4xl text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-7xl text-balance">
          Find Cheap Fuel.
          <br />
          Plan Flights.
          <span className="block text-primary">Manage Your Club.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base text-muted-foreground lg:text-lg leading-relaxed text-pretty">
          Built by pilots, for pilots. Quick flight planning that does the job.
          When you need more -- {"ForeFlight's"} there. For quick planning -- {"we're"} here.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            size="lg"
            className="h-12 gap-2 rounded-xl bg-primary px-8 text-primary-foreground hover:bg-primary/90"
          >
            Start Free
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-12 rounded-xl border-border px-8 text-foreground hover:bg-secondary"
            asChild
          >
            <a href="#modules">Explore Modules</a>
          </Button>
        </div>

        {/* Module Highlights */}
        <div className="mt-16 grid w-full max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="flex flex-col items-center gap-2.5 rounded-xl border border-border/60 bg-card/40 px-4 py-5 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-card/60"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <h.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-xs font-medium text-foreground">{h.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-8 w-5 items-start justify-center rounded-full border border-muted-foreground/30 p-1">
          <div className="h-1.5 w-1 animate-bounce rounded-full bg-primary" />
        </div>
      </div>
    </section>
  )
}
