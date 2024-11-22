"use client"

import { RoleCard } from "@/components/RoleCard/RoleCard"
import { StepDetail } from "@/components/StepDetails/StepDetails"
import { useState } from "react"

const roles = {
  contributors: [
    {
      image: "/icons/download.svg",
      title: "Upload Data",
      description: "Contribute labeled data, such as text and images to train the model.",
    },
    {
      image: "/icons/cash.svg",
      title: "Earn Tokens",
      description: "Earn tokens as a reward for each piece of data you upload.",
    },
    {
      image: "/icons/barChart.svg",
      title: "Track Data Usage",
      description: "Stay informed on how your data is used in AI training.",
    },
  ],
  developers: [
    {
      image: "/icons/geometry.svg",
      title: "Browse Models",
      description: "Explore and select pre-trained models for your applications.",
    },
    {
      image: "/icons/rocket.svg",
      title: "Deploy Models",
      description: "Easily integrate AI models directly into your software solutions.",
    },
    {
      image: "/icons/chart.svg",
      title: "Monitor Progress",
      description: "Track model performance and accuracy to optimize results.",
    },
  ],
}

export const RolesSection = () => {
  const [selectedRole, setSelectedRole] = useState<keyof typeof roles>("contributors")
  const toggleRole = (role: keyof typeof roles) => {
    setSelectedRole(role)
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-row gap-10">
        <div className="flex flex-1 flex-col gap-10" style={{ marginTop: "80px" }}>
          <h2 className="font-medium text-black" style={{ fontSize: "48px" }}>
            Choose a role
          </h2>

          <div role="listbox" aria-label="Roles" className="flex flex-col gap-4">
            <RoleCard
              title="Contributors"
              description="Contribute to the project by providing data for training AI models."
              buttonText="Get Started"
              selected={selectedRole === "contributors"}
              onClick={() => toggleRole("contributors")}
            />
            <RoleCard
              title="Developers"
              description="Browse, deploy, and monitor AI models to enhance your applications."
              buttonText="Get Started"
              selected={selectedRole === "developers"}
              onClick={() => toggleRole("developers")}
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-10 relative" style={{ marginTop: "80px" }}>
          {roles[selectedRole].map((role, index) => (
            <StepDetail
              key={index}
              image={role.image}
              step={index + 1}
              title={role.title}
              description={role.description}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
