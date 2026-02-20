import { Clock, Gauge, Settings, Fuel, Shield, FileCheck } from "lucide-react"

const stats = [
  { label: "Total Time", value: "1,247 hrs", sublabel: "TTSN", icon: Clock },
  { label: "Engine Time", value: "423 hrs", sublabel: "SMOH", icon: Gauge },
  { label: "Prop Time", value: "423 hrs", sublabel: "SPOH", icon: Settings },
  { label: "Registration", value: "Standard", sublabel: "Category", icon: FileCheck },
  { label: "Airworthiness", value: "Current", sublabel: "Status", icon: Shield },
  { label: "Fuel Type", value: "100LL", sublabel: "AVGAS", icon: Fuel },
]

export function QuickStats() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="group relative overflow-hidden rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
        >
          <div className="absolute -right-2 -top-2 text-primary/[0.06] transition-colors group-hover:text-primary/10">
            <stat.icon className="h-16 w-16" strokeWidth={1} />
          </div>
          <p className="text-xs text-muted-foreground">{stat.label}</p>
          <p className="mt-1 font-mono text-lg font-semibold text-foreground">{stat.value}</p>
          <p className="mt-0.5 text-[11px] uppercase tracking-wider text-muted-foreground/70">{stat.sublabel}</p>
        </div>
      ))}
    </div>
  )
}
