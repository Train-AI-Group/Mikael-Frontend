import { ButtonLink } from "@/components/Button/ButtonLink"
import { SearchInput } from "@/components/SearchInput/SearchInput"

export const DashboardHeader = () => {
  return (
    <div className="flex flex-row justify-between items-center mb-16">
      <SearchInput />
      <ButtonLink href="/sign-in" variant="ghost">
        Sign in
      </ButtonLink>
      <ButtonLink href="/register">Register</ButtonLink>
    </div>
  )
}
