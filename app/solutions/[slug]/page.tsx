import { notFound } from 'next/navigation'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Contact } from '@/components/contact'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'

// Define the content strictly matching the user's requirements
const solutionsContent: Record<string, any> = {
  'end-user-computing': {
    title: 'End User Computing',
    description: 'Enterprise-grade end user computing hardware and accessories for modern workspaces.',
    products: ['Business laptops', 'Desktops', 'Workstations', 'Tablets', 'Monitors', 'Docking stations'],
    brands: ['Dell', 'HP', 'Lenovo', 'ASUS', 'Apple', 'Microsoft']
  },
  'servers-storage': {
    title: 'Servers & Storage',
    description: 'Enterprise server, storage and backup solutions for organisational requirements.',
    products: ['Servers', 'Storage systems', 'Backup solutions'],
    brands: ['Dell', 'HPE', 'Lenovo', 'Synology']
  },
  'networking': {
    title: 'Networking',
    description: 'Connectivity infrastructure for offices, campuses and enterprise environments.',
    products: ['Switches', 'Routers', 'Wireless equipment', 'Firewalls', 'Network accessories'],
    brands: ['Cisco', 'Aruba', 'Ubiquiti', 'MikroTik']
  },
  'software-licensing': {
    title: 'Software Licensing',
    description: 'Software licensing supplied for organisational deployments.',
    products: ['Microsoft licensing', 'Security software', 'Enterprise software solutions'],
    brands: ['Microsoft', 'Bitdefender', 'Sophos', 'ESET', 'Trend Micro']
  },
  'printing-accessories': {
    title: 'Printing & Accessories',
    description: 'Professional printing solutions and IT accessories for document management and workspaces.',
    products: ['Printers', 'Multifunction printers', 'Scanners', 'Toners', 'Accessories'],
    brands: ['HP', 'Canon', 'Epson', 'Brother', 'Logitech', 'Targus']
  },
  'collaboration': {
    title: 'Collaboration',
    description: 'Meeting room and communication technology for modern organisations.',
    products: ['Video conferencing', 'Meeting room technology', 'Communication equipment'],
    brands: ['Yealink', 'Logitech', 'Poly', 'Jabra']
  }
}

export function generateStaticParams() {
  return Object.keys(solutionsContent).map((slug) => ({
    slug,
  }))
}

export default function SolutionPage({ params }: { params: { slug: string } }) {
  const content = solutionsContent[params.slug]

  if (!content) {
    notFound()
  }

  return (
    <>
      <SiteHeader />
      <main className="pt-24 lg:pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/#portfolio" className="inline-flex items-center gap-2 text-sm font-bold text-slate-300/60 hover:text-[#00b4d8] mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Solutions
          </Link>
          
          <div className="bg-[#0a1128] rounded-3xl p-8 lg:p-16 mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#00b4d8]/10 rounded-full blur-[100px]" />
            <span className="text-sm font-bold uppercase tracking-widest text-[#00b4d8]">
              Enterprise Solution
            </span>
            <h1 className="mt-4 font-heading text-4xl lg:text-6xl font-extrabold text-white">
              {content.title}
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-2xl">
              {content.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 mb-20">
            <div>
              <h2 className="text-2xl font-extrabold text-white mb-6 border-b border-white/10 pb-4">
                Products Supplied
              </h2>
              <ul className="space-y-4">
                {content.products.map((product: string) => (
                  <li key={product} className="flex items-center gap-3 text-lg font-medium text-slate-300/80">
                    <CheckCircle2 className="h-6 w-6 text-[#00b4d8] shrink-0" />
                    {product}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-extrabold text-white mb-6 border-b border-white/10 pb-4">
                Trusted Brands
              </h2>
              <ul className="flex flex-wrap gap-3">
                {content.brands.map((brand: string) => (
                  <li key={brand} className="px-5 py-3 bg-[#071423]/70 border border-white/10 rounded-xl text-lg font-bold text-slate-200">
                    {brand}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
