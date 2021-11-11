import React, { useState, useCallback } from 'react'
import { StyleSheet, Text, View, FlatList, Image, useWindowDimensions } from 'react-native'

interface Carousel {
    images: string[];
}

const ImageCarousel = ({ images }: Carousel) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const windowWidth = useWindowDimensions().width

    const onFlatListUpdate = useCallback(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setActiveIndex(viewableItems[0].index || 0)
        }
    }, []);
    return (
        <View style={styles.root}>
            <FlatList
                data={images}
                renderItem={({ item }) => (<Image style={[styles.image, { width: windowWidth - 40 }]} source={{ uri: item }} />)}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={windowWidth - 20}
                snapToAlignment={'center'}
                decelerationRate={'fast'}
                viewabilityConfig={{
                    viewAreaCoveragePercentThreshold: 50,
                }}
                onViewableItemsChanged={onFlatListUpdate}
            />
            <View style={styles.dots}>

                {images.map((image, index) => (
                    <View
                        style={[
                            styles.dot,
                            {
                                backgroundColor: index === activeIndex ? '#c9c9c9' : "#ededed"
                            }]} />
                ))}
            </View>
        </View>
    )
}

export default ImageCarousel

const styles = StyleSheet.create({
    root: {

    },
    image: {
        margin: 10,
        height: 250,
        resizeMode: "contain"

    },
    dots: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    dot: {
        width: 25,
        height: 25,
        borderRadius: 25,
        borderWidth: 1,
        margin: 5
    }
})
