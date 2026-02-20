"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  { src: "/images/aircraft-hero.jpg", alt: "Aircraft exterior on tarmac at golden hour" },
  { src: "/images/aircraft-cockpit.jpg", alt: "Modern glass cockpit with Garmin avionics" },
  { src: "/images/aircraft-interior.jpg", alt: "Luxurious leather cabin interior" },
  { src: "/images/aircraft-exterior.jpg", alt: "Aircraft side profile with mountain backdrop" },
]

export function ImageGallery() {
  const [activeIndex, setActiveIndex] = useState(0)

  const goTo = (index: number) => {
    setActiveIndex((index + images.length) % images.length)
  }

  return (
    <div className="flex flex-col gap-3">
      {/* Main Image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-border">
        <Image
          src={images[activeIndex].src}
          alt={images[activeIndex].alt}
          fill
          className="object-cover transition-all duration-500"
          priority
          sizes="(max-width: 768px) 100vw, 60vw"
        />
        <button
          onClick={() => goTo(activeIndex - 1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-background/70 p-2 text-foreground backdrop-blur-sm transition-colors hover:bg-background/90"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => goTo(activeIndex + 1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-background/70 p-2 text-foreground backdrop-blur-sm transition-colors hover:bg-background/90"
          aria-label="Next image"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
        <div className="absolute bottom-3 right-3 rounded-md bg-background/70 px-2.5 py-1 font-mono text-xs text-foreground backdrop-blur-sm">
          {activeIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`relative aspect-[16/9] w-1/4 overflow-hidden rounded-lg border-2 transition-all ${
              i === activeIndex
                ? "border-primary ring-1 ring-primary/30"
                : "border-border opacity-60 hover:opacity-90"
            }`}
            aria-label={`View image ${i + 1}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="15vw"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
