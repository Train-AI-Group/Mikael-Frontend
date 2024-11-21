import { Button } from "@/components/Button/Button"
import Image from "next/image"

interface DashboardHeadingProps {
  title: string
  description: string
}

export const DashboardHeading = ({ title, description }: DashboardHeadingProps) => {
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between">
        <h1 className="text-[48px] font-medium font-inter text-black">{title}</h1>
      </div>
      <p className="font-inter text-[18px] font-normal text-[#6E6E6E] tracking-[-0.03em] mb-[40px]">
        {description}
      </p>
      <Button icon={<Image src="/icons/add.svg" alt="Add" width={16} height={16} />}>
        New Dataset
      </Button>
    </div>
  )
}
