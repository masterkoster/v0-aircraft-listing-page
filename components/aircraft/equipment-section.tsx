import { Monitor, Wrench, Sparkles } from "lucide-react"

const avionics = [
  "Garmin Perspective+",
  "GFC 700 Autopilot",
  "GDL 69A XM Weather",
  "GTX 345 ADS-B In/Out",
  "GTS 825 TAS",
  "GMA 350c Audio Panel",
  "Synthetic Vision (SVT)",
  "SafeTaxi",
  "FliteCharts",
  "SiriusXM Weather",
]

const features = [
  "Air Conditioning",
  "TKS Known Ice",
  "CAPS Parachute",
  "Heated Seats",
  "Premium Leather Interior",
  "USB Charging Ports",
  "CO Detector",
  "Oxygen System",
]

const upgrades = [
  "Enhanced Vision System (EVS)",
  "LED Landing Lights",
  "Premium Paint Scheme",
  "Bose A20 Headsets (4)",
  "Tanis Engine Heater",
  "Precise Flight Speed Brakes",
]

function TagGroup({
  title,
  icon: Icon,
  items,
}: {
  title: string
  icon: React.ComponentType<{ className?: string }>
  items: string[]
}) {
  return (
    <div>
      <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
        <Icon className="h-4 w-4 text-primary" />
        {title}
      </h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-lg border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground transition-colors hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export function EquipmentSection() {
  return (
    <section className="rounded-xl border border-border bg-card p-6">
      <h2 className="text-lg font-semibold text-foreground">Equipment</h2>
      <div className="mt-5 space-y-6">
        <TagGroup title="Avionics" icon={Monitor} items={avionics} />
        <TagGroup title="Features" icon={Sparkles} items={features} />
        <TagGroup title="Upgrades" icon={Wrench} items={upgrades} />
      </div>
    </section>
  )
}
