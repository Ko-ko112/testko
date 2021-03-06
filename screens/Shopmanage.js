import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
//add
import {Avatar, Title, Caption, TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Swiper from 'react-native-swiper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import StarRating from '../components/StarRating';

const Shopmanage = ({navigation}) => {
  const theme = useTheme();

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image source={require('../assets/ebesim.jpg')} size={80} />
          <View style={{marginLeft: 20}}>
            <Title
              style={[
                styles.title,
                {
                  fontSize: 18,
                  marginTop: 15,
                },
              ]}>
              สะสม 0/135 แต้ม
            </Title>
          </View>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
        <View
          style={[
            styles.infoBox,
            {
              borderRightColor: '#dddddd',
              borderRightWidth: 1,
            },
          ]}>
          <Title>500฿</Title>
          <Caption>ยอดขายวันนี้</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title>5000 ฿</Title>
          <Caption>ยอดที่ยังขายได้</Caption>
        </View>
      </View>

      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            navigation.navigate('AddProductScreen', {title: 'เพิ่มสินค้า'})
          }>
          <View style={styles.categoryIcon}>
            <Ionicons name="ios-restaurant" size={35} color="#FF6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>เพิ่มสินค้า</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            navigation.navigate('EditProductScreen', {title: 'แก้ไขสินค้า'})
          }>
          <View style={styles.categoryIcon}>
          <MaterialCommunityIcons
              name="circle-edit-outline"
              size={35}
              color="#FF6347"
            />
          </View>
          <Text style={styles.categoryBtnTxt}>แก้ไขสินค้า</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.categoryBtn}
         >
          <View style={styles.categoryIcon}>
            <MaterialCommunityIcons
              name="chart-bar"
              size={35}
              color="#FF6347"
            />
          </View>
          <Text style={styles.categoryBtnTxt}>สถิติ</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.categoryContainer, {marginTop: 10}]}>
        <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
          <View style={styles.categoryIcon}>
            <Fontisto name="prescription" size={35} color="#FF6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>คลังสินค้า</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
          <View style={styles.categoryIcon}>
            <Ionicons name="md-restaurant" size={35} color="#FF6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>รายการ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
          <View style={styles.categoryIcon}>
            <Ionicons name="ios-restaurant" size={35} color="#FF6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>วิเคราะห์</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsWrapper}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333',
          }}>
          เพิ่มยอดขาย
        </Text>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/banners/food-banner2.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>eBeSim Ads</Text>
            <StarRating ratings={4} reviews={99} />
            <Text style={styles.cardDetails}>ซื้อโฆษณา</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/banners/food-banner3.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>eBeSim LOGO</Text>
            <StarRating ratings={4} reviews={99} />
            <Text style={styles.cardDetails}>
              ให้ eBeSim App ทำโลโก้ร้าน เก๋ๆ ให้เหมาะกับคุณ
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/banners/food-banner4.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>eBeSim Marketing</Text>
            <StarRating ratings={4} reviews={99} />
            <Text style={styles.cardDetails}>
              ทำการตลาดเพื่อปรับกลยุทธ์การขายให้กับคุณ
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Shopmanage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#fdeae7' /* '#FF6347' */,
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#de4f35',
  },
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 5,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
