import React, {Component} from 'react';
import {
  Dimensions,
  ScrollView,
  View,
  Image,
  Pressable,
  Text,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {CheckBox, Header, Icon} from 'react-native-elements';
import {FlatList} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
class Products extends Component {
  constructor(props) {
    super(props);
    console.warn('message for props', this.props);
    this.state = {
      // search: '',
      subcategory_link: this.props.route.params.link, //data getting from params
      data: [], //for storing the data fetched from api
      page: '1', // page number
      count: '',
      isLoading: true,
    };
  }
  //component did mount
  componentDidMount() {
    this.fetchDetails(1, this.props.route.params.link);
    this.focusListener = this.props.navigation.addListener('focus', () => {
      this.fetchDetails(1, this.props.route.params.link);
    });
  }

  //load more function
  load_more = () => {
    var data_size = this.state.data.length;
    if (data_size > 9) {
      var page = this.state.page + 1;
      this.setState({isLoading: true, page: page});
      this.fetchDetails(page, this.props.route.params.link);
    }
  };
  fetchDetails = (page, e) => {
    // console.warn('Fetching details', e);
    fetch(global.api_key + 'get-product-list-web', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        category_link: 'all',
        subcategory_link: e,
        page: page,
      }),
    })
      .then(response => response.json())
      .then(json => {
        console.warn('data', json.data.data.length);
        if (json.status) {
          //json status true
          this.setState({
            count: json.count,
          });

          //counting number of items in json
          // this.setState({
          //   data: [...this.state.data, ...json.data.data],
          // });
          if (json.data?.data?.length > 0) {
            var obj = json.data.data;
            if (this.state.page == 1) {
              {
                this.setState({data: [], isLoading: false});
              }
            }
            this.setState({
              data: [...this.state.data, ...obj],
              isLoading: false,
            });
            console.warn('data', this.state.data);
          } else {
            if (this.state.page == 1) {
              this.setState({data: [], isLoading: false});
            }
          }
        } //json status false
        else {
          this.setState({
            data: [],
          });
        }
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        this.setState({
          isloading: false,
        });
      });
  };

  renderListItemsMenu = ({item}) => (
    <View
      style={{
        alignSelf: 'center',
        justifyContent: 'center',
        // alignItems: 'center',
        alignContent: 'center',
        marginVertical: 70,
        padding: 0,
        width: Dimensions.get('screen').width / 2.2,
        height: Dimensions.get('screen').height / 5.2,
        borderColor: 'black',
        // elevation: 55,
        marginHorizontal: 8,
        // backgroundColor: '#fff',
        // backgroundColor: '#fff',
        // borderRadius: 20,
        // shadowColor: 'black',
        // elevation: 5,
      }}>
      <View
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
          // alignContent: 'center',
          alignItems: 'center',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          marginTop: 30,
          backgroundColor: 'white',
          // shadowColor: 'black',
          // elevation: 10,
          // backgroundColor: 'green',
          width: Dimensions.get('screen').width / 2.2,
          height: Dimensions.get('screen').height / 5.4,
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
        {item.picture ? (
          <Image
            style={{
              // marginTop: 10,
              alignSelf: 'center',
              // borderRadius: 20,
              width: Dimensions.get('screen').width / 6,
              height: Dimensions.get('screen').height / 6.1,
              // marginBottom: 3,
            }}
            source={{uri: global.img_url + item.picture[0].src}}
          />
        ) : (
          <Image
            style={{
              // marginTop: 10,
              alignSelf: 'center',
              // borderRadius: 20,
              width: Dimensions.get('screen').width / 6,
              height: Dimensions.get('screen').height / 6.1,
              // marginBottom: 3,
            }}
            source={{uri: global.img_url + '167342960263be82622428c.jpeg'}}
          />
        )}
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          width: Dimensions.get('screen').width / 2.2,
          height: Dimensions.get('screen').height / 13,
        }}>
        <Text
          style={{
            fontFamily: 'Alkatra-Bold',
            fontSize: RFValue(10, 580),
            color: 'black',
            fontFamily: 'PTSans-Bold',
            justifyContent: 'flex-start',
          }}>
          {item.name}
        </Text>
        <Text
          style={{
            paddingHorizontal: 10,
            textAlign: 'center',

            fontFamily: 'PTSans-Bold',
            fontSize: RFValue(11, 580),
            color: 'green',
          }}>
          ₹{item.price}
          <Text
            style={{
              textDecorationLine: 'line-through',
              paddingHorizontal: 10,
              textAlign: 'center',
              fontFamily: 'PTSans-Bold',
              fontSize: RFValue(11, 580),
              color: 'red',
              marginLeft: 10,
            }}>
            / ₹{item.market_price}
          </Text>
        </Text>
      </View>
      <Pressable
        onPress={() => {
          Alert.alert('Item added to cart');
        }}>
        <View
          style={{
            borderWidth: 0.3,
            width: Dimensions.get('screen').width / 2.2,
            height: Dimensions.get('screen').height / 20,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            backgroundColor: 'green',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: RFValue(14, 580),
              color: 'white',
              fontFamily: 'PTSans-Bold',
            }}>
            Add To Bag
          </Text>
        </View>
      </Pressable>
    </View>
  );
  renderLeftComponent = () => (
    <Pressable
      onPress={() => {
        this.props.navigation.goBack();
      }}>
      <View
        style={{
          // backgroundColor: '#aaadab',
          width: Dimensions.get('screen').width / 9,
          height: Dimensions.get('screen').height / 19,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          alignSelf: 'flex-start',
        }}>
        <Icon name="chevron-back" type="ionicon" size={30} />
      </View>
    </Pressable>
  );
  renderRightComponent = () => (
    <View
      style={{
        // backgroundColor: '#aaadab',
        width: Dimensions.get('screen').width / 9,
        height: Dimensions.get('screen').height / 19,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      }}>
      <Icon name="shopping-bag" tyoe="ionicon" size={30} />
    </View>
  );
  renderCentralComponent = () => (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('screen').width / 2.2,
        height: Dimensions.get('screen').height / 19,
      }}>
      <Text
        style={{
          fontSize: RFValue(14, 580),
          color: 'black',
          fontFamily: 'PTSans-Bold',
        }}>
        {this.props.route.params.link}
      </Text>
    </View>
  );
  render() {
    return (
      <View style={{flex: 1}}>
        <Header
          leftComponent={this.renderLeftComponent}
          rightComponent={this.renderRightComponent}
          centerComponent={this.renderCentralComponent}
          containerStyle={{
            justifyContent: 'space-between',
            alignContent: 'space-between',
            backgroundColor: 'green',
            borderRadius: 20,
            paddingHorizontal: 0,
          }}
        />

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignSelf: 'center',
            marginBottom: 20,
            // paddingBottom: -30,
          }}>
          {this.state.isLoading ? (
            <ActivityIndicator size="large" color="red" />
          ) : (
            <FlatList
              showsVerticalScrollIndicator={false}
              key={'#'}
              keyExtractor={item => {
                '#' + item.id;
              }}
              data={this.state.data}
              numColumns={2}
              renderItem={this.renderListItemsMenu}
              onEndReached={() => {
                this.load_more();
              }}
              // onEndReachedThreshold={0.5}

              // onEndReachedThreshold={0.4}
              // onEndReached={() => {
              //   console.warn('reached the end');
              //   this.setState({
              //     page: this.state.page + 1,
              //   });
              //   this.fetchDetails(this.state.subcategory_link);
              // }}
            />
          )}
        </View>
      </View>
    );
  }
}
export default Products;
