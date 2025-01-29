import { auth } from "@clerk/nextjs/server";
import AddTransaction from "../_components/add-transaction";
import { DataTable } from "../_components/ui/data-table"
import { db } from "../_lib/prisma";
import { transactionColumns } from "./_columns"
import { redirect } from "next/navigation";
import { ScrollArea } from "../_components/ui/scroll-area";
import { SidebarProvider } from "../_components/ui/sidebar";
import SidebarDashboard from "../_components/sidebar";

const TransactionPage = async () => {
  const { userId } = await auth()

  if (!userId) {
    redirect("/login");
  }

  const transactions = await db.transaction.findMany({
    where: { userId },
    orderBy: { date: "desc" },
  });

  return (
    <SidebarProvider>
      <SidebarDashboard />

      <main className="bg-gray-100 w-full p-8">
        <div className="space-y-6">
          <div className="flex w-full items-center justify-between">
            <h1 className="text-2xl font-bold">Transações</h1>

            <AddTransaction variant="outline" />
          </div>

          <ScrollArea>
            <DataTable
              columns={transactionColumns}
              data={JSON.parse(JSON.stringify(transactions))}
            />
          </ScrollArea>
        </div>
      </main>
    </SidebarProvider>
  )
}

export default TransactionPage