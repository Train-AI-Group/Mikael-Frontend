import { ModelNavigationLink } from "@/components/ModelNavigation/ModelNavigationLink"

export const ModelNavigation = () => {
  return (
    <div className="flex flex-row gap-10 px-8 border-b border-[#C4C4C4]">
      <ModelNavigationLink href="">Data Card</ModelNavigationLink>
      <ModelNavigationLink href="/code">Code (421)</ModelNavigationLink>
      <ModelNavigationLink href="/discussions">Discussions (2)</ModelNavigationLink>
      <ModelNavigationLink href="/suggestions">Suggestions (1)</ModelNavigationLink>
    </div>
  )
}
