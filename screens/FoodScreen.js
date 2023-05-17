import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Pressable,
  Alert,
  Image,
} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import {Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import CountDown from 'react-native-countdown-component';
import Counter from 'react-native-counters';
class FoodScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      show: false,
      more: false,
      pshow: false,
    };
  }
  renderLeftComponent = () => (
    <Pressable
      onPress={() => {
        this.props.navigation.navigate('Signup');
      }}>
      <View style={{justifyContent: 'center'}}>
        <Icon name="chevron-back" type="ionicon" size={25} />
      </View>
    </Pressable>
  );

  // header right component
  renderRightComponent = () => (
    <View>
      <Icon name="shopping-bag" type="Entypo" size={25} />
    </View>
  );
  render() {
    return (
      <View style={{flex: 1}}>
        <Header
          leftComponent={this.renderLeftComponent}
          rightComponent={this.renderRightComponent}
          cen
          centerComponent={this.renderCentralComponent}
          containerStyle={{
            backgroundColor: 'white',
            // backgroundColor: '#fff',
            borderRadius: 20,
            // shadowColor: 'black',
            // // shadowOffset: {width: -4, height: 4},
            // shadowOpacity: 1,
            // shadowRadius: 15,
            // elevation: 10,
            // justifyContent: 'center',rr
            // height: Dimensions.get('screen').height / 10,
          }}
        />
        <ScrollView>
          <View
            style={{
              alignSelf: 'center',
              justifyContent: 'center',
              // alignItems: 'center',
              alignContent: 'center',
              marginVertical: 50,
              backgroundColor: 'white',
              width: Dimensions.get('screen').width / 1.04,
              // height: Dimensions.get('screen').height / 1.1,
              justifyContent: 'flex-start',
              borderRadius: 15,
              // backgroundColor: '#fff',
              // backgroundColor: '#fff',
              // borderRadius: 20,
              // shadowColor: 'black',
              // elevation: 5,
            }}>
            <View
              style={{
                // backgroundColor: 'red',
                alignSelf: 'flex-end',
                marginRight: 20,
                top: 40,
                zIndex: 1,
              }}>
              <Pressable
                onPress={() => {
                  this.setState({
                    liked: !this.state.liked,
                  });
                }}>
                {this.state.liked ? (
                  <Icon name="heart" type="ionicon" size={25} color={'green'} />
                ) : (
                  <Icon
                    name="heart-outline"
                    type="ionicon"
                    size={30}
                    color={'green'}
                  />
                )}
              </Pressable>
            </View>

            <Image
              style={{
                // marginTop: 10,
                alignSelf: 'center',
                // borderRadius: 20,
                width: Dimensions.get('screen').width / 1.1,
                height: Dimensions.get('screen').height / 2.7,
                // marginBottom: 3,
                borderRadius: 15,
              }}
              source={require('../Images/lemon.jpg')}
            />
            <View
              style={{
                backgroundColor: 'green',
                borderRadius: 20,
                width: Dimensions.get('screen').width / 2.7,
                alignItems: 'center',
                justifyContent: 'flex-start',
                marginLeft: 10,

                // height: Dimensions.get('screen').height / 8,
              }}>
              <Text
                style={{
                  // backgroundColor: 'green',

                  fontSize: RFValue(12, 580),
                  color: 'white',
                  fontFamily: 'PTSans-Bold',
                  // justifyContent: 'flex-start',
                  textAlign: 'left',
                  marginHorizontal: 4,
                }}>
                Fruites & vegetable
              </Text>
            </View>
            <View
              style={{
                width: Dimensions.get('screen').width / 1.1,
                marginHorizontal: 15,
                backgroundColor: 'white',
                borderRadius: 15,
              }}>
              <Text
                style={{
                  fontSize: RFValue(13, 580),
                  color: 'black',
                  marginHorizontal: 4,
                  fontFamily: 'PTSans-Bold',
                  // justifyContent: 'flex-start',
                }}>
                Fresh Lemons
              </Text>
              <Text
                style={{
                  fontSize: RFValue(13, 580),
                  color: 'black',
                  fontFamily: 'PTSans-Bold',
                  // justifyContent: 'flex-start',
                }}>
                1 kg
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: RFValue(18, 580),
                    color: 'green',
                    fontFamily: 'PTSans-Bold',
                    marginHorizontal: 4,
                  }}>
                  ₹
                </Text>
                <Text
                  style={{
                    fontSize: RFValue(15, 580),
                    color: 'green',
                    fontFamily: 'PTSans-Bold',
                    marginHorizontal: 4,
                    // justifyContent: 'flex-start',
                  }}>
                  140
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  backgroundColor: 'white',
                  height: Dimensions.get('screen').height / 18,
                  alignItems: 'center',
                  marginBottom: 10,
                  borderRadius: 15,
                  marginHorizontal: 4,
                }}>
                <Text
                  style={{
                    fontFamily: 'Alkatra-Bold',
                    fontSize: RFValue(14, 580),
                    color: 'black',
                    fontFamily: 'PTSans-Bold',
                    marginHorizontal: 4,
                  }}>
                  Quantity
                </Text>
                <Counter
                  max={20}
                  buttonStyle={{
                    borderColor: 'black',
                  }}
                  buttonTextStyle={{color: 'black'}}
                  countTextStyle={{color: 'black'}}
                />
              </View>
              <View
                style={{
                  width: Dimensions.get('screen').width / 1.1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  backgroundColor: 'white',
                  borderRadius: 15,
                  paddingHorizontal: 4,
                }}>
                <Text
                  style={{
                    fontSize: RFValue(14, 580),
                    color: 'black',
                    fontFamily: 'PTSans-Bold',
                  }}>
                  Description
                </Text>
                {this.state.show ? (
                  <Pressable
                    onPress={() => {
                      this.setState({
                        show: !this.state.show,
                      });
                    }}>
                    <Icon name="chevron-up" type="ionicon" size={25} />
                  </Pressable>
                ) : (
                  <Pressable
                    onPress={() => {
                      this.setState({
                        show: !this.state.show,
                      });
                    }}>
                    <Icon name="chevron-down" type="ionicon" size={25} />
                  </Pressable>
                )}
              </View>

              {this.state.show ? (
                <View
                  style={{
                    width: Dimensions.get('screen').width / 1.1,
                    borderRadius: 15,
                    backgroundColor: 'white',
                  }}>
                  <Text
                    style={{
                      fontSize: RFValue(12, 580),
                      color: 'black',
                      fontFamily: 'PTSans-Bold',
                      textAlign: 'left',
                      marginHorizontal: 4,
                    }}>
                    The average orange weighs 5 oz. (140 g). Like all citrus
                    fruits, oranges are protected externally by a thick crust,
                    which makes them quite resistant to transport. The
                    concentration of water in the fruit, in most commercial
                    varieties, varies from 70% to 92%.
                    <Pressable
                      onPress={() => {
                        this.setState({
                          more: !this.state.more,
                        });
                      }}>
                      <Text
                        style={{
                          fontSize: RFValue(12, 580),
                          color: 'red',
                          fontFamily: 'PTSans-Bold',
                        }}>
                        {' '}
                        View more
                      </Text>
                    </Pressable>
                    {this.state.more ? (
                      <Text
                        style={{
                          fontSize: RFValue(12, 580),
                          color: 'black',
                          fontFamily: 'PTSans-Bold',
                          textAlign: 'left',
                          marginHorizontal: 4,
                        }}>
                        The average orange weighs 5 oz. (140 g). Like all citrus
                        fruits, oranges are protected externally by a thick
                        crust, which makes them quite resistant to transport.
                        The concentration of water in the fruit, in most
                        commercial varieties, varies from 70% to 92%.
                      </Text>
                    ) : (
                      <Text></Text>
                    )}
                    <Text></Text>
                  </Text>
                </View>
              ) : (
                <View></View>
              )}
              <View
                style={{
                  width: Dimensions.get('screen').width / 1.1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  backgroundColor: 'white',
                  borderRadius: 15,
                  marginTop: 20,
                }}>
                <Text
                  style={{
                    fontSize: RFValue(14, 580),
                    color: 'black',
                    fontFamily: 'PTSans-Bold',
                    paddingLeft: 4,
                  }}>
                  Product Details
                </Text>
                {this.state.show ? (
                  <Pressable
                    onPress={() => {
                      this.setState({
                        pshow: !this.state.pshow,
                      });
                    }}>
                    <Icon name="chevron-up" type="ionicon" size={25} />
                  </Pressable>
                ) : (
                  <Pressable
                    onPress={() => {
                      this.setState({
                        pshow: !this.state.pshow,
                      });
                    }}>
                    <Icon name="chevron-down" type="ionicon" size={25} />
                  </Pressable>
                )}
              </View>
              {this.state.pshow ? (
                <View
                  style={{
                    width: Dimensions.get('screen').width / 1.1,
                    borderRadius: 15,
                    backgroundColor: 'white',
                  }}>
                  <Text
                    style={{
                      fontSize: RFValue(12, 580),
                      color: 'black',
                      fontFamily: 'PTSans-Bold',
                      textAlign: 'left',
                      marginHorizontal: 4,
                    }}>
                    The average orange weighs 5 oz. (140 g). Like all citrus
                    fruits, oranges are protected externally by a thick crust,
                    which makes them quite resistant to transport. The
                    concentration of water in the fruit, in most commercial
                    varieties, varies from 70% to 92%.
                    <Pressable
                      onPress={() => {
                        this.setState({
                          more: !this.state.more,
                        });
                      }}>
                      <Text
                        style={{
                          fontSize: RFValue(12, 580),
                          color: 'red',
                          fontFamily: 'PTSans-Bold',
                        }}>
                        View more
                      </Text>
                    </Pressable>
                    {this.state.more ? (
                      <Text
                        style={{
                          fontSize: RFValue(12, 580),
                          color: 'black',
                          fontFamily: 'PTSans-Bold',
                          textAlign: 'left',
                          marginHorizontal: 4,
                        }}>
                        The average orange weighs 5 oz. (140 g). Like all citrus
                        fruits, oranges are protected externally by a thick
                        crust, which makes them quite resistant to transport.
                        The concentration of water in the fruit, in most
                        commercial varieties, varies from 70% to 92%.
                      </Text>
                    ) : (
                      <Text></Text>
                    )}
                    <Text></Text>
                  </Text>
                </View>
              ) : (
                <View></View>
              )}
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 10,
              }}>
              <Pressable
                onPress={() => {
                  alert('item adeed ');
                  this.props.navigation.navigate('Cart');
                }}
                style={{
                  backgroundColor: '#2AC07E',
                  width: Dimensions.get('screen').width / 1.1,
                  height: Dimensions.get('screen').height / 16,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: RFValue(18, 580),
                    fontFamily: 'PTSans-Bold',
                  }}>
                  Add to Cart
                </Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default FoodScreen;
