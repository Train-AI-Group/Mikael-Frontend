import { Button } from "@/components/Button/Button"
import { homepageNavItems } from "@/components/HomepageHeader/HomepageHeader"
import Link from "next/link"

export const HomepageHeaderNavigation = () => {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      {homepageNavItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="font-inter text-md text-gray-500 hover:text-gray-900 transition-colors"
        >
          {item.label}
        </Link>
      ))}
      <Button>Sign Up</Button>
    </nav>
  )
}
