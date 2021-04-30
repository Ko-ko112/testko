import React, {useState} from 'react';
import { View,Text,TouchableOpacity,ImageBackground,TextInput,StyleSheet,Picker, PickerIOS } from 'react-native';


const PickerState = () => {
const [selectedValueType, setSelectedValueType] = useState('');

const [text, setText] = React.useState('');

  return (
   
          <View>
           <Picker style = {styles.picker1}
           selectedValueType={selectedValueType}
           onValueChange={(itemValueType, itemIndex) => setSelectedValueType(itemValueType)}
           >

          <Picker.Item label="วางขาย" value="Ready" />
          <Picker.Item label="ไม่วางขาย" value="NotReady" />
          </Picker> 

          </View>
       

  );
};

export default PickerState;

const styles = StyleSheet.create({
   picker1: {  
    height: 20, 
    backgroundColor: '#74B62E',  
    borderRadius: 15,
   },
      
});
