import { Transaction, TransactionType } from "@prisma/client"
import { Badge } from "@/app/_components/ui/badge";
import { CircleIcon } from "lucide-react";

interface BadgeProps {
  transaction: Transaction
}

const TypeBadge = ({ transaction }: BadgeProps) => {
  if (transaction.type === TransactionType.DEPOSIT) {
    return (
      <Badge className="bg-secondary/20 font-bold text-secondary hover:bg-secondary/20">
        <CircleIcon className="mr-2 fill-secondary" size={10} />
        Ganho
      </Badge>
    );
  }

  if (transaction.type === TransactionType.EXPENSE) {
    return (
      <Badge className="bg-red-600/20 font-bold text-red-600 hover:bg-red-600/20">
        <CircleIcon className="mr-2 fill-red-600" size={10} />
        Despesa
      </Badge>
    );
  }

  return (
    <Badge className="bg-primary/30 font-bold text-white hover:bg-primary/30">
      <CircleIcon className="mr-2 fill-white" size={10} />
      Investimento
    </Badge>
  )
}

export default TypeBadge