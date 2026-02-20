"use client"

import { useState } from "react"
import { Calendar, User, ChevronDown, ChevronUp } from "lucide-react"

export function DescriptionSection() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section className="rounded-xl border border-border bg-card p-6">
      <h2 className="text-lg font-semibold text-foreground">Description</h2>

      <div className={`relative mt-4 ${!expanded ? "max-h-36 overflow-hidden" : ""}`}>
        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
          <p>
            Exceptionally well-maintained 2018 Cirrus SR22T GTS with the Perspective+ avionics suite.
            This aircraft has been owner-flown since new and hangared at all times. All Cirrus service
            bulletins and ADs are complied with, and the aircraft is enrolled in the Cirrus Embark program.
          </p>
          <p>
            Features include air conditioning, the premium interior package with heated leather seats,
            TKS known-ice protection, EVS (Enhanced Vision System), and the Cirrus Airframe Parachute
            System (CAPS). Recent annual completed in January 2026 with no squawks.
          </p>
          <p>
            Engine is a Continental TSIO-550-K with 423 hours SMOH by Continental Factory. Hartzell
            3-blade composite propeller with 423 hours SPOH. Always on 100LL AVGAS. Complete and
            detailed logbooks from new are available for inspection.
          </p>
        </div>
        {!expanded && (
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-card to-transparent" />
        )}
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-3 flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
      >
        {expanded ? (
          <>
            Show less <ChevronUp className="h-4 w-4" />
          </>
        ) : (
          <>
            Read more <ChevronDown className="h-4 w-4" />
          </>
        )}
      </button>

      {/* Video Embed */}
      <div className="mt-6 aspect-video overflow-hidden rounded-lg border border-border bg-secondary">
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Aircraft walkthrough video"
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Meta Info */}
      <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-border pt-5 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <Calendar className="h-3.5 w-3.5" />
          Listed on Feb 10, 2026
        </span>
        <span className="flex items-center gap-1.5">
          <User className="h-3.5 w-3.5" />
          Posted by Cirrus Aviation Partners
        </span>
      </div>
    </section>
  )
}
