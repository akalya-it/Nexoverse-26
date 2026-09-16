import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { verifySession } from "@/lib/auth"

export default async function OrganiserDashboardPage() {
  const cookieStore = await cookies()
  const session = await verifySession(cookieStore.get("nx_session")?.value)

  if (!session) redirect("/organiser/login")

  return (
    <main className="dashboard-shell">
      <p className="eyebrow">NEXOVERSE&apos;26 / ORGANISER</p>
      <h1>Game control</h1>
      <p className="intro">Your organiser session is active. Live game controls will appear here.</p>
    </main>
  )
}
