import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import RadioButton from 'react-native-radio-button'
import { useState } from 'react'

const OrderDeliveryType = () => {
    const [orderTypePref, setOrderTypePref] = useState(null)
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Header />
            <View>
                <Text
                    style={{
                        fontFamily: "OpenSans-Regular",
                        maxWidth: "75%",
                        marginHorizontal: "auto",
                        marginVertical: "3%",
                        textAlign: "center",
                        fontSize: 14,
                        lineHeight: 21,
                        letterSpacing: 0.05
                    }}
                >
                    Your Selection will be valid for 30 days. You can change your preferences after that.
                </Text>
            </View>
            <View style={{ marginTop: "10%" }}>
                <OrderTypeCard
                    heading={"Food"}
                    secondaryHeading={"All Food orders in your selected and nearby areas"}
                    orderTypePref={orderTypePref}
                    setOrderTypePref={setOrderTypePref}
                />
                <OrderTypeCard
                    heading={"Grocery & Parcels"}
                    secondaryHeading={"All Grocery & Parcels orders in your selected and nearby areas"}
                    orderTypePref={orderTypePref}
                    setOrderTypePref={setOrderTypePref}
                />

            </View>
            <TouchableOpacity onPress={() => navigation.navigate("vehicle-selection")} style={{ marginTop: "15%", width: "90%", height: 64, marginHorizontal: "auto", backgroundColor: "#FA4A0C", padding: 10, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Text style={{ color: "#fff", fontSize: 24, fontFamily: "OpenSans-Regular" }}>Continue</Text>
            </TouchableOpacity>
        </View>
    )
}

export default OrderDeliveryType

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    }
})

const Header = () => {
    const navigation = useNavigation()
    return (
        <View style={{ backgroundColor: "#202020", borderBottomStartRadius: 25, borderBottomEndRadius: 25, padding: "7%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", gap: 10 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name="arrowleft" color="#fff" size={20} />
            </TouchableOpacity>
            <View>
                <Text style={{ color: "#fff", fontSize: 20, fontFamily: "OpenSans-Regular", textAlign: "center", maxWidth: "90%", marginHorizontal: "auto" }}>Select the orders you would like to deliver</Text>
            </View>
        </View>
    )
}


const OrderTypeCard = ({ heading, secondaryHeading, orderTypePref, setOrderTypePref }) => {

    return (
        <View style={{
            backgroundColor: "#fff",
            elevation: 1,
            width: "90%",
            marginHorizontal: "auto",
            padding: "5%",
            borderRadius: 10,
            marginVertical: "3%",
            borderColor: "#6D6D6D80",
            borderWidth: 1
        }}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <View>
                    <RadioButton
                        animation={'bounceIn'}
                        isSelected={heading === orderTypePref}
                        onPress={() => setOrderTypePref(heading)}
                        size={8}
                        innerColor={heading === orderTypePref ? "#FA4A0C" : "#fff"}
                        outerColor={"#000"}
                    />
                </View>
                <View>
                    <Text style={{
                        fontSize: 14,
                        fontFamily: "OpenSans-Bold",
                        marginLeft: 10,
                        lineHeight: 19
                    }}>
                        {heading}
                    </Text>
                </View>
            </View>
            <View>
                <Text style={{
                    fontSize: 12,
                    fontFamily: "OpenSans-Regular",
                    marginLeft: 18,
                    lineHeight: 17,
                    maxWidth: "60%",
                    marginHorizontal: "auto"

                }}>{secondaryHeading}</Text>
            </View>

        </View>
    )
}