import React, {Component} from 'react';
import {View, Text, Pressable} from 'react-native';
import TopNav from './TopNav';
import {Header, Icon} from 'react-native-elements';
import {RFValue} from 'react-native-responsive-fontsize';

class Orders extends Component {
  renderLeftComponent = () => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center', width: 200}}>
        <Pressable
          onPress={() => {
            this.props.navigation.navigate('Home');
          }}>
          <Icon
            name="chevron-back-outline"
            type="ionicon"
            size={25}
            color={'white'}
          />
        </Pressable>
      </View>
    );
  };
  renderCentralComponent = () => (
    <View>
      <Text
        style={{
          paddingLeft: 10,

          color: 'white',
          fontSize: RFValue(14, 580),
          fontFamily: 'PTSans-Bold',
        }}>
        My Orders
      </Text>
    </View>
  );
  render() {
    return (
      <View>
        <Header
          leftComponent={this.renderLeftComponent}
          centerComponent={this.renderCentralComponent}
          containerStyle={{
            backgroundColor: '#f7963b',

            borderRadius: 20,
            // paddingHorizontal: 0,
          }}
        />
        <View style={{width: '100%', height: '100%'}}>
          <TopNav />
        </View>
      </View>
    );
  }
}
export default Orders;
