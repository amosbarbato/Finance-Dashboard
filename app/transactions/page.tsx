import { auth } from "@clerk/nextjs/server";
import AddTransaction from "../_components/add-transaction";
import { DataTable } from "../_components/ui/data-table"
import { db } from "../_lib/prisma";
import { transactionColumns } from "./_columns"
import { redirect } from "next/navigation";

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
    <div className="space-y-6">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>

        <AddTransaction variant="outline" />
      </div>

      <DataTable
        columns={transactionColumns}
        data={JSON.parse(JSON.stringify(transactions))}
      />
    </div>
  )
}

export default TransactionPage