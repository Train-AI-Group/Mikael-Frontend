import { SearchInput } from "@/components/SearchInput/SearchInput"
import { FilterPill } from "@/components/FilterPill/FilterPill"

export const SearchDatasets = () => {
  return (
    <div className="flex flex-col gap-5">
      <SearchInput />
      <div className="flex flex-wrap gap-2">
        <FilterPill>Filter 1</FilterPill>
        <FilterPill>Filter 2</FilterPill>
        <FilterPill>Filter 3</FilterPill>
      </div>
    </div>
  )
}
