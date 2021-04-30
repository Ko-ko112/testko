import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, ScrollView, Picker, Button } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import PickerState from './PickerState';
import Search from './Search'



export default class EditProductScreen extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['ลำดับ', 'ชื่อสินค้า', 'หมวด', 'ราคา', 'สถานะ'],
      tableData: [
        ['1', 'ข้าวขาหมู', 'อาหารตามสั่ง', '40' , '5'],
        ['2', 'ข้าวขาหมู', 'อาหารตามสั่ง', '40' , '5'],
        ['3', 'ข้าวขาหมู', 'อาหารตามสั่ง', '40' , '5'],
        ['4', 'ข้าวขาหมู', 'อาหารตามสั่ง', '40' , '5'],
        ['5', 'ข้าวขาหมู', 'อาหารตามสั่ง', '40' , '5'],
        ['6', 'ข้าวขาหมู', 'อาหารตามสั่ง', '40' , '5'],
        ['7', 'ข้าวขาหมู', 'อาหารตามสั่ง', '40' , '5'],
        ['8', 'ข้าวขาหมู', 'อาหารตามสั่ง', '40' , '5'],
        ['9', 'ข้าวขาหมู', 'อาหารตามสั่ง', '40' , '5'],
        ['10', 'ข้าวขาหมู', 'อาหารตามสั่ง', '40' , '5'],
        ['11', 'ข้าวขาหมู', 'อาหารตามสั่ง', '40' , '5'],
        ['12', 'ข้าวขาหมู', 'อาหารตามสั่ง', '40' , '5']
      ]
    }
  }
  
 
  _alertIndex(index) {
    Alert.alert(`This is row ${index + 1}`);
  }
 
  render() {
    const state = this.state;
    const element = (data, index) => (

      <PickerState />

      // <TouchableOpacity onPress={() => this._alertIndex(index)}>
      //   <View style={styles.btn}>
      //     <Text style={styles.btnText}>ทดสอบปุ่ม</Text>
      //   </View>
      // </TouchableOpacity>
    );
 
    return (
      <View style={styles.outerContainer}>
        {/* <PickerState /> */}
        <Text style={styles.head2}>รายการสินค้า</Text>

        <Search/>

      <ScrollView> 
      <View style={styles.container}>
        <Table borderStyle={{borderColor: 'transparent'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          {
            state.tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={cellIndex === 4 ? element(cellData, index) : cellData} textStyle={styles.text}/>
                  ))
                }
              </TableWrapper>
            ))
          }
        </Table>
      </View>
      </ScrollView> 
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: '5%', 
    paddingTop: '5%', 
    backgroundColor: '#fff' 
  },
  head: { 
    height: '5%', 
    backgroundColor: 'rgba(255, 99, 71, 0.5)' 
  },
  text: { 
    margin: 7,
  },
  row: { 
    flexDirection: 'row', 
    backgroundColor: '#FFFFFF' },
  // btn: { 
  //   width: 70, 
  //   height: 25, 
  //   backgroundColor: '#74B62E',  
  //   borderRadius: 15 
  // },
  // btnText: { 
  //   textAlign: 'center', 
  //   color: '#fff' ,
  // },
  outerContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(255, 99, 71, 0.5)',
  },
  innerContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  head2: { 
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 10
  },
});
