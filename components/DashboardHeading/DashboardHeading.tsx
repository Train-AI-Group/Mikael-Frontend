"use client"
import { Button } from "@/components/Button/Button"
import Image from "next/image"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback, useEffect } from "react"
import NewDataSetForm from "../NewDataSetForm/NewDataSetForm"

import { AddIcon } from "@/components/icons/AddIcon/AddIcon"

interface DashboardHeadingProps {
  title: string
  description: string
}

export const DashboardHeading = ({ title, description }: DashboardHeadingProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  // Create a stable URL search params instance
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)
      return params.toString()
    },
    [searchParams]
  )

  // Check if panel is open
  const isPanelOpen = searchParams.get("newDataset") === "true"

  // Handle Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isPanelOpen) {
        router.push(pathname)
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isPanelOpen, router, pathname, createQueryString])

  // Handle opening panel
  const openPanel = () => {
    router.push("?" + createQueryString("newDataset", "true"))
  }

  // Handle closing panel
  const closePanel = () => {
    router.push(pathname)
  }

  return (
    <>
      <div className="mb-10 px-8">
        <div className="flex items-center justify-between">
          <h1 className="text-[48px] font-medium font-inter text-black">{title}</h1>
        </div>
        <p className="font-inter text-[18px] font-normal text-[#6E6E6E] tracking-[-0.03em] mb-[40px]">
          {description}
        </p>
        <Button icon={<AddIcon />} onClick={openPanel}>
          New Dataset
        </Button>
      </div>

      {isPanelOpen && (
        <div
          onClick={closePanel}
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm animate-in fade-in duration-300"
        />
      )}

      <div
        className={`
        fixed top-0 right-0 h-full md:max-w-lg w-full bg-white shadow-lg z-50
        transform transition-transform duration-300 ease-in-out
        ${isPanelOpen ? "translate-x-0" : "translate-x-full"}
      `}
      >
        <div className="flex justify-between items-center p-6 ">
          <h2 className="text-xl font-medium ">Upload Dataset</h2>

          <button
            onClick={closePanel}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            x
          </button>
        </div>

        {/* Panel Content */}
        <div className="p-6 ">
          <NewDataSetForm />
        </div>
      </div>
    </>
  )
}
