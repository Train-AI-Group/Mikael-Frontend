import { PropsWithChildren } from "react"

interface HeroProps extends PropsWithChildren {}

export const Hero = ({ children }: HeroProps) => {
  return (
    <section className="min-h-screen">
      {children}
      <div className="pt-[100px] px-6 md:px-8 lg:px-12 flex flex-col items-center text-center">
        <h1 className="font-medium text-[75px] tracking-[-0.03em] leading-tight">
          Build Smarter AI,{" "}
          <span className="text-primary">Together</span>
        </h1>
        <p className="font-medium text-[20px] text-[#6e6e6e]">
          Defining AI training in a collaborative data marketplace
        </p>
      </div>
    </section>
  )
} 