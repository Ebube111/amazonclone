import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'

interface ButtonProps {
    text: string,
    onPress: () => void,
    containerStyles: object
}

const Button = ({ text, onPress, containerStyles }: ButtonProps) => {
    return (
        <Pressable style={{ ...styles.root, ...containerStyles }} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: "#e47911",
        marginVertical: 10,
        height: 35,
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#a15e1b",
        alignItems: "center"
    },
    text: {
        fontSize: 16,
        color: "black"
    }
})

export default Button
