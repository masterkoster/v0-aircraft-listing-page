import { Plane, Zap, Rocket, Anchor, CircleDot, Cog } from "lucide-react"

const categories = [
  {
    icon: Plane,
    title: "Single Engine Piston",
    count: "842",
    description: "Cirrus, Cessna, Piper, Beechcraft",
  },
  {
    icon: Zap,
    title: "Multi Engine Piston",
    count: "316",
    description: "Baron, Seneca, Twin Comanche",
  },
  {
    icon: Cog,
    title: "Turboprops",
    count: "428",
    description: "King Air, Pilatus, TBM, Caravan",
  },
  {
    icon: Rocket,
    title: "Light Jets",
    count: "264",
    description: "Citation, Phenom, HondaJet",
  },
  {
    icon: CircleDot,
    title: "Mid-Size Jets",
    count: "187",
    description: "Challenger, Latitude, Praetor",
  },
  {
    icon: Anchor,
    title: "Helicopters",
    count: "203",
    description: "Robinson, Bell, Airbus, Leonardo",
  },
]

export function CategoriesSection() {
  return (
    <section className="border-y border-border bg-card/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Categories
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
            Browse by Aircraft Type
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground leading-relaxed">
            From single-engine trainers to mid-size jets, find exactly what you need.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <button
              key={cat.title}
              className="group flex items-center gap-5 rounded-xl border border-border bg-card p-5 text-left transition-all duration-300 hover:border-primary/40 hover:bg-primary/5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <cat.icon className="h-5.5 w-5.5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-foreground">{cat.title}</h3>
                  <span className="rounded-md bg-secondary px-2 py-0.5 font-mono text-xs text-muted-foreground">
                    {cat.count}
                  </span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{cat.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
