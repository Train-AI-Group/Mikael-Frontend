"use client"
import { Button } from "@/components/Button/Button"
import Image from "next/image"
import NewDataSetForm from "../NewDataSetForm/NewDataSetForm"
import Sidabar from "../Sidebar/Sidebar"
import { useState } from "react"

import { AddIcon } from "@/components/icons/AddIcon/AddIcon"

interface DashboardHeadingProps {
  title: string
  description: string
}

export const DashboardHeading = ({ title, description }: DashboardHeadingProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="mb-10 px-8">
        <div className="flex items-center justify-between">
          <h1 className="text-[48px] font-medium font-inter text-black">{title}</h1>
        </div>
        <p className="font-inter text-[18px] font-normal text-[#6E6E6E] tracking-[-0.03em] mb-[40px]">
          {description}
        </p>
<<<<<<< HEAD
        <Button
          icon={<Image src="/icons/add.svg" alt="Add" width={16} height={16} />}
          onClick={() => setIsOpen(true)}
        >
=======
        <Button icon={<AddIcon />} onClick={openPanel}>
>>>>>>> main
          New Dataset
        </Button>
      </div>

<<<<<<< HEAD
      <Sidabar open={isOpen} setOpen={setIsOpen} panelTitle="New Dataset">
        <NewDataSetForm />
      </Sidabar>
=======
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
>>>>>>> main
    </>
  )
}
