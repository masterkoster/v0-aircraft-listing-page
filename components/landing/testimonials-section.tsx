import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Captain James Wright",
    role: "ATP, 12,000+ hours",
    initials: "JW",
    text: "SkyMarket made buying my Pilatus PC-12 seamless. The verification process gave me complete confidence in the purchase. Closed in under 30 days.",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    role: "Private Pilot & Owner",
    initials: "SM",
    text: "I sold my SR22 in just two weeks. The photography service and buyer matching were exceptional. I received three offers above asking price.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Fleet Manager, Atlas Aviation",
    initials: "DC",
    text: "We have acquired four aircraft through SkyMarket for our charter fleet. Their transaction management and title services are best-in-class.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Testimonials
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
            Trusted by Pilots Worldwide
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-xl border border-border bg-card p-6"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="mt-4 flex-1 text-sm text-muted-foreground leading-relaxed">
                {`"${t.text}"`}
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
