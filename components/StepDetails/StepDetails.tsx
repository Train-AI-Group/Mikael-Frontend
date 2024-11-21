import { StepIcon } from "@/components/StepIcon/StepIcon"
import Image from "next/image"

interface StepDetailProps {
  image: string
  step: number
  title: string
  description: string
}

export const StepDetail = ({ image, step, title, description }: StepDetailProps) => {
  return (
    <div className="flex flex-row items-center gap-10">
      <div className="flex flex-col gap-4 mt-10">
        <StepIcon>
          <Image src={image} alt={title} width={37} height={33} />
        </StepIcon>
      </div>
      <div className="flex flex-col">
        <span className="text-step text-primary mb-7 uppercase">Step {step}</span>
        <h3 className="text-title font-medium text-black mb-4">{title}</h3>
        <p className="text-description font-normal text-[#6E6E6E]">{description}</p>
      </div>
    </div>
  )
}
