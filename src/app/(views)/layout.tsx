'use client'

import { AppAside, AppSidebar, AppFooter, AppHeader } from '@/components'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader />
        <div className="body flex-grow-1">
          {children}
        </div>
        <AppFooter />
      </div>
      <AppAside />
    </>
  )
}
