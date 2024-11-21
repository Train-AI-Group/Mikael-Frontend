import { Hero } from "@/components/Hero/Hero"
import { HomepageFooter } from "@/components/HomepageFooter/HomepageFooter"
import { HomepageHeader } from "@/components/HomepageHeader/HomepageHeader"
import { FaqSection } from "@/features/FaqSection/FaqSection"
import { RolesSection } from "@/features/RolesSection/RolesSection"

export default function Home() {
  return (
    <>
      <Hero>
        <HomepageHeader />
      </Hero>
      <RolesSection />
      <FaqSection />
      <HomepageFooter />
    </>
  )
}
