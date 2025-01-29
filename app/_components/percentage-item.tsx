import { SquareIcon } from "lucide-react"

interface PercentageProps {
  fill: string
  title: string
  value: number
}

const PercentageItem = ({ fill, title, value }: PercentageProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <SquareIcon fill={fill} color={fill} size={16} />
        <p className="text-sm text-white">{title}</p>
      </div>
      <p className="font-bold text-white">{value}%</p>
    </div>
  )
}

export default PercentageItem