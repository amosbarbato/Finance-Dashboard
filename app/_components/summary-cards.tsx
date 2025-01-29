import { PiggyBankIcon, TrendingDownIcon, TrendingUpIcon, WalletIcon } from "lucide-react";
import { db } from "../_lib/prisma";
import SummaryItem from "./summary-item";

interface SummaryCards {
  month: string;
}

const SummaryCards = async ({ month }: SummaryCards) => {

  const where = {
    date: {
      gte: new Date(`2025-${month}-01`),
      lt: new Date(`2025-${month}-31`)
    }
  }

  const depositsTotal = Number(
    (await db.transaction.aggregate(
      { where: { ...where, type: "DEPOSIT" }, _sum: { amount: true } }
    ))?._sum?.amount
  )

  const investmentsTotal = Number(
    (await db.transaction.aggregate(
      { where: { ...where, type: "INVESTMENT" }, _sum: { amount: true } }
    ))?._sum?.amount
  )

  const expensesTotal = Number(
    (await db.transaction.aggregate(
      { where: { ...where, type: "EXPENSE" }, _sum: { amount: true } }
    ))?._sum?.amount
  )

  const balance = depositsTotal - investmentsTotal - expensesTotal;

  return (
    <div className="space-y-6">
      <SummaryItem
        icon={<WalletIcon size={16} className="text-white" />}
        title="Saldo"
        amount={balance}
        size="large"
      />

      <div className="grid grid-cols-3 gap-6">
        <SummaryItem
          icon={<PiggyBankIcon size={16} className="text-white" />}
          title="Investido"
          amount={investmentsTotal}
        />
        <SummaryItem
          icon={<TrendingUpIcon size={16} className="text-white" />}
          title="Receita"
          amount={depositsTotal}
        />
        <SummaryItem
          icon={<TrendingDownIcon size={16} className="text-white" />}
          title="Despesas"
          amount={expensesTotal}
        />
      </div>

    </div>
  )
}

export default SummaryCards