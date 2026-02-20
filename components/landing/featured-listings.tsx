import Image from "next/image"
import Link from "next/link"
import { Clock, Gauge, MapPin, ArrowRight, CheckCircle2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const listings = [
  {
    id: 1,
    title: "2022 Cirrus SR22T GTS",
    price: "$725,000",
    image: "/images/aircraft-hero.jpg",
    location: "Scottsdale, AZ",
    hours: "1,247",
    engine: "423 SMOH",
    tag: "Featured",
    verified: true,
  },
  {
    id: 2,
    title: "2019 Cessna Citation M2",
    price: "$3,450,000",
    image: "/images/listing-cessna.jpg",
    location: "Van Nuys, CA",
    hours: "890",
    engine: "890 SNEW",
    tag: "New Price",
    verified: true,
  },
  {
    id: 3,
    title: "2017 Beechcraft Bonanza G36",
    price: "$589,000",
    image: "/images/listing-bonanza.jpg",
    location: "Dallas, TX",
    hours: "2,100",
    engine: "310 SMOH",
    tag: "Popular",
    verified: true,
  },
  {
    id: 4,
    title: "2021 Pilatus PC-12 NGX",
    price: "$5,200,000",
    image: "/images/listing-pilatus.jpg",
    location: "Denver, CO",
    hours: "650",
    engine: "650 SNEW",
    tag: "Featured",
    verified: false,
  },
  {
    id: 5,
    title: "2020 Piper M600 SLS",
    price: "$2,850,000",
    image: "/images/listing-piper.jpg",
    location: "Naples, FL",
    hours: "1,050",
    engine: "1,050 SNEW",
    tag: "Just Listed",
    verified: true,
  },
  {
    id: 6,
    title: "2018 King Air 350i",
    price: "$4,750,000",
    image: "/images/listing-king-air.jpg",
    location: "Teterboro, NJ",
    hours: "1,890",
    engine: "540 SHSI",
    tag: "Reduced",
    verified: true,
  },
]

export function FeaturedListings() {
  return (
    <section id="listings" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Browse Aircraft
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
              Featured Listings
            </h2>
            <p className="mt-3 max-w-lg text-muted-foreground leading-relaxed">
              Hand-picked aircraft from verified sellers, inspected and ready for their next chapter.
            </p>
          </div>
          <Button
            variant="outline"
            className="gap-2 self-start border-border text-foreground hover:bg-secondary sm:self-auto"
          >
            View All Listings
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Listings Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((listing) => (
            <Link
              key={listing.id}
              href="/listing"
              className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={listing.image}
                  alt={listing.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />

                {/* Badges */}
                <div className="absolute left-3 top-3 flex items-center gap-2">
                  <Badge className="border-none bg-primary/90 text-primary-foreground backdrop-blur-sm">
                    {listing.tag}
                  </Badge>
                  {listing.verified && (
                    <span className="inline-flex items-center gap-1 rounded-md bg-background/70 px-2 py-0.5 text-[11px] font-medium text-foreground backdrop-blur-sm">
                      <CheckCircle2 className="h-3 w-3 text-primary" />
                      Verified
                    </span>
                  )}
                </div>

                {/* Price Overlay */}
                <div className="absolute bottom-3 right-3">
                  <span className="rounded-lg bg-background/80 px-3 py-1.5 font-mono text-lg font-bold text-foreground backdrop-blur-sm">
                    {listing.price}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-1 flex-col gap-3 p-5">
                <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                  {listing.title}
                </h3>

                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-primary/60" />
                    {listing.hours} hrs
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Gauge className="h-3.5 w-3.5 text-primary/60" />
                    {listing.engine}
                  </span>
                </div>

                <div className="mt-auto flex items-center gap-1.5 pt-3 border-t border-border text-xs text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 text-primary/60" />
                  {listing.location}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
