import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps'

const Home = () => {
    return (
        <View style={styles.container}>
            <MapView
                style={{ flex: 1 }}
                provider={'google'}
                showsUserLocation={true}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} />
            </MapView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        position: "relative"
    }
})