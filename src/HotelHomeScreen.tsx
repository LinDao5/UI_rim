import React, {useState} from "react"
import {FlatList, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Config from './Config'
import HotelListItem from './hotel_booking/HotelListItem'
import {HOTEL_LIST} from "./hotel_booking/model/hotel_list_data"
import flatten = StyleSheet.flatten

interface Props {
}

const HotelHomeScreen: React.FC<Props> = () => {

    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(() => {
        const date = new Date()
        date.setDate(date.getDate() + 5)
        return date
    })
    const [showCal, setShowCal] = useState<boolean>(false)
    const [showFilter, setShowFilter] = useState<boolean>(false)

    return (
        <>
            <SafeAreaView style={{flex: 1}}>
                <FlatList
                    data={HOTEL_LIST}
                    renderItem={(data) =>
                        data.index > 0 ? (
                            <HotelListItem {...{data}}/>
                        ) : (
                            <View style={styles.stickyHeaderContainer}>
                                <Text style={styles.hotelCountText}>530 hotels found</Text>

                                <Pressable
                                    style={{flexDirection: "row", padding: 0}}
                                    android_ripple={{color: "lightgray"}}
                                    onPress={() => {
                                    }}
                                >
                                    <Text style={{fontSize: 16, fontFamily: "WorkSans-Regular"}}>
                                        Filter
                                    </Text>
                                    <Icon
                                        name="sort"
                                        style={{paddingHorizontal: 8}}
                                        size={24}
                                        color="#54D3C2"
                                    />
                                </Pressable>
                            </View>
                        )
                    }
                    keyExtractor={(item) => item.id.toString()}
                    stickyHeaderIndices={[1]}
                    nestedScrollEnabled
                    ListHeaderComponent={() => (
                        <View style={{backgroundColor: "rgb(242,242,242)"}}>
                            <View style={{flexDirection: "row", padding: 16}}>
                                <TextInput
                                    style={styles.searchInput}
                                    placeholder="London..."
                                    selectionColor="#54D3C2"
                                />
                                <Pressable
                                    style={({pressed}) => [
                                        styles.searchBtn,
                                        {
                                            opacity: !Config.isAndroid && pressed ? 0.6 : 1
                                        }
                                    ]}
                                    onPress={() => {}}
                                    android_ripple={{
                                        color:"grey",
                                        radius: 28,
                                        borderless: true
                                    }}
                                >
                                    <Icon
                                        name="search"
                                        size={30}
                                        color="white"
                                    />
                                </Pressable>
                            </View>
                        </View>
                    )}
                />
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    stickyHeaderContainer: {
        backgroundColor: "white",
        flexDirection: "row",
        paddingHorizontal: 24,
        paddingVertical: 8
    },
    hotelCountText: {
        flex: 1,
        fontSize: 16,
        alignSelf: "center",
        fontFamily: "WorkSans-Regular"
    },
    searchInput: {
        flex: 1,
        backgroundColor: "white",
        borderRadius: 32,
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginRight: 16,
        fontSize: 18,
        elevation: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65
    },
    searchBtn: {
        padding: 12,
        backgroundColor: "#54D3C2",
        borderRadius: 36
    }
})

export default HotelHomeScreen
