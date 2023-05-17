import React, {Component} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
const Top = createMaterialTopTabNavigator();
import OnGoing from './OnGoing';
import OrderHistory from './OrderHistory';
class TopNav extends Component {
  render() {
    return (
      <Top.Navigator>
        <Top.Screen name="Ongoing" component={OnGoing} />
        <Top.Screen name="OrderHistory" component={OrderHistory} />
      </Top.Navigator>
    );
  }
}
export default TopNav;
