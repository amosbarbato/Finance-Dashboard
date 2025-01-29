import { ReactNode } from "react";
import AddTransaction from "./add-transaction"
import { Card, CardContent, CardHeader } from "./ui/card"

interface ItemProps {
  icon: ReactNode;
  title: string;
  amount: number;
  size?: "small" | "large";
}

const SummaryItem = ({ icon, title, amount, size }: ItemProps) => {
  return (
    <Card>
      <CardHeader className="flex-row items-center gap-4">
        <div className="h-9 w-9 flex items-center justify-center rounded-full bg-primary">
          {icon}
        </div>
        <p className="font-semibold">{title}</p>
      </CardHeader>

      <CardContent className="flex justify-between">
        <p className={`font-bold ${size === "large" ? "text-4xl" : "text-2xl"}`}>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(amount)}
        </p>

        {size === "large" && <AddTransaction variant="default" />}
      </CardContent>
    </Card>
  )
}

export default SummaryItem