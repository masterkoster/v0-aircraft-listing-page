import { Navbar } from "@/components/aircraft/navbar"
import { ImageGallery } from "@/components/aircraft/image-gallery"
import { ListingHeader } from "@/components/aircraft/listing-header"
import { QuickStats } from "@/components/aircraft/quick-stats"
import { DescriptionSection } from "@/components/aircraft/description-section"
import { EquipmentSection } from "@/components/aircraft/equipment-section"
import { LocationCard } from "@/components/aircraft/location-card"
import { ContactSection } from "@/components/aircraft/contact-section"

export default function AircraftListingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <ListingHeader />

        <div className="mt-6">
          <QuickStats />
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="flex flex-col gap-8">
            <ImageGallery />
            <DescriptionSection />
            <EquipmentSection />
          </div>

          <aside className="flex flex-col gap-6 lg:sticky lg:top-20 lg:self-start">
            <ContactSection />
            <LocationCard />
          </aside>
        </div>
      </main>

      <footer className="mt-16 border-t border-border bg-card">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 lg:px-8">
          <p className="text-xs text-muted-foreground">
            SkyMarket - Premium Aircraft Marketplace
          </p>
          <p className="text-xs text-muted-foreground">
            Listing #SKM-2026-04812
          </p>
        </div>
      </footer>
    </div>
  )
}
