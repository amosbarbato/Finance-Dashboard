import { UserButton } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

const Home = async () => {
  const { userId } = await auth()

  if (!userId) {
    redirect("/login")
  }

  return (
    <>
      <h1>Deu certo</h1>

      <UserButton showName />
    </>
  )
}

export default Home