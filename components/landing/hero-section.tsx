import Image from "next/image"
import { Search, ArrowRight, Shield, Star, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const trustStats = [
  { icon: Shield, value: "2,400+", label: "Verified Listings" },
  { icon: Star, value: "98%", label: "Satisfaction Rate" },
  { icon: Users, value: "15K+", label: "Active Buyers" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-4 pt-24 pb-16 text-center lg:px-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          New listings added daily
        </div>

        {/* Heading */}
        <h1 className="mt-8 max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-7xl text-balance">
          Find Your Next Aircraft
          <span className="block text-primary">With Confidence</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base text-muted-foreground lg:text-lg leading-relaxed text-pretty">
          The premier marketplace for buying and selling aircraft. Every listing verified,
          every transaction secured, every pilot satisfied.
        </p>

        {/* Search Bar */}
        <div className="mt-10 flex w-full max-w-2xl flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by make, model, or registration..."
              className="h-12 w-full rounded-xl border border-border bg-card/80 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground backdrop-blur-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <Button
            size="lg"
            className="h-12 gap-2 rounded-xl bg-primary px-8 text-primary-foreground hover:bg-primary/90"
          >
            Search
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Trust Stats */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {trustStats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <stat.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-mono text-lg font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
