import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Brands } from '@/components/brands'
import { TargetMarkets } from '@/components/target-markets'
import { Portfolio } from '@/components/portfolio'
import { Workflow } from '@/components/workflow'
import { Quality } from '@/components/quality'
import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Brands />
        <TargetMarkets />
        <Portfolio />
        <Workflow />
        <Quality />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
