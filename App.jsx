import React, { useState, createContext, useContext } from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import AppNavigator from './navigation/AppNavigator';
import { OrderProvider } from './context/OrderContext';






const App = () => {


  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <OrderProvider>
        <AppNavigator />
        </OrderProvider>
    </PersistGate>
   </Provider>
  );
};


export default App;
