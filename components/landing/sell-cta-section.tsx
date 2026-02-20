import Image from "next/image"
import { ArrowRight, TrendingUp, Eye, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const benefits = [
  { icon: Eye, text: "Reach 15,000+ active buyers" },
  { icon: TrendingUp, text: "Average 23% faster sale" },
  { icon: Zap, text: "List in under 5 minutes" },
]

export function SellCtaSection() {
  return (
    <section id="sell" className="border-y border-border bg-card/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image Side */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
            <Image
              src="/images/listing-cirrus-vision.jpg"
              alt="Cirrus Vision SF50 personal jet in flight"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="rounded-xl border border-border/50 bg-background/70 p-4 backdrop-blur-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">Average Days to Sale</p>
                    <p className="mt-1 font-mono text-2xl font-bold text-foreground">18 days</p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Sell Your Aircraft
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
              Ready to Sell? We Make It Simple.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              List your aircraft on the most trusted marketplace in aviation. Our dedicated sales team,
              professional photography service, and marketing reach ensure maximum visibility for your listing.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              {benefits.map((b) => (
                <div key={b.text} className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <b.icon className="h-4.5 w-4.5" />
                  </div>
                  <p className="text-sm font-medium text-foreground">{b.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                size="lg"
                className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                List Your Aircraft
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border text-foreground hover:bg-secondary"
              >
                Get a Valuation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
