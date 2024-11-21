import { DashboardHeading } from "@/components/DashboardHeading/DashboardHeading"
import { SearchDatasets } from "@/features/SearchDatasets/SearchDatasets"

export default function Dashboard() {
  return (
    <>
      <DashboardHeading
        title="Explore Datasets"
        description="Explore and utilize a diverse range of machine learning models, from advanced diffusion models to cutting-edge large language models (LLMs), tailored to meet various needs and applications."
      />
      <SearchDatasets />
    </>
  )
}
