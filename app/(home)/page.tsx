import { redirect } from "next/navigation"
import { auth } from "@clerk/nextjs/server"
import SidebarDashboard from "../_components/sidebar"
import { SidebarProvider } from "../_components/ui/sidebar"

const Home = async () => {
  const { userId } = await auth()

  if (!userId) {
    redirect("/login")
  }

  return (
    <SidebarProvider>
      <SidebarDashboard />

      <main className="bg-gray-100 w-full">
        <h1>Deu certo</h1>
      </main>
    </SidebarProvider>
  )
}

export default Home