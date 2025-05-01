import { StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import { colors, spacingX, spacingY } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'
import BackButton from '@/components/BackButton'
import Input from '@/components/Input'
import * as Icons from 'phosphor-react-native'

const Login = () => {

    const emailRef = useRef("")
    const passwordRef = useRef("")

    return (
        <ScreenWrapper>
            <View style={styles.container}>
                {/* Back Button */}
                <BackButton iconSize={28} />

                <View style={{ gap: 5, marginTop: spacingY._20 }}>
                    <Typo size={30} fontWeight={800}>Hey,</Typo>
                    <Typo size={30} fontWeight={800}>Welcome Back</Typo>
                </View>

                {/* Form */}

                <View style={styles.form}>
                    <Typo size={16} color={colors.textLighter}>
                        Login Now to track all your expenses
                    </Typo>

                    {/* Input Email */}
                    <Input
                        placeholder='Enter your email'
                        onChangeText={value => emailRef.current = value}
                        icon={
                            <Icons.At
                                size={verticalScale(26)}
                                color={colors.neutral300}
                            />
                        }
                    />

                    {/* Input Password */}

                    <Input
                        placeholder='Enter your password'
                        secureTextEntry
                        onChangeText={value => passwordRef.current = value}
                        icon={
                            <Icons.Password 
                                size={verticalScale(26)}
                                color={colors.neutral300}
                            />
                        }
                    />

                </View>


            </View>
        </ScreenWrapper>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: spacingY._30,
        paddingHorizontal: spacingX._20
    },

    welcometext: {
        fontSize: verticalScale(20),
        fontWeight: 'bold',
        color: colors.text
    },

    form: {
        gap: spacingY._20
    },

    forgotPassword: {
        textAlign: 'right',
        fontWeight: '500',
        color: colors.text
    },

    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5
    },

    footerText: {
        textAlign: 'center',
        color: colors.text,
        fontSize: verticalScale(15)
    }
})