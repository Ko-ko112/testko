import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';

export default class ConfirmScreen extends Component {
  constructor(props) {
    super(props);
    const x = 100;
    this.state = {
      tableHead: ['Qty  ', 'รายละเอียด', 'ราคา'],
      tableData: [['1', 'บริการโฆษณา20 แต้ม', '100.00']],
      table: ['มูลค่าสินค้า', x*.9345+' บาท'],
      tableData2: [
        ['ภาษีมูลค่าเพิ่ม 7%', x*.0654+' บาท'],
        ['มูลค่าสุทธิ', x+' บาท'],
        ['เงินโอน', x+' บาท'],
      ],
    };
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
      <Image
          style={styles.itemImage}
          source={require('../assets/banners/eBeSim-banner1.png')}
        />
        <Text style={styles.headtext}>
          บริษัท อีบีซิม จำกัด(EBESIM CO.,LTD.)
        </Text>
        <Text style={styles.text}>
          เลขที่ 207/121 หมูที่ 3 ตำบลท่าศาลา จังหวัดนครศรีธรรมราช 80160
        </Text>
        <Text style={styles.headtext}>โอนเงินเข้าบัญชี</Text>
        <Text>ชื่อบัญชีธนกฤต สวนดี</Text>
        <Text>กรุงไทย เลขที่ 983-8-10507-4</Text>
        <Text style={styles.note}>
          *หมายเหตุท่าต้องโอนภายใน 15
          นาทีเพื่อบริษัทจะได้ตรวจสอบแล้วโอนแต้มให้ท่านหากไม่ทำรายการภายใน 15
          นาทีต้องทำรายการใหม่
        </Text>
        <Text style={(styles.text, {fontWeight: 'bold'})}>รายการสินค้า</Text>
        <Table>
          <Row
            data={state.tableHead}
            style={styles.head}
            textStyle={
              (styles.headtext, {textAlign: 'center', fontWeight: 'bold'})
            }
          />
          <Rows
            data={state.tableData}
            textStyle={(styles.text, {textAlign: 'center'})}
          />
        </Table>
        <Table>
          <Row
            data={state.table}
            style={styles.head}
            textStyle={
              (styles.headtext, {textAlign: 'right', fontWeight: 'bold'})
            }
          />
          <Rows
            data={state.tableData2}
            textStyle={(styles.text, {textAlign: 'right', fontWeight: 'bold'})}
          />
        </Table>
        {/*
      <Text>Qty รายละเอียด ราคา</Text>
      <Text>1 บริการโฆษณา 20 แต้ม 100.00</Text>
      <Text>มูลค่าสินค้า 93.45 บาท</Text>
      <Text>ภาษีมูลค่าเพิ่ม 7% 6.54 บาท</Text>
      <Text>มูลค่าสุทธิ 100.00 บาท</Text>
      <Text>เงินโอน 100.00 บาท</Text>
      <View style={styles.outQRContainer}>
        <View style={styles.inQRContainer}>
          <Button title="ชำระเงิน" onPress={() => alert('Button Clicked!')} />
        </View>
      </View> */}
        <View style={styles.outQRContainer}>
          <View style={styles.inQRContainer}>
            <Button title="ชำระเงิน" onPress={() => alert('Button Clicked!')} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  head: {height: 20, backgroundColor: '#f1f8ff'},
  headtext: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 14,
  },
  title: {
    fontSize: 10,
  },
  note: {
    fontSize: 12,
    color: 'red',
    padding: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
  outQRContainer: {
    height: '5%',
    width: '100%',
    marginTop: 20,
    alignSelf: 'center',
    borderTopWidth: 2,
    borderBottomColor: '#bdbdbd',
  },
  inQRContainer: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: 'white',
  },
  itemImage: {
    width: '100%',
    height: '20%',
  },
});
