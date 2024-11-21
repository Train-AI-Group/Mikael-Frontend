import { Hero } from "@/components/Hero/Hero"
import { HomepageHeader } from "@/components/HomepageHeader/HomepageHeader"
import { RoleCard } from "@/components/RoleCard/RoleCard"
import { RolesSection } from "@/features/RolesSection/RolesSection"

export default function Home() {
  return (
    <>
      <Hero>
        <HomepageHeader />
      </Hero>
      <RolesSection />
    </>
  )
}
