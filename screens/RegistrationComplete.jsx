import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import Header from '../components/common/Header'

const RegistrationComplete = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
           <Header title={"Enter Personal Information"} showicon={true}/>
            <View style={{ backgroundColor: "#FA4A0C", padding: "5%", zIndex: 0, width: "100%", height: "25%",  }}>
                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "10%"
                }}>
                    <View style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "100%"
                    }}>
                        <Text style={{
                            maxWidth: "70%",
                            fontFamily: "OpenSans-Regular",
                            color: "white",
                            fontSize: 16,
                            lineHeight: 21
                        }}>
                            Your application is under
                            Verification.
                        </Text>
                        <Text style={{
                            maxWidth: "80%",
                            fontFamily: "OpenSans-Regular",
                            color: "white",
                            fontSize: 16,
                            lineHeight: 21
                        }}>
                            Activation of account may take
                            upto 24hrs.
                        </Text>
                    </View>
                    <View>
                        <Image
                            style={{ height: 120, width: 100, resizeMode: "contain" }}
                            source={{
                                uri: "https://cdn-icons-png.flaticon.com/512/2573/2573990.png"
                            }} />
                    </View>
                </View>
            </View>
            <ScrollView style={{ marginTop: "10%" }}>
                <View style={{ paddingHorizontal: 10, paddingVertical: 20 }}>
                    <View>
                        <Text style={{ color: "#000", fontFamily: "OpenSans-Medium", fontSize: 20, lineHeight: 27 }}>Completed Docs</Text>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <CompletedDoc title={"Personal Info"} href={"personal-info"} />
                        <CompletedDoc title={"Personal Documents"} href={"personal-docs"} />
                        <CompletedDoc title={"Vehicle Details"} href={"vehicle-details"} />
                        <CompletedDoc title={"Bank Account Details"} href={"bank-account-details"} />
                        <CompletedDoc title={"Work Details"} href={"work-details"} />
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("vehicle-details")} style={{ marginVertical: "10%", backgroundColor: "#FA4A0C", borderRadius: 10, height: 50, display: "flex", justifyContent: "center", alignItems: "center", width: "80%", marginHorizontal: "auto" }}>
                    <Text style={{ color: "#fff", fontSize: 16, fontFamily: "OpenSans-Medium", textAlign: "center", }}>Continue</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default RegistrationComplete

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        position: "relative"
    }
})



const CompletedDoc = ({ title }) => {
    return (
        <View style={{ backgroundColor: "#fff", padding: 10, borderColor: "#D6D6D6", borderWidth: 0.5, display: "flex", flexDirection: "row", alignItems: "center", borderRadius: 10, minHeight: 50, marginVertical: 5 }}>
            <View>
                <Text style={{ fontFamily: "OpenSans-Regular", fontSize: 15, color: "#60B246" }}>{title}</Text>
            </View>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
                <MaterialIcons name='done' size={25} color={"#60B246"} />
            </View>
        </View>
    )
}