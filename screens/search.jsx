import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";

const Search = () => {
  return (
    <View style={styles.container}>
      <View style={{marginTop: 80}}>
        <View style={styles.input}>
        <MaterialIcons name="search" color={"white"} size={30} />
          <TextInput
            placeholder="Search"
            style={styles.input}
            placeholderTextColor={"white"}
          />
          
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 20}}>
        <Image source={require('../assets/img/ef07dff3-6f5c-4ce2-9615-3eab265b4601.jpg')} style={styles.img}/>
        <Image source={require('../assets/img/IMG_0024.jpg')} style={styles.img}/>
        <Image source={require('../assets/img/IMG_1128.jpg')} style={styles.img}/>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 20}}>
        <Image source={require('../assets/img/ef07dff3-6f5c-4ce2-9615-3eab265b4601.jpg')} style={styles.img}/>
        <Image source={require('../assets/img/IMG_0024.jpg')} style={styles.img}/>
        <Image source={require('../assets/img/IMG_1128.jpg')} style={styles.img}/>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 20}}>
        <Image source={require('../assets/img/ef07dff3-6f5c-4ce2-9615-3eab265b4601.jpg')} style={styles.img}/>
        <Image source={require('../assets/img/IMG_0024.jpg')} style={styles.img}/>
        <Image source={require('../assets/img/IMG_1128.jpg')} style={styles.img}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#4A4A4A",
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    color: "white",
  },

  container: {
    flex: 1,
    backgroundColor: "black",
  },

  img:{
    width: 120,
    height: 120,
    borderRadius: 10
  }
});

export default Search;
