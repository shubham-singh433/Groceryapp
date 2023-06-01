import React, {Component} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {View, Text, StyleSheet} from 'react-native';
import Swipers from './screens/Swipers';
import Signup from './screens/Signup';
import Otp from './screens/Otp';
import TabNav from './screens/TabNav';

import CreateNew from './screens/CreateNew';
import Home from './screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/Login';
import Maps from './screens/Maps';
import Checkout from './screens/Checkout';
import Cart from './screens/Cart';
import Thankyou from './screens/Thankyou';
import OrderDetails from './screens/OrderDetails';
import Track from './screens/Track';
import DeliveryDetails from './screens/DeliveryDetails';
import TopNav from './screens/TopNav';
import Orders from './screens/Orders';
import FoodScreen from './screens/FoodScreen';
import Filter from './screens/Filter';
import Products from './screens/Products';
const Stack = createNativeStackNavigator();

global.google_key = 'AIzaSyAb52gzLmGK62in6hPYwulzvjK6xho5sk8';
global.api_key = 'https://api.kiranmegamarket.in/api/';
global.img_url = 'https://cdn.kiranmegamarket.in/';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }

  render() {
    // <NavigationContainer>
    //    <Stack.Navigator
    //     initialRouteName="Otp"
    //     screenOptions={{headerShown: false}}></Stack.Navigator>
    //   {/* <Swipers />
    //   {/* <Signup /> */}
    //   {/* <Otp /> */}
    //   {/* // <CreateNew />  */}
    // <NavigationContainer/>
    return (
      <View style={{flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName="Home">
            <Stack.Screen name="Swipers" component={Swipers} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Otp" component={Otp} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="CreateNew" component={CreateNew} />
            <Stack.Screen name="Home" component={TabNav} />
            <Stack.Screen name="Headers" component={Headers} />
            <Stack.Screen
              name="Maps"
              component={Maps}
              navigation={this.props.navigation}
            />

            <Stack.Screen
              name="Cart"
              component={Cart}
              navigation={this.props.navigation}
            />

            <Stack.Screen
              name="FoodScreen"
              component={FoodScreen}
              navigation={this.props.navigation}
            />
            <Stack.Screen
              name="Checkout"
              component={Checkout}
              navigation={this.props.navigation}
            />
            <Stack.Screen
              name="Thankyou"
              component={Thankyou}
              navigation={this.props.navigation}
            />
            <Stack.Screen
              name="OrderDetails"
              component={OrderDetails}
              navigation={this.props.navigation}
            />
            <Stack.Screen
              name="Track"
              component={Track}
              navigation={this.props.navigation}
            />
            <Stack.Screen
              name="DeliveryDetails"
              component={DeliveryDetails}
              navigation={this.props.navigation}
            />
            <Stack.Screen
              name="Filter"
              component={Filter}
              navigation={this.props.navigation}
            />
            {/* <Stack.Screen
              name="Products"
              component={Products}
              navigation={this.props.navigation}
            /> */}
            {/* <Stack.Screen
              name="Orders"
              component={Orders}
              navigation={this.props.navigation}
            /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}
export default App;
