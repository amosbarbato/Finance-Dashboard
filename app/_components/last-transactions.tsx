import { Transaction, TransactionType } from "@prisma/client";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { formatCurrency } from "../_utils/currency";
import Link from "next/link";
import { ChevronDownIcon } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";

interface LastTransactionsProps {
  lastTransactions: Transaction[];
}

const LastTransactions = ({ lastTransactions }: LastTransactionsProps) => {

  const getAmountColor = (transaction: Transaction) => {
    if (transaction.type === TransactionType.DEPOSIT) {
      return "text-secondary";
    }
    return "text-white";
  };

  const getAmountPrefix = (transaction: Transaction) => {
    if (transaction.type === TransactionType.DEPOSIT) {
      return "+"
    }
    return "-"
  }

  return (
    <Card className="bg-primary text-white">
      <CardHeader>
        <div className="flex items-center justify-between pb-5 border-b border-white/10">
          <CardTitle className="font-bold">Transações</CardTitle>
          <Link href="/transactions" className="text-xs flex items-center gap-1.5 text-white/70">
            Todos
            <ChevronDownIcon size={16} />
          </Link>
        </div>
      </CardHeader>

      <ScrollArea>
        <CardContent className="space-y-5">
          {lastTransactions.map((transaction) => (
            <div
              key={transaction.id}
              className="grid grid-cols-3 items-center"
            >
              <div>
                <p className="text-sm font-bold">{transaction.name}</p>
                <p className="text-xs text-muted-foreground">{transaction.category}</p>
              </div>


              <p className="text-sm text-center text-muted-foreground">
                {new Date(transaction.date).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "2-digit",
                })}
              </p>

              <p className={`text-sm font-bold text-right ${getAmountColor(transaction)}`}>
                {getAmountPrefix(transaction)}
                {formatCurrency(Number(transaction.amount))}
              </p>
            </div>
          ))}
        </CardContent>
      </ScrollArea>
    </Card>
  )
}

export default LastTransactions