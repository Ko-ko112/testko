import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Button,
  Switch,
  Alert,
} from 'react-native';

const api = require('../webservice');

const bodyParameters = {
  shop_id: '6038fefc26f14f2ff2b591b6',
};

export default class DetailOrderScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orderDetail: [],
      productName: [],
    };
  }

  getOrderById(order_id) {
    api
      .getOrderById({
        order_id: '6044f3c113c05f0011830825',
      })
      .then(response => {
        // console.log(response.data.detail[0].order_detail);
        // this.setState({orderDetail: response.data.detail.order_detail});
        let temp = response.data.detail[0].order_detail;
        this.setState({orderDetail: temp});
        temp.map((item, index) => {
          this.getProductById(item.from_product);
        });
      })
      .catch(error => {});
  }

  getProductById(product_id) {
    // console.log(product_id);
    api
      .getProductById({product_id: product_id})
      .then(response => {
        // return response.data.detail[0].name;
        let st = this.state.productName;
        st.push(response.data.detail[0]);
        this.setState({productName: st});
      })
      .catch(error => {
        return null;
      });
  }

  orderRender() {
    setTimeout(() => {
      this.state.orderDetail.length > 0 ? (
        this.state.orderDetail.map((item, index) => {
          /*  console.log(this.state.productName[index]); */
        })
      ) : (
        <Text>No Data!!!!</Text>
      );
    }, 1000);
  }

  componentDidMount() {
    this.getOrderById('60391645b8da8a3481574a64');
  }

  render() {
    const {productName, orderDetail} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.cardImgWrapper}>
          <Image
            source={require('../assets/banners/food-banner2.jpg')}
            resizeMode="cover"
            style={styles.cardImg}
          />
        </View>
        <Text style={styles.textTap}>รายการอาหาร</Text>
        {/* <Text>จำนวน {this.state.orderDetail.length} รายการ</Text> */}
        <View>
          {productName.map((item, index) => {
            return (
              <View>
                {orderDetail.map((items, i) => {
                  return (
                    <Text>
                      {item.name.th}
                      {items.detail[0].data[0].label}+{' '}
                      {items.detail[0].data[1].label}
                      {'   '}฿ {item.product_detail.price}
                      {'\n'}
                      ปริมาณ : {items.detail[1].data[0].label}
                      {'\n'}
                      รสชาติ : {items.detail[2].data[0].label}
                      {'\n'}
                      คอมเมนต์ : {items.detail[2].comment_to_shop}
                      {'\n'}
                      {
                        '-------------------------------------------------------------------------------------'
                      }
                    </Text>
                  );
                })}
              </View>
            );
          })}
        </View>
        <View>
          <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
            <Text style={styles.panelButtonTitle}>เสร็จแล้ว</Text>
          </TouchableOpacity>
          {this.orderRender()}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  cardImgWrapper: {
    flex: 1,
    marginBottom: 10,
  },
  cardImg: {
    height: '110%',
    width: '110%',
    alignSelf: 'center',
  },
  textTap: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  commandButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#1f65ff',
    alignItems: 'center',
    margin: 10,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
});
