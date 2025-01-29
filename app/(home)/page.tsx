import { redirect } from "next/navigation"
import { auth } from "@clerk/nextjs/server"
import { isMatch } from "date-fns"
import SummaryCards from "../_components/summary-cards"
import TimeSelect from "../_components/time-select"
import { getDashboard } from "../_data/get-dashboard"
import LastTransactions from "../_components/last-transactions"

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

  const dashboard = await getDashboard(month)

  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <TimeSelect />
      </div>

      <div className="grid grid-cols-[2fr,1fr] gap-6">
        <div>
          <SummaryCards month={month} {...dashboard} />
        </div>

        <LastTransactions lastTransactions={dashboard.lastTransactions} />
      </div>
    </div>
  )
}

export default Home