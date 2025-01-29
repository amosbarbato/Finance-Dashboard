"use client"

import { Pie, PieChart } from "recharts"
import { Card, CardContent } from "./ui/card"
import { ChartConfig, ChartContainer } from "./ui/chart"
import { TransactionType } from "@prisma/client";
import { TransactionPercentagePerType } from "../_data/get-dashboard/types";
import PercentageItem from "./percentage-item";

const chartConfig = {
  [TransactionType.INVESTMENT]: {
    label: "Investido", color: "#FFFFFF"
  },
  [TransactionType.DEPOSIT]: {
    label: "Receita", color: "#55B02E"
  },
  [TransactionType.EXPENSE]: {
    label: "Despesas", color: "#E93030"
  }
} satisfies ChartConfig

interface ChartProps {
  typesPercentage: TransactionPercentagePerType
  depositsTotal: number;
  investmentsTotal: number;
  expensesTotal: number;
}

const TransactionChart = ({ typesPercentage, depositsTotal, investmentsTotal, expensesTotal }: ChartProps) => {
  const chartData = [
    {
      type: TransactionType.DEPOSIT,
      amount: JSON.parse(JSON.stringify(depositsTotal)),
      fill: "#55B02E"
    },
    {
      type: TransactionType.EXPENSE,
      amount: JSON.parse(JSON.stringify(expensesTotal)),
      fill: "#E93030"
    },
    {
      type: TransactionType.INVESTMENT,
      amount: JSON.parse(JSON.stringify(investmentsTotal)),
      fill: "#FFFFFF"
    }
  ]

  return (
    <Card className="bg-primary">
      <CardContent className="flex gap-6 pt-6">
        <ChartContainer config={chartConfig} className="min-h-40 w-1/2">
          <PieChart accessibilityLayer data={chartData}>
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="type"
              paddingAngle={5}
              innerRadius={60}
              outerRadius={80}
            />
          </PieChart>
        </ChartContainer>

        <div className="w-full flex flex-col justify-evenly">
          <PercentageItem
            fill={chartConfig[TransactionType.DEPOSIT].color}
            title="Receita"
            value={typesPercentage[TransactionType.DEPOSIT]}
          />
          <PercentageItem
            fill={chartConfig[TransactionType.EXPENSE].color}
            title="Despesa"
            value={typesPercentage[TransactionType.EXPENSE]}
          />
          <PercentageItem
            fill={chartConfig[TransactionType.INVESTMENT].color}
            title="Investido"
            value={typesPercentage[TransactionType.INVESTMENT]}
          />
        </div>

      </CardContent>
    </Card>
  )
}

export default TransactionChart