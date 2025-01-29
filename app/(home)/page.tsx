import { redirect } from "next/navigation"
import { auth } from "@clerk/nextjs/server"
import { isMatch } from "date-fns"
import SummaryCards from "../_components/summary-cards"
import TimeSelect from "../_components/time-select"

interface HomeProps {
  searchParams: Promise<{
    month: string
  }>
}

const Home = async (props: HomeProps) => {
  const { userId } = await auth()
  const searchParams = await props.searchParams
  const { month } = searchParams

  if (!userId) {
    redirect("/login")
  }

  const monthIsInvalid = !month || !isMatch(month, "MM")
  if (monthIsInvalid) {
    redirect("?month=01")
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <TimeSelect />
      </div>

      <SummaryCards month={month} />
    </div>
  )
}

export default Home