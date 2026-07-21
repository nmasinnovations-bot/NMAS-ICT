import Image from 'next/image'

const columns = [
  {
    title: 'Portfolio',
    links: ['End User Computing', 'Servers & Storage', 'Networking', 'Software Licensing', 'Printing & Accessories'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Target Markets', 'Quality Assurance', 'Contact'],
  },
  {
    title: 'Sectors',
    links: ['Government', 'Municipalities', 'TVET Colleges', 'Enterprise'],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <Image
                src="/images/nmas-logo.png"
                alt="NMAS Innovations logo"
                width={44}
                height={44}
                className="h-10 w-10"
              />
              <span className="flex flex-col leading-none">
                <span className="font-heading text-lg font-extrabold tracking-tight text-navy">
                  NMAS
                </span>
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Innovations
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-pretty leading-relaxed text-muted-foreground">
              <strong>NMAS Innovations (Pty) Ltd</strong><br />
              South African B2B ICT Supplier<br /><br />
              Providing:<br />
              • New ICT equipment<br />
              • Software licensing<br />
              • Procurement solutions<br /><br />
              <span className="font-bold">Serving organisational buyers only.</span>
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-navy">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-navy"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} NMAS Innovations. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Enterprise ICT Supplier &middot; South Africa
          </p>
        </div>
      </div>
    </footer>
  )
}
