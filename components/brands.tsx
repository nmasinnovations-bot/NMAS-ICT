'use client'

const brandNames = [
  'Dell', 'HP', 'Lenovo', 'Apple', 'Microsoft', 
  'Cisco', 'Aruba', 'Ubiquiti', 'MikroTik', 'Yealink', 
  'Poly', 'Logitech', 'Canon', 'Brother', 'Epson', 
  'Synology', 'Bitdefender', 'Sophos', 'ESET', 'Trend Micro'
]

const BrandLogo = ({ name }: { name: string }) => (
  <svg viewBox="0 0 200 60" className="w-full h-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 text-slate-200">
    <rect width="200" height="60" fill="transparent" />
    <text 
      x="100" 
      y="35" 
      fontFamily="Inter, sans-serif" 
      fontSize="24" 
      fontWeight="800" 
      fill="currentColor" 
      textAnchor="middle" 
      alignmentBaseline="middle"
      letterSpacing="-0.5"
    >
      {name}
    </text>
  </svg>
)

export function Brands() {
  return (
    <section className="bg-[#020817] py-16 border-y border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-sm font-bold uppercase tracking-widest text-white">
          Trusted Technology Partners
        </span>
        <p className="mt-2 text-sm text-slate-300/70">
          Technology brands supplied through trusted distribution channels.
        </p>
        
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {brandNames.map((brand, idx) => (
            <div key={idx} className="flex items-center justify-center p-4 border border-white/10 rounded-xl bg-[#071423]/70 hover:shadow-[0_20px_60px_rgba(77,217,255,0.12)] transition-shadow">
              <BrandLogo name={brand} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
