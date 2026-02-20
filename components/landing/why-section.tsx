import { ShieldCheck, FileSearch, Banknote, Headphones } from "lucide-react"

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Listings",
    description:
      "Every aircraft is inspected and verified by our team. We check logbooks, maintenance records, and airworthiness to give you peace of mind.",
  },
  {
    icon: FileSearch,
    title: "Transparent History",
    description:
      "Full access to maintenance logs, damage history, and ownership records. No surprises, just the facts you need to make informed decisions.",
  },
  {
    icon: Banknote,
    title: "Secure Transactions",
    description:
      "Our escrow service protects both buyers and sellers. Funds are held securely until delivery is confirmed and the pre-buy is complete.",
  },
  {
    icon: Headphones,
    title: "Concierge Support",
    description:
      "From search to close, our aviation specialists guide you through every step. Title transfer, insurance, and ferry flight coordination included.",
  },
]

export function WhySection() {
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Why SkyMarket
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
            The Trusted Way to Buy Aircraft
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground leading-relaxed">
            We have reimagined the aircraft buying experience from the ground up.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="group relative flex flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40"
            >
              {/* Step Number */}
              <span className="absolute right-5 top-4 font-mono text-5xl font-bold text-foreground/[0.04]">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
