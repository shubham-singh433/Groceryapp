import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Icon} from 'react-native-elements';

import Home from './Home';
import Notification from './Notification';
import Search from './Search';
import Favourite from './Favourite';
import Profile from './Profile';
import Orders from './Orders';
import Products from './Products';

const Tab = createBottomTabNavigator();

class TabNav extends Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          initialRouteName: 'Products',
          tabBarStyle: {
            backgroundColor: 'white',
          },
          headerShown: false,

          tabBarIcon: ({focused, color}) => {
            let iconName;
            if (route.name == 'Home') {
              return (
                <Icon
                  name="home"
                  type="ionicon"
                  color={focused ? '#50eb71' : 'black'}
                />
              );
            } else if (route.name == 'Search') {
              return (
                <Icon
                  name="search"
                  type="ionicon"
                  color={focused ? '#50eb71' : 'black'}
                />
              );
            } else if (route.name == 'Favourite') {
              return (
                <Icon
                  name="heart-outline"
                  type="ionicon"
                  color={focused ? '#50eb71' : 'black'}
                />
              );
            } else if (route.name == 'Profile') {
              return (
                <Icon
                  name="person-outline"
                  type="ionicon"
                  color={focused ? '#50eb71' : 'black'}
                />
              );
            } else if (route.name == 'Orders') {
              return (
                <Icon
                  name="shopping-bag"
                  type="Feather"
                  color={focused ? '#50eb71' : 'black'}
                />
              );
            } else if (route.name == 'Products') {
              return (
                <Icon
                  name="grid-outline"
                  type="ionicon"
                  color={focused ? '#50eb71' : 'black'}
                />
              );
            }
            return (
              <Icon name={iconName} color={color} type="ionicon" size={22} />
            );
          },
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Favourite" component={Favourite} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Orders" component={Orders} />
        <Tab.Screen
          name="Products"
          component={Products}
          navigation={this.props.navigation}
        />
      </Tab.Navigator>
    );
  }
}
export default TabNav;
