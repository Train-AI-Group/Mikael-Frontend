import { DashboardNavigation } from "@/components/DashboardNavigation/DashboardNavigation"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[280px_1fr] min-h-screen">
      <aside className="border-r border-gray-200">
        <DashboardNavigation />
      </aside>
      <main className="p-6">{children}</main>
    </div>
  )
}
