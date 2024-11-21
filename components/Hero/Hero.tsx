import Image from "next/image"
import { PropsWithChildren } from "react"

export const Hero = ({ children }: PropsWithChildren) => {
  return (
    <section className="container mx-auto flex flex-col min-h-screen">
      {children}
      <div className="flex flex-1 pt-24 flex-col items-center text-center">
        <h1 className="font-medium text-[4.5rem] tracking-[-0.03em] leading-tight">
          Build Smarter AI, <span className="text-primary">Together</span>
        </h1>
        <p className="font-medium text-[1.25rem] text-[#6e6e6e]">
          Defining AI training in a collaborative data marketplace
        </p>

        <div className="flex-1 flex items-center justify-center">
          <Image
            src="/img/hero_img.png"
            alt="Hero illustration showing AI collaboration"
            width={800}
            height={600}
            priority
          />
        </div>
      </div>
    </section>
  )
}
