import { deleteTransaction } from "@/app/_actions/delete-transaction"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/app/_components/ui/alert-dialog"
import { toast } from "sonner"
import { Button } from "@/app/_components/ui/button"
import { TrashIcon } from "lucide-react"

interface DeleteTransactionProps {
  transactionId: string
}

const DeleteTransaction = ({ transactionId }: DeleteTransactionProps) => {
  const confirmDelete = async () => {
    try {
      await deleteTransaction({ transactionId })
      toast.success("Transação deletada com sucesso!")
    } catch (error) {
      console.error(error);
      toast.error("Ocorreu um erro ao deletar a transação.");
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground"
        >
          <TrashIcon />
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Você deseja realmente deletar essa transação?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Essa ação não pode ser desfeita.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel
            className="rounded-full w-full"
          >
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={confirmDelete}
            className="rounded-full w-full"
          >
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default DeleteTransaction