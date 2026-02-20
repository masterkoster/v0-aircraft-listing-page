import { Fuel, Users, Calculator, GraduationCap, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const modules = [
  {
    icon: Fuel,
    title: "Fuel Saver",
    tagline: "Find cheapest 100LL",
    description:
      "Compare fuel prices across airports, plan multi-stop routes for the best deal, and search by ICAO identifier. Stop overpaying at the pump.",
    features: [
      "Search airports by ICAO",
      "Compare fuel prices",
      "Plan multi-stop routes",
      "Home state free, all 50 states with Pro",
    ],
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderHover: "hover:border-primary/50",
  },
  {
    icon: Users,
    title: "Flying Club",
    tagline: "Manage shared aircraft",
    description:
      "Everything your club needs in one place. Schedule bookings, track flight hours, handle billing, and keep everyone on the same page.",
    features: [
      "Schedule bookings",
      "Track flight hours",
      "Handle billing",
      "Member management",
    ],
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderHover: "hover:border-primary/50",
  },
  {
    icon: Calculator,
    title: "E6B Flight Computer",
    tagline: "Aviation calculator",
    description:
      "All the calculations you need in the air and on the ground. Wind correction angles, fuel burn estimates, unit conversions, and more.",
    features: [
      "Wind correction angles",
      "Fuel burn estimates",
      "Unit conversions",
      "Density altitude",
    ],
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderHover: "hover:border-primary/50",
  },
  {
    icon: GraduationCap,
    title: "Training Tracker",
    tagline: "Track PPL progress",
    description:
      "Stay on top of your training milestones, log hours, and track your journey from student to certified pilot with visual progress indicators.",
    features: [
      "Visual progress bars",
      "Hour tracking",
      "Milestone checklists",
      "Instructor notes",
    ],
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderHover: "hover:border-primary/50",
  },
]

export function FeaturedListings() {
  return (
    <section id="modules" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Platform Modules
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
            Ready to try a module? Just click below.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground leading-relaxed">
            Each module is purpose-built for a specific part of your flying life.
            Use one or use them all.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {modules.map((mod, i) => (
            <div
              key={mod.title}
              className={`group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card p-7 transition-all duration-300 ${mod.borderHover} hover:shadow-lg hover:shadow-primary/5`}
            >
              {/* Step watermark */}
              <span className="absolute right-5 top-4 font-mono text-6xl font-bold text-foreground/[0.03]">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="flex items-start gap-4">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${mod.bgColor} ${mod.color} transition-colors group-hover:bg-primary group-hover:text-primary-foreground`}>
                  <mod.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground">{mod.title}</h3>
                  <p className="mt-0.5 text-sm text-primary font-medium">{mod.tagline}</p>
                </div>
              </div>

              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                {mod.description}
              </p>

              <ul className="mt-5 flex flex-col gap-2">
                {mod.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2.5 text-sm text-foreground/80">
                    <Check className="h-3.5 w-3.5 shrink-0 text-primary" />
                    {feat}
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-5 border-t border-border">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                >
                  Try {mod.title}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
