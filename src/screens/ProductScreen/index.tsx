import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import styles from './styles'
import product from '../../data/product'
import { Picker } from "@react-native-picker/picker";
import QuantitySelector from '../../components/QuantitySelector'
import Button from '../../components/Button'
import ImageCarousel from '../../components/ImageCarousel'

export default function ProductScreen() {
    const [selectedOption, setSelectedOption] = useState(product.options[0] ? product.options[0] : null)
    const [quantity, setQuantity] = useState(1)
    return (
        <ScrollView style={styles.root}>
            <Text style={styles.title}>{product.title}</Text>

            {/* Image Carousel */}
            <ImageCarousel images={product.images} />
            {/* Selectors */}
            <Picker
                selectedValue={selectedOption}
                onValueChange={(itemValue) => setSelectedOption(itemValue)}
            >
                {product.options.map(prod => <Picker.Item label={prod} value={prod} />
                )}
            </Picker>

            {/* Price */}
            <Text style={styles.price}>from ${product.price} {product.oldPrice && <Text style={styles.oldprice}>${product.oldPrice}</Text>}</Text>

            {/* Description */}

            <Text style={styles.description}>{product.description}</Text>
            {/* Quantity Selector */}

            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

            {/* Button */}
            <Button text={"Add to Cart"} onPress={() => { console.warn("Add to Cart") }} />
            <Button text={"Buy now"} onPress={() => { console.warn("buy now") }} />

        </ScrollView>
    )
}
