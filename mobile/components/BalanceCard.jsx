import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '@/assets/styles/home.styles'

const BalanceCard = ({summary}) => {
  return (
    <View style={styles.balanceCard}>
        <Text style={styles.balanceTitle}>Total balance</Text>
    </View>
  )
}

export default BalanceCard