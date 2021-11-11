import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import ProductItem from '../../components/ProductItem'

import products from '../../data/cart'
import Button from '../../components/Button'

const ShoppingCartScreen
    = () => {

        const totalPrice = products.reduce((sumedPrice, product) => (
            sumedPrice + product.item.price * product.quantity
        ), 0)

        return (
            <View style={styles.page}>
                <View>
                    <Text style={{ fontSize: 18 }}>Subtotal ({products.length}: items):
                    <Text style={{ color: "#e47911", fontWeight: "bold" }}>
                            {" "}${totalPrice.toFixed(2)}
                        </Text>
                    </Text>
                    <Button text="Proceed to Checkout"
                        onPress={() => { console.warn("go to checkout") }}
                        containerStyles={{ backgroundColor: "#f7e300", borderColor: '#c7b702' }}
                    />
                </View>

                {/* render product component */}
                <FlatList data={products} renderItem={({ item }) => (
                    <ProductItem cartItem={item} />
                )} showsVerticalScrollIndicator={false} />
            </View>
        )
    }

export default ShoppingCartScreen


const styles = StyleSheet.create({
    page: {
        padding: 10
    }
})
