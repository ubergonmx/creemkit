import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { CreemFull } from './svgs/creem'
import { BaseUI } from './svgs/baseui'
import { OXCFull } from './svgs/oxc'
import { ShadcnFull } from './svgs/shadcn'
import { NextjsFull } from './svgs/nextjs'
import { SupabaseFull } from './svgs/supabase'
import { VercelFull } from './svgs/vercel'

export function LogoBar() {
  return (
    <section className="bg-background overflow-hidden py-16">
      <div className="group relative m-auto max-w-5xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:max-w-44 md:border-r md:pr-6">
            <p className="text-end text-sm font-medium text-foreground">Powered by the best</p>
          </div>
          <div className="**:fill-foreground relative py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider speedOnHover={20} speed={40} gap={80}>
              <NextjsFull style={{ height: 24, width: 118, flexShrink: 0, alignSelf: 'center' }} />
              <VercelFull style={{ height: 24, width: 123, flexShrink: 0, alignSelf: 'center' }} />
              <SupabaseFull style={{ height: 24, width: 121, flexShrink: 0, alignSelf: 'center' }} />
              <CreemFull style={{ height: 24, width: 111, flexShrink: 0, alignSelf: 'center' }} />
              <BaseUI style={{ height: 32, width: 23, flexShrink: 0, alignSelf: 'center' }} />
              <OXCFull style={{ height: 18, width: 98, flexShrink: 0, alignSelf: 'center' }} />
              <ShadcnFull style={{ height: 24, width: 82, flexShrink: 0, alignSelf: 'center' }} />
            </InfiniteSlider>

            <div
              aria-hidden
              className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"
            />
            <div
              aria-hidden
              className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"
            />
            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
