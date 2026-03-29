import { Header } from '@/components/header'
import { FooterSection } from '@/features/landing/components/footer-section'

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header blurTrigger="pixels" />
      <section className="mx-auto max-w-3xl px-4 py-28 lg:pt-44 lg:pb-32">
        <article className="prose prose-lg dark:prose-invert">{children}</article>
      </section>
      <FooterSection />
    </>
  )
}
