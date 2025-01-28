"use client"

import { PlusIcon } from "lucide-react"
import { Button } from "./ui/button"
import UpsertDialog from "./upsert-transaction"
import { useState } from "react"

const AddTransaction = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false)

  return (
    <>
      <Button
        variant="outline"
        className="rounded-full"
        onClick={() => setDialogIsOpen(true)}
      >
        <PlusIcon />
        Adicionar Transação
      </Button>

      <UpsertDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
      />
    </>
  )
}

export default AddTransaction