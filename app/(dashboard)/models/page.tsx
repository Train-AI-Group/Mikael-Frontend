import { Model } from "@/components/Model/Model"
import { ModelsHeading } from "@/components/ModelsHeading/ModelsHeading"
import { SearchModels } from "@/features/SearchModels/SearchModels"

export default function ModelsPage() {
  return (
    <>
      <ModelsHeading
        title="Models"
        description="Explore and contribute to cutting-edge AI models, from sentiment analysis to image recognition. Join our community to share labeled data, train models and earn rewards."
      />
      <SearchModels />
      <Model
        title="Model 1"
        authorName="Author Name"
        description="Description"
        authorProfileUrl="/img/medium-avatar.png"
        likesCount={100}
      />
    </>
  )
}
