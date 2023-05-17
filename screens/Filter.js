import React, {Component} from 'react';
import Counter from 'react-native-counters';
import {Icon} from 'react-native-elements';
import {CheckBox, Header} from 'react-native-elements';
import {RFValue} from 'react-native-responsive-fontsize';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native';
import {Dimensions} from 'react-native';
import {FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SliderExample from './RSlider';
import {Pressable} from 'react-native';
const upperList = [
  {
    id: 1,
    text: 'All',
  },
  {
    id: 2,
    text: 'Popular',
  },
  {
    id: 3,
    text: 'FastFood',
  },
  {
    id: 4,
    text: 'FastDelivery',
  },
  {
    id: 5,
    text: 'Indian',
  },
  {
    id: 6,
    text: 'Discount',
  },
];
class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
    };
  }
  renderUpperList = ({item}) => (
    <View
      style={{
        paddingVertical: 15,
        width: Dimensions.get('screen').width / 3.4,
        shadowColor: 'black',
        elevation: 5,
        // height: Dimensions.get('screen').height / 10,
        // backgroundColor: '#fff',
      }}>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          // width: Dimensions.get('screen').width / 4,
          height: Dimensions.get('screen').height / 20,
          backgroundColor: '#fff',
          margin: 10,
          alignItems: 'center',
          borderRadius: 10,
        }}>
        <Text
          style={{
            fontFamily: 'Alkatra-Bold',
            fontSize: RFValue(12, 580),
            color: 'black',
          }}>
          {item.text}
        </Text>
      </TouchableOpacity>
    </View>
  );
  renderCentralComponent = () => (
    <View
      style={{
        justifyContent: 'center',
      }}>
      <Text
        style={{
          // textAlign: 'center',
          fontSize: RFValue(18, 580),
          // fontFamily: 'PTSans-Bold',
          fontFamily: 'PTSans-Bold',
          color: 'black',
          // justifyContent: 'center',
        }}>
        Filter
      </Text>
    </View>
  );

  renderLeftComponent = () => (
    <View>
      <Pressable
        style={{justifyContent: 'center'}}
        onPress={() => {
          this.props.navigation.navigate('Home');
        }}>
        <Icon name="chevron-back" type="ionicon" size={25} />
      </Pressable>
    </View>
  );
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header
            leftComponent={this.renderLeftComponent}
            centerComponent={this.renderCentralComponent}
            containerStyle={{backgroundColor: '#fff'}}
          />
          <View
            style={{
              // backgroundColor: 'red',
              height: Dimensions.get('screen').height / 11,
              justifyContent: 'flex-start',
              alignSelf: 'flex-start',
            }}>
            <FlatList
              data={upperList}
              key={'#'}
              horizontal
              keyExtractor={item => '#' + item.id}
              renderItem={this.renderUpperList}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <Text
            style={{
              fontFamily: 'Alkatra-Regular',
              fontSize: 20,
              marginLeft: 10,
            }}>
            CUISINE
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {/* all item checkbox */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: Dimensions.get('screen').width / 2,
              }}>
              <CheckBox
                checked={this.state.isSelected}
                onPress={() =>
                  this.setState({
                    isSelected: !this.state.isSelected,
                  })
                }
              />
              <Text
                style={{
                  fontFamily: 'Alkatra-Regular',
                  fontSize: 20,
                  color: 'black',
                }}>
                All
              </Text>
            </View>
            {/* asian checkbox */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: Dimensions.get('screen').width / 2,
              }}>
              <CheckBox
                checked={this.state.isSelected}
                onPress={() =>
                  this.setState({
                    isSelected: !this.state.isSelected,
                  })
                }
              />
              <Text
                style={{
                  fontFamily: 'Alkatra-Regular',
                  fontSize: 20,
                  color: 'black',
                }}>
                Asian
              </Text>
            </View>
          </View>
          {/* all item checkbox */}
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: Dimensions.get('screen').width / 2,
              }}>
              <CheckBox
                checked={this.state.isSelected}
                onPress={() =>
                  this.setState({
                    isSelected: !this.state.isSelected,
                  })
                }
              />
              <Text
                style={{
                  fontFamily: 'Alkatra-Regular',
                  fontSize: 20,
                  color: 'black',
                }}>
                Italian
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: Dimensions.get('screen').width / 2,
              }}>
              <CheckBox
                checked={this.state.isSelected}
                onPress={() =>
                  this.setState({
                    isSelected: !this.state.isSelected,
                  })
                }
              />
              <Text
                style={{
                  fontFamily: 'Alkatra-Regular',
                  fontSize: 20,
                  color: 'black',
                }}>
                Ukranian
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: Dimensions.get('screen').width / 2,
              }}>
              <CheckBox
                checked={this.state.isSelected}
                onPress={() =>
                  this.setState({
                    isSelected: !this.state.isSelected,
                  })
                }
              />
              <Text
                style={{
                  fontFamily: 'Alkatra-Regular',
                  fontSize: 20,
                  color: 'black',
                }}>
                European
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: Dimensions.get('screen').width / 2,
              }}>
              <CheckBox
                checked={this.state.isSelected}
                onPress={() =>
                  this.setState({
                    isSelected: !this.state.isSelected,
                  })
                }
              />
              <Text
                style={{
                  fontFamily: 'Alkatra-Regular',
                  fontSize: 20,
                  color: 'black',
                }}>
                British
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: Dimensions.get('screen').width / 2,
              }}>
              <CheckBox
                checked={this.state.isSelected}
                onPress={() =>
                  this.setState({
                    isSelected: !this.state.isSelected,
                  })
                }
              />
              <Text
                style={{
                  fontFamily: 'Alkatra-Regular',
                  fontSize: 20,
                  color: 'black',
                }}>
                Japanese
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: Dimensions.get('screen').width / 2,
              }}>
              <CheckBox
                checked={this.state.isSelected}
                onPress={() =>
                  this.setState({
                    isSelected: !this.state.isSelected,
                  })
                }
              />
              <Text
                style={{
                  fontFamily: 'Alkatra-Regular',
                  fontSize: 20,
                  color: 'black',
                }}>
                Georgian
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: Dimensions.get('screen').width / 2,
              }}>
              <CheckBox
                checked={this.state.isSelected}
                onPress={() =>
                  this.setState({
                    isSelected: !this.state.isSelected,
                  })
                }
              />
              <Text
                style={{
                  fontFamily: 'Alkatra-Regular',
                  fontSize: 20,
                  color: 'black',
                }}>
                American
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: Dimensions.get('screen').width / 2,
              }}>
              <CheckBox
                checked={this.state.isSelected}
                onPress={() =>
                  this.setState({
                    isSelected: !this.state.isSelected,
                  })
                }
              />
              <Text
                style={{
                  fontFamily: 'Alkatra-Regular',
                  fontSize: 20,
                  color: 'black',
                }}>
                Mixed
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontFamily: 'Alkatra-Regular',
              fontSize: 20,
              color: 'black',
              marginLeft: 15,
            }}>
            Rate
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: Dimensions.get('screen').width / 3,
                // backgroundColor: 'red',
              }}>
              <CheckBox
                checked={this.state.isSelected}
                onPress={() =>
                  this.setState({
                    isSelected: !this.state.isSelected,
                  })
                }
              />
              <Text
                style={{
                  fontFamily: 'Alkatra-Regular',
                  fontSize: 20,
                  color: 'black',
                }}>
                Low
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: Dimensions.get('screen').width / 3,
              }}>
              <CheckBox
                checked={this.state.isSelected}
                onPress={() =>
                  this.setState({
                    isSelected: !this.state.isSelected,
                  })
                }
              />
              <Text
                style={{
                  fontFamily: 'Alkatra-Regular',
                  fontSize: 20,
                  color: 'black',
                }}>
                Middle
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: Dimensions.get('screen').width / 3,
              }}>
              <CheckBox
                checked={this.state.isSelected}
                onPress={() =>
                  this.setState({
                    isSelected: !this.state.isSelected,
                  })
                }
              />
              <Text
                style={{
                  fontFamily: 'Alkatra-Regular',
                  fontSize: 20,
                  color: 'black',
                }}>
                High
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <SliderExample
              min={this.state.min}
              max={this.state.max}
              navigate={this.props.navigation}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Filter;
