import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import DeliveryLanding from '../screens/Landing';
import Login from '../screens/Login';
import Otp from '../screens/Otp';
import PartnerOnboarding from '../screens/PartnerOnboarding';
import PersonalInfo from '../screens/PersonalInfo';
import PersonalDocs from '../screens/PersonalDocs';
import VehicleDetails from '../screens/VehicleDetails';
import BankAccountDetails from '../screens/BankAccountDetails';
import WorkDetails from '../screens/WorkDetails';
import UploadAdhar from '../screens/UploadAdhar';
import UploadPAN from '../screens/UploadPAN';
import UploadDrivingLicense from '../screens/UploadDrivingLicense';
import RegistrationComplete from '../screens/RegistrationComplete';
import Dashboard from '../screens/Dashboard';
import OrderRequest from '../screens/OrderRequest';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer, useNavigation} from '@react-navigation/native';
const Stack = createNativeStackNavigator();




// Auth stack screens
const AuthStackScreen = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="landing" component={DeliveryLanding} />
    <Stack.Screen name="login" component={Login} />
    <Stack.Screen name="otp" component={Otp} />
    <Stack.Screen name="onboarding" component={PartnerOnboarding} />
    <Stack.Screen name="personal-info" component={PersonalInfo} />
    <Stack.Screen name="personal-docs" component={PersonalDocs} />
    <Stack.Screen name="vehicle-details" component={VehicleDetails} />
    <Stack.Screen name="bank-account-details" component={BankAccountDetails} />
    <Stack.Screen name="work-details" component={WorkDetails} />
    <Stack.Screen name="upload-adhar" component={UploadAdhar} />
    <Stack.Screen name="upload-pan" component={UploadPAN} />
    <Stack.Screen name="upload-driving-license" component={UploadDrivingLicense} />
    <Stack.Screen name="registration-complete" component={RegistrationComplete} />
  </Stack.Navigator>
);

// App stack screens for authenticated users
const AppStackScreen = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="dashboard" component={Dashboard} />
    <Stack.Screen name="order-request" component={OrderRequest} />
  </Stack.Navigator>
);


const AppNavigator = () => {
     const {isAuthenticated}=useSelector((state) => state.auth);
     console.log("isAuthenticated", isAuthenticated);
  return (
     <NavigationContainer>
        {isAuthenticated ? <AppStackScreen /> : <AuthStackScreen />}
      </NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})