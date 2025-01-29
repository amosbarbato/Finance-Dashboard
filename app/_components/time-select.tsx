"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/_components/ui/select"
import { CalendarIcon } from "lucide-react"

const MONTH_OPTIONS = [
  { value: "01", label: "Janeiro" },
  { value: "02", label: "Fevereiro" },
  { value: "03", label: "Março" },
  { value: "04", label: "Abril" },
  { value: "05", label: "Maio" },
  { value: "06", label: "Junho" },
  { value: "07", label: "Julho" },
  { value: "08", label: "Agosto" },
  { value: "09", label: "Setembro" },
  { value: "10", label: "Outubro" },
  { value: "11", label: "Novembro" },
  { value: "12", label: "Dezembro" },
]

const TimeSelect = () => {
  const { push } = useRouter()
  const searchParams = useSearchParams()
  const month = searchParams.get("month")

  const monthChange = (month: string) => {
    push(`/?month=${month}`)
  }

  return (
    <Select
      onValueChange={(value) => monthChange(value)}
      defaultValue={month ?? ""}
    >
      <SelectTrigger className="w-48 rounded-full px-5">
        <div className="flex gap-2 items-center">
          <CalendarIcon className="h-4 w-4" />
          <SelectValue placeholder="Mês" />
        </div>
      </SelectTrigger>

      <SelectContent>
        {MONTH_OPTIONS.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default TimeSelect