import React, {useState} from 'react';
import { View,Text,TouchableOpacity,ImageBackground,TextInput,StyleSheet,Picker, PickerIOS } from 'react-native';
import { Searchbar } from 'react-native-paper';


const Search = () => {

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
  
    return (
      <Searchbar style = {styles.searchbar}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    );
  };

export default Search;

const styles = StyleSheet.create({
   searchbar: {  
    height: 50, 
    borderRadius: 15,
    marginBottom: 20

   },
      
});
