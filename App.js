// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Tests</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f9f9',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import Register from './pages/Register';
import Login from './pages/Login';
// import Absen from './pages/Absen';
// import ListAbsen from './pages/ListAbsen';
// import ManagementUser from './pages/ManagementUser';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        {/* <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Absen" component={Absen} />
        <Stack.Screen name="ListAbsen" component={ListAbsen} />
        <Stack.Screen name="ManagementUser" component={ManagementUser} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
