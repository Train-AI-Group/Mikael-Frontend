import { ReactNode } from "react"
import classNames from "classnames"

interface FilterPillProps {
  children: ReactNode
  className?: string
  isActive?: boolean
}

export const FilterPill = ({ children, className, isActive = false }: FilterPillProps) => {
  return (
    <div
      className={classNames(
        "cursor-pointer inline-flex items-center px-[21px] py-[10px] border border-[#C4C4C4] rounded-full font-inter text-base font-normal text-[#6E6E6E] tracking-[-0.03em] hover:border-primary-500 hover:text-primary-500",
        {
          "bg-primary-500 text-white border-primary-500": isActive,
        },
        className
      )}
    >
      {children}
    </div>
  )
}
