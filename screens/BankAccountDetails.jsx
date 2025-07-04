import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import Header from '../components/common/Header'

const BankAccountDetails = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Header title={"Enter Bank Information"} showicon={true}/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Input label={"Account Number"} placeholder={"16 digit Bank Account Number"} />
                <Input label={"Re-Enter Account Number"} placeholder={"Re-enter 16 digit Bank Account Number"} />
                <Input label={"Bank Name"} placeholder={"Bank Name"} />
                <Input label={"IFSC Code"} placeholder={"IFSC Code"} />
            </ScrollView>
            <TouchableOpacity 
            onPress={() => navigation.navigate("work-details")}
            style={{ marginVertical: "15%", backgroundColor: "#FA4A0C", borderRadius: 10, height: 50, display: "flex", justifyContent: "center", alignItems: "center", width: "80%", marginHorizontal: "auto" }}>
                <Text style={{ color: "#fff", fontSize: 16, fontFamily: "OpenSans-Medium", textAlign: "center", }}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BankAccountDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    }
})



const Input = ({ placeholder, label }) => {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{ width: "90%", marginHorizontal: "auto", marginTop: "5%" }}>
                    <View>
                        <Text style={{
                            color: "#202020", fontSize: 16, fontFamily: "OpenSans-Regular",
                        }}>{label}</Text>
                    </View>
                    <View style={{ marginTop: 5 }}>
                        <TextInput placeholderTextColor={"#000"} style={{ height: 50, borderColor: "#D6D6D6", borderWidth: 1, borderRadius: 10, padding: 10, fontFamily: "OpenSans-Regular", elevation: 5, backgroundColor: "#fff", paddingLeft: 20, color: "#000" }} placeholder={placeholder} />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}