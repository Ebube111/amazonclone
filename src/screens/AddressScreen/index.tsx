import React, { useState } from 'react'
import { Text, View, TextInput, Alert, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { Picker } from "@react-native-picker/picker";
import countryList from 'country-list'
import Button from "../../components/Button"
import styles from './styles'

const countries = countryList.getData()

const AddressScreen = () => {
    const [country, setCountry] = useState(countries[0].code)
    const [fullname, setFullname] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [addressError, setAddressError] = useState("")
    const [city, setCity] = useState("")

    const onCheckout = () => {
        if (addressError) {
            Alert.alert("Fix all field errors before submitting")
        }
        if (!fullname) {
            Alert.alert("Please fill in the fullname field")
            return
        }

        if (!phone) {
            Alert.alert("Please insert a phone number")
        }

    }
    const validateAddress = () => {
        if (address.length < 3) {
            setAddressError("Address is to short")
        }
        if (address.length > 18) {
            setAddressError("Address is too long")
        }
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <ScrollView>
                <View style={styles.root}>
                    <View style={styles.row}>
                        <Picker
                            onValueChange={setCountry}
                            selectedValue={country}
                        >
                            {countries.map(country => (
                                <Picker.Item key={country.code} value={country.code} label={country.name} />
                            ))}
                        </Picker>
                    </View>
                    {/* FULL NAME */}
                    <View style={styles.row}>
                        <Text style={styles.label}>Full name (First and Last name)</Text>
                        <TextInput
                            style={styles.input}
                            value={fullname}
                            placeholder="Full name"
                            onChangeText={setFullname}
                        />
                    </View>

                    {/* PHONE NUMBER */}
                    <View style={styles.row}>
                        <Text style={styles.label}>Phone number</Text>
                        <TextInput
                            style={styles.input}
                            value={phone}
                            placeholder="Phone number"
                            onChangeText={setPhone}
                            keyboardType={'phone-pad'}
                        />
                    </View>

                    {/* ADDRESS */}
                    <View style={styles.row}>
                        <Text style={styles.label}>Address</Text>
                        <TextInput
                            style={styles.input}
                            value={address}
                            placeholder="Address"
                            onEndEditing={validateAddress}
                            onChangeText={(text) => {
                                setAddress(text);
                                setAddressError("")
                            }}
                        />
                        {!!addressError && (
                            <Text style={styles.errorLabel}>{addressError}</Text>
                        )}
                    </View>

                    {/* City */}
                    <View style={styles.row}>
                        <Text style={styles.label}>City</Text>
                        <TextInput
                            style={styles.input}
                            value={city}
                            placeholder="Address"
                            onChangeText={setCity}
                        />
                    </View>
                    <Button text="Checkout" onPress={onCheckout} containerStyles={styles.button} />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default AddressScreen

