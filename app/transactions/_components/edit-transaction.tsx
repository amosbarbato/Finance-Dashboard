"use client"

import { useState } from "react"
import { Button } from "@/app/_components/ui/button"
import UpsertDialog from "@/app/_components/upsert-transaction"
import { PencilIcon } from "lucide-react"
import { Transaction } from "@prisma/client"

interface EditTransactionProps {
  transaction: Transaction
}

const EditTransaction = ({ transaction }: EditTransactionProps) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="text-muted-foreground"
        onClick={() => setDialogIsOpen(true)}
      >
        <PencilIcon />
      </Button>

      <UpsertDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
        defaultValues={{
          ...transaction,
          amount: Number(transaction.amount),
        }}
        transactionId={transaction.id}
      />
    </>
  )
}

export default EditTransaction