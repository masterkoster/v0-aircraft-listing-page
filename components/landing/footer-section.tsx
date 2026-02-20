import { Plane, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const footerLinks = {
  Marketplace: ["Buy Aircraft", "Sell Aircraft", "Get a Valuation", "Dealer Program"],
  Resources: ["Buyer Guide", "Seller Guide", "Market Reports", "Blog"],
  Company: ["About Us", "Careers", "Contact", "Press"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
}

export function FooterSection() {
  return (
    <footer className="border-t border-border">
      {/* Newsletter */}
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="flex flex-col items-center rounded-2xl border border-primary/20 bg-primary/5 px-6 py-12 text-center lg:px-12">
          <h2 className="text-2xl font-bold tracking-tight text-foreground lg:text-3xl text-balance">
            Never Miss a New Listing
          </h2>
          <p className="mt-3 max-w-md text-sm text-muted-foreground leading-relaxed">
            Get personalized alerts for aircraft matching your criteria. Join 15,000+ pilots who trust SkyMarket.
          </p>
          <div className="mt-6 flex w-full max-w-sm flex-col gap-2 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-10 flex-1 rounded-lg border border-border bg-card px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
              Subscribe
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Plane className="h-4.5 w-4.5" />
                </div>
                <span className="text-base font-bold text-foreground">SkyMarket</span>
              </Link>
              <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
                The premier marketplace for buying and selling aircraft with confidence.
              </p>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                  {heading}
                </h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 sm:flex-row lg:px-8">
          <p className="text-xs text-muted-foreground">
            2026 SkyMarket, Inc. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            FAA Certified Marketplace
          </p>
        </div>
      </div>
    </footer>
  )
}
