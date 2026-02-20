import { CheckCircle2, Building2 } from "lucide-react"

export function ListingHeader() {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
            <CheckCircle2 className="h-3.5 w-3.5" />
            Verified
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
            <Building2 className="h-3.5 w-3.5" />
            Dealer
          </span>
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground lg:text-3xl text-balance">
          2018 Cirrus SR22T GTS
        </h1>
        <p className="font-mono text-sm text-muted-foreground">
          N-Number: N412CT
        </p>
      </div>
      <div className="flex flex-col items-start lg:items-end">
        <span className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
          $725,000
        </span>
        <span className="mt-1 text-xs text-muted-foreground">
          Or make an offer
        </span>
      </div>
    </div>
  )
}
