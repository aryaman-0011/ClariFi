import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router';
import { useUser } from '@clerk/clerk-expo';

const CATEGORIES = [
    { id: "food", name: "Food & Drinks", icon: "fast-food" },
    { id: "shopping", name: "Shopping", icon: "cart" },
    { id: "transportation", name: "Transportation", icon: "car" },
    { id: "entertainment", name: "Entertainment", icon: "film" },
    { id: "bills", name: "Bills", icon: "receipt" },
    { id: "income", name: "Income", icon: "cash" },
    { id: "other", name: "Other", icon: "ellipsis-horizontal" },
];


const CreateScreen = () => {

    const router = useRouter()
    const { user } = useUser()

    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("")
    const [isExpense, setIsExpense] = useState(true)
    const [isLoading, setIsLoading] = useState(false)

    const handleCreate = async () => {
        // Validations
        if (!title.trim()) return Alert.alert("Error", "Please enter a transaction title")
        if (!amount || isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
            Alert.alert("Error", "Please enter a valid amount")
            return
        }

        if (!selectedCategory) return Alert.alert("Error", "Please select a category")

        setIsLoading(true)
        try {
            // Format the amount (negative for expenses, positive for income)
            const formattedAmount = isExpense ? -Math.abs(parseFloat(amount)) : Math.abs(parseFloat(amount))

            const response = await fetch()
        } catch (error) {

        }
    }

    return (
        <View>
            <Text>create</Text>
        </View>
    )
}

export default CreateScreen