"use client"

import { PlusIcon } from "lucide-react"
import { Button } from "./ui/button"
import UpsertDialog from "./upsert-transaction"
import { useState } from "react"

interface ButtonProps {
  variant: "outline" | "default"
}

const AddTransaction = ({ variant }: ButtonProps) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false)

  return (
    <>
      <Button
        variant={variant}
        className="rounded-full border-primary"
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