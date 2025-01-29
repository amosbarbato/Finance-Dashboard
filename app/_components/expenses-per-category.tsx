import { TRANSACTION_CATEGORY_LABELS } from "../_constants/transactions";
import { TotalExpensePerCategory } from "../_data/get-dashboard/types";
import { formatCurrency } from "../_utils/currency";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { ScrollArea } from "./ui/scroll-area";

interface ExpensesProps {
  expensesPerCategory: TotalExpensePerCategory[];
}

const ExpensesPerCategory = ({ expensesPerCategory }: ExpensesProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between pb-5 border-b border-black/10">
          <CardTitle className="font-bold">Gastos por Categoria</CardTitle>
        </div>

      </CardHeader>

      <ScrollArea>
        <CardContent className="space-y-6">
          {expensesPerCategory.map((category) => (
            <div key={category.category} className="space-y-2">
              <div className="flex w-full justify-between">
                <p className="text-sm font-bold">
                  {TRANSACTION_CATEGORY_LABELS[category.category]}
                </p>
                <p className="text-sm font-bold">
                  {formatCurrency(Number(category.totalAmount))}
                </p>
              </div>
              <Progress value={category.percentageOfTotal} />
            </div>
          ))}
        </CardContent>
      </ScrollArea>
    </Card>
  )
}

export default ExpensesPerCategory