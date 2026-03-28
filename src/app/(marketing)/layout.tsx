import { Header } from '@/components/header'
import { CallToAction } from '@/features/landing/components/call-to-action'
import { FooterSection } from '@/features/landing/components/footer-section'

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <CallToAction />
      <FooterSection />
    </>
  )
}
