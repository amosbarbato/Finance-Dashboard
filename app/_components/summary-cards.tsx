import SummaryItem from "./summary-item";
import { PiggyBankIcon, TrendingDownIcon, TrendingUpIcon, WalletIcon } from "lucide-react";

interface SummaryCards {
  month: string
  balance: number
  depositsTotal: number
  investmentsTotal: number
  expensesTotal: number
}

const SummaryCards = async ({
  balance, depositsTotal, investmentsTotal, expensesTotal
}: SummaryCards) => {
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