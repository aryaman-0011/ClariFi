import { firestore } from "@/config/firebase";
import { TransactionType, WalletType } from "@/types";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export const createOrUpdatetransaction = async (
    transactionData: Partial<TransactionType>
) => {
    try {
        const { id, type, walletId, amount, image } = transactionData
        if (!amount || amount <= 0 || !walletId || !type) {
            return { success: false, msg: 'Invalid Transaction data' }
        }

        if (id) {
            // todo: update existing transaction
        } else {
            // Update the wallet for new transaction
            // update wallet
            let res = await updateWalletForNewTransaction(
                walletId,
                Number(amount!),
                type
            )
            if (!res.success) return res
        }

        return { success: true }

    } catch (err: any) {
        console.log('Error creating or updating the transaction: ', err)
        return { success: false, msg: err.message }
    }
}


const updateWalletForNewTransaction = async (
    walletId: string,
    amount: number,
    type: string
) => {
    try {
        const walletRef = doc(firestore, 'wallets', walletId)
        const walletSnapshot = await getDoc(walletRef)

        if (!walletSnapshot.exists()) {
            console.log('Error updating the wallet for a new transacttion: ')
            return { success: false, msg: "Wallet not found" }
        }

        const walletData = walletSnapshot.data() as WalletType
        if (type == 'expense' && walletData.amount! - amount < 0) {
            return {
                success: false,
                msg: "Selected wallet dont have enough balance"
            }
        }

        const updateType = type == 'income' ? "totalIncome" : "totalExpenses"
        const updatedWalletAmount = type == 'income' ? Number(walletData.amount) + amount : Number(walletData.amount) - amount

        const updatedTotals = type == 'income' ? Number(walletData.totalIncome) + amount : Number(walletData.totalExpenses) + amount

        await updateDoc(walletRef, {
            amount: updatedWalletAmount,
            [updateType]: updatedTotals
        })

        return { success: true }
    }
    catch (err: any) {
        console.log('Error updating the wallet for a new transacttion: ', err)
        return { success: false, msg: err.message }
    }

}