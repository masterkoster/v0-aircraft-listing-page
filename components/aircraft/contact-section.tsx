"use client"

import { Phone, Mail, MessageSquare, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section className="rounded-xl border border-border bg-card p-6">
      <h2 className="text-lg font-semibold text-foreground">Contact Seller</h2>

      <div className="mt-4 flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
          CA
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Cirrus Aviation Partners</p>
          <p className="text-xs text-muted-foreground">Authorized Dealer</p>
        </div>
      </div>

      <div className="mt-5 space-y-2.5">
        <Button className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
          <MessageSquare className="h-4 w-4" />
          Contact Seller
        </Button>
        <Button
          variant="outline"
          className="w-full gap-2 border-primary/30 text-primary hover:bg-primary/10 hover:text-primary"
          size="lg"
        >
          <Send className="h-4 w-4" />
          Make an Offer
        </Button>
      </div>

      <div className="mt-5 space-y-3 border-t border-border pt-5">
        <a
          href="tel:+14805551234"
          className="flex items-center gap-3 rounded-lg p-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <Phone className="h-4 w-4 text-primary" />
          (480) 555-1234
        </a>
        <a
          href="mailto:sales@cirruspartners.com"
          className="flex items-center gap-3 rounded-lg p-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <Mail className="h-4 w-4 text-primary" />
          sales@cirruspartners.com
        </a>
      </div>
    </section>
  )
}
