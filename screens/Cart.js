import React, {Component} from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Header, Icon} from 'react-native-elements';
import {Dimensions} from 'react-native';
import {Pressable} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {Alert} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Counter from 'react-native-counters';
const Data = [
  {
    id: 1,
    url: require('../Images/orange.jpg'),
    name: 'Beverages',
    text: 'something something something something',
    price: '400 ₹',
    tag: 'Fruits',
  },
  {
    id: 2,
    url: require('../Images/pomegranate.jpg'),
    name: 'Dairy',
    text: 'something something something something',
    price: '400 ₹',
    tag: 'Fruits',
  },
  {
    id: 3,
    url: require('../Images/fruits1.jpg'),
    name: 'Fruits',
    text: 'something something something something',
    price: '400 ₹',
    tag: 'Fruits',
  },
  {
    id: 4,
    url: require('../Images/kiwi.jpg'),
    name: 'Groceries',
    text: 'something something something something',
    price: '400 ₹',
    tag: 'Fruits',
  },
];
class Cart extends Component {
  state = {
    selectedIndex: 0,
    hidden: true,
  };
  flatlistHorizontal = ({item}) => (
    <View
      style={{
        flexDirection: 'row',
        marginTop: '2%',
        width: Dimensions.get('screen').width / 1.1,
        height: Dimensions.get('screen').height / 6,
        justifyContent: 'space-between',
        borderWidth: 0.5,
        borderColor: 'black',
        borderRadius: 15,
        // backgroundColor: 'red',
        // alignItems: 'flex-start',
        // justifyContent: 'flex-start',
      }}>
      <View
        style={{
          // backgroundColor: '#c23683',
          backgroundColor: '#fff',
          width: Dimensions.get('screen').width / 4,
          height: Dimensions.get('screen').height / 8,
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 2,
          borderRadius: 10,
          alignSelf: 'center',
          borderWidth: 0.5,
          borderColor: 'black',
          //   alignSelf: 'flex-start',
        }}>
        <Image
          source={item.url}
          style={{
            width: Dimensions.get('screen').width / 5,
            height: Dimensions.get('screen').height / 11,
          }}
        />
      </View>
      <View style={{flexDirection: 'column'}}>
        <View
          style={{
            width: Dimensions.get('screen').width / 1.6,
            height: Dimensions.get('screen').height / 26,
            flexDirection: 'row',
            paddingTop: 10,
            justifyContent: 'space-between',
            alignContent: 'center',
            marginHorizontal: 10,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: RFValue(12, 580),
              fontFamily: 'PTSans-Bold',
              color: 'green',
            }}>
            {item.tag}
          </Text>
          <Pressable>
            <Icon name="trash-outline" type="ionicon" size={25} color={'red'} />
          </Pressable>
        </View>
        <View
          style={{
            // backgroundColor: 'white',
            width: Dimensions.get('screen').width / 1.6,
            height: Dimensions.get('screen').height / 22,
            marginHorizontal: 10,
          }}>
          <Text
            style={{
              textAlign: 'left',
              fontSize: RFValue(12, 580),
              fontFamily: 'PTSans-Bold',
              color: 'black',
            }}>
            {item.text}
          </Text>
          {/* <Text>
            {item.price}
            {'x'}
            {'1'}
          </Text> */}
        </View>
        <View
          style={{
            // backgroundColor: 'white',
            width: Dimensions.get('screen').width / 1.7,
            height: Dimensions.get('screen').height / 29,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
          }}>
          <Text
            style={{
              fontSize: RFValue(12, 580),
              fontFamily: 'PTSans-Bold',
              color: 'green',
            }}>
            {item.price}
            {'x'}
            {'1'}
          </Text>
          <Text
            style={{
              fontSize: RFValue(12, 580),
              fontFamily: 'PTSans-Bold',
              color: 'black',
            }}>
            {item.price}
          </Text>
        </View>
        <View
          style={{
            width: Dimensions.get('screen').width / 1.7,
            flexDirection: 'row',
            // backgroundColor: 'green',
            // marginRight: 20,
            justifyContent: 'flex-end',
            paddingRight: 35,
          }}>
          <Counter
            max={''}
            min={1}
            start={1}
            buttonStyle={{
              backgroundColor: 'white',
              height: 5,
              width: 10,
              justifyContent: 'center',

              borderColor: 'black',
            }}
            buttonTextStyle={{
              color: '#333',
              fontSize: RFValue(11, 580),
              fontWeight: 'bold',
            }}
            countTextStyle={{
              color: '#333',
              marginTop: -5,
              fontSize: RFValue(11, 580),
              fontWeight: 'bold',
            }}
          />
        </View>
      </View>
    </View>
  );

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

        <Text
          style={{
            paddingLeft: 10,

            color: 'white',
            fontSize: RFValue(14, 580),
            fontFamily: 'PTSans-Bold',
          }}>
          Cart
        </Text>
      </View>
    );
  };
  addNotes = () => (
    <View
      style={{
        paddingHorizontal: 20,
        width: Dimensions.get('screen').width / 1,
        justifyContent: 'center',
      }}>
      <TextInput
        placeholder="Add instructions...."
        style={{
          marginTop: 10,
          borderWidth: 1,
          borderColor: 'grey',
          backgroundColor: 'white',
          borderRadius: 15,
          justifyContent: 'center',
        }}
      />
    </View>
  );

  render() {
    return (
      <View style={{flex: 1}}>
        <Header
          leftComponent={this.renderLeftComponent}
          containerStyle={{
            backgroundColor: '#f7963b',

            borderRadius: 20,
            // paddingHorizontal: 0,
          }}
        />
        <ScrollView>
          <View
            style={{
              alignItems: 'center',
              // backgroundColor: 'red',
              marginHorizontal: '3%',
              // alignSelf: 'center',
            }}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={Data}
              renderItem={this.flatlistHorizontal}
              keyExtractor={item => item.id}
            />
          </View>
          <View
            style={{
              width: Dimensions.get('screen').width / 1.1,
              height: Dimensions.get('screen').height / 18,
              borderRadius: 15,
              backgroundColor: '#f2dcbf',
              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Pressable
              onPress={() => {
                this.props.navigation.navigate('Home');
              }}>
              <Text
                style={{
                  fontSize: RFValue(17, 580),
                  fontFamily: 'PTSans-Bold',
                  color: '#ed4b2b',
                }}>
                Add More Product
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              marginTop: 5,
              width: Dimensions.get('screen').width / 1,
              height: Dimensions.get('screen').height / 10,
              borderTopWidth: 0.5,
              borderBottomWidth: 0.5,
              borderColor: 'grey',
              alignSelf: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 5,
              }}>
              <Text
                style={{
                  fontSize: RFValue(12, 580),
                  fontFamily: 'PTSans-Bold',
                  color: 'black',
                }}>
                Change Address
              </Text>
              <Pressable>
                <Text
                  style={{
                    fontSize: RFValue(12, 580),
                    fontFamily: 'PTSans-Bold',
                    color: '#ed4b2b',
                  }}>
                  Change
                </Text>
              </Pressable>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: Dimensions.get('screen').width / 1.3,
                marginHorizontal: 10,
                // alignItems: 'center',
                marginTop: 10,
              }}>
              <Icon name="location" type="ionicon" size={25} />
              <Text
                style={{
                  fontSize: RFValue(12, 580),
                  fontFamily: 'PTSans-Bold',
                  textAlign: 'left',
                  marginHorizontal: 4,
                  color: 'black',
                }}>
                Bell Road Clement Town,Dehradun uttarakhand, 248001
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignContent: 'center',
              justifyContent: 'center',
            }}>
            <View style={{justifyContent: 'space-evenly'}}>
              <CheckBox
                checked={this.state.selectedIndex == 0}
                onPress={() => this.setState({selectedIndex: 0})}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                uncheckedColor="orange"
                checkedColor="orange"
                color="orange"
              />
              <Text
                style={{
                  color: 'black',
                  fontSize: RFValue(11, 580),
                  fontFamily: 'PTSans-Bold',
                }}>
                Delivery
              </Text>
            </View>
            <View>
              <CheckBox
                checked={this.state.selectedIndex == 1}
                onPress={() => this.setState({selectedIndex: 1})}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                uncheckedColor="orange"
                checkedColor="orange"
                color="orange"
              />
              <Text
                style={{
                  color: 'black',
                  fontSize: RFValue(11, 580),
                  fontFamily: 'PTSans-Bold',
                }}>
                Pick-up
              </Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 5,
              width: Dimensions.get('screen').width / 1,
              // height: Dimensions.get('screen').height / 10,
              borderTopWidth: 0.5,

              borderColor: 'grey',
              alignSelf: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 5,
              }}>
              <Text
                style={{
                  fontSize: RFValue(13, 580),
                  fontFamily: 'PTSans-Bold',
                  color: 'black',
                }}>
                Delivery instructions
              </Text>
              <Pressable
                style={{flexDirection: 'row'}}
                onPress={() => {
                  this.setState({
                    hidden: !this.state.hidden,
                  });
                }}>
                <Icon name="add" type="ionicon" size={20} color={'red'} />
                <Text
                  style={{
                    fontSize: RFValue(12, 580),
                    fontFamily: 'PTSans-Bold',
                    color: '#ed4b2b',
                  }}>
                  Add Notes
                </Text>
              </Pressable>
            </View>
            <View>{this.state.hidden ? this.addNotes() : <View></View>}</View>
          </View>
          <View
            style={{
              marginTop: 5,
              width: Dimensions.get('screen').width / 1,
              height: Dimensions.get('screen').height / 7,
              borderTopWidth: 0.5,
              borderBottomWidth: 0.5,
              borderColor: 'grey',
              alignSelf: 'center',
            }}>
            <View
              style={{
                // flexDirection: 'row',
                marginHorizontal: 10,
              }}>
              <Text
                style={{
                  fontSize: RFValue(14, 580),
                  fontFamily: 'PTSans-Bold',
                  color: 'black',
                }}>
                Price Details
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: Dimensions.get('screen').width / 1.05,
                marginHorizontal: 8,
                // backgroundColor: 'green',
                // alignItems: 'center',
                marginTop: 8,
                justifyContent: 'space-between',
              }}>
              <View>
                <Text
                  style={{
                    fontSize: RFValue(14, 580),
                    fontFamily: 'PTSans-Bold',
                    textAlign: 'left',

                    color: 'black',
                  }}>
                  Total MRP
                </Text>
                <Text
                  style={{
                    fontSize: RFValue(14, 580),
                    fontFamily: 'PTSans-Bold',
                    textAlign: 'left',

                    color: '#ed4b2b',
                  }}>
                  (inclusive of all taxes)
                </Text>
              </View>
              <Text
                style={{
                  fontSize: RFValue(14, 580),
                  fontFamily: 'PTSans-Bold',

                  color: 'black',
                }}>
                ₹ 778.00
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 10,
              }}>
              <Text
                style={{
                  fontSize: RFValue(14, 580),
                  fontFamily: 'PTSans-Bold',
                  color: 'black',
                }}>
                Total
              </Text>
              <Text
                style={{
                  fontSize: RFValue(14, 580),
                  fontFamily: 'PTSans-Bold',
                  color: 'black',
                }}>
                ₹ 778/-
              </Text>
            </View>
          </View>
          <View
            style={{
              width: Dimensions.get('screen').width / 1.1,
              height: Dimensions.get('screen').height / 18,
              borderRadius: 15,
              backgroundColor: '#f7963b',
              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Pressable
              onPress={() => {
                this.props.navigation.navigate('Checkout');
              }}>
              <Text
                style={{
                  fontSize: RFValue(17, 580),
                  fontFamily: 'PTSans-Bold',
                  color: '#fff',
                }}>
                Checkout
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              width: Dimensions.get('screen').width / 1.1,
              height: Dimensions.get('screen').height / 28,
              borderRadius: 15,
              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
              // marginTop: 10,
            }}>
            <Text
              style={{
                fontSize: RFValue(12, 580),
                fontFamily: 'PTSans-Bold',
                color: 'black',
              }}>
              4 items selected for order
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Cart;
