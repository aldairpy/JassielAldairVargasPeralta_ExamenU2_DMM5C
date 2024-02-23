
import {View, StyleSheet} from "react-native";
import { Card, Image, Text} from '@rneui/themed';
import { useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";


const Profile = () =>{
    const route = useRoute();

    const {item} = route.params ? route.params: "No hay usuarios";

    
    return(
        <ScrollView>
            <View style={styles.container}>
            <View style={styles.suptop}>
                </View>
                <View style={styles.suptop}>
                <Image style={styles.photoimage} source={require('../assets/img/8A07C694-C290-41C8-95BE-F6FC43764A4F.jpg')}/>
                <Text style={{color: 'white'}}>11 Post</Text>
                <Text style={{color: 'white'}}>329 FOLLOWES</Text>
                <Text style={{color: 'white'}}>443 following</Text>
                </View>
                <View style={styles.supleft}>
                <Text style={{color: 'white'}}>aldair.py</Text>
                </View>
                <View style={styles.supleft}><Text style={{color: 'white'}}>SOFTWARE DEV👾</Text></View>

            
            <View style={styles.suptop}>
            <Image style={styles.photoimage} source={require('../assets/img/ef07dff3-6f5c-4ce2-9615-3eab265b4601.jpg')}/>
            
            <Image style={styles.photoimage} source={require('../assets/img/IMG_1128.jpg')}/>
            <Image style={styles.photoimage} source={require('../assets/img/IMG_1389.jpg')}/>
            <Image style={styles.photoimage} source={require('../assets/img/IMG_0395.jpg')}/>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Text style={{color: 'white'}}>Amigos</Text>
            <Text style={{color: 'white'}}>Animales</Text>
            <Text style={{color: 'white'}}>TØP</Text>
            <Text style={{color: 'white'}}>YE</Text>
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
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'black',
    },
    circulo: {
        height: 200,
        width: 200,
        borderRadius: 100,
        margin: 20
    },
    texto: {
        fontSize: 15,
        margin: 20,
        color: 'white',
    }, letraicon: {
        height: 50,
        width: 120,
        margin: 5,
        resizeMode: 'contain'
    },
    suptop:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', 
        backgroundColor: 'black',
        padding: 10,
        marginTop: 40
    },
    lefticon: {
        height: 25,
        width: 45,
        resizeMode: 'contain'
    },
    supleft:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', 
        backgroundColor: 'black',
        padding: 10,
    },
    middlecotainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', 
        backgroundColor: 'black',
        padding: 10,
    },
    photoimage: {
        height: 80,
        width: 80,
        borderRadius: 100,
        resizeMode: 'contain'
    },
    scrll:{
        width: `100%`,
        backgroundColor: `E3E3E3`,
        height: `100%`
    },
    img:{
        width: 120,
        height: 120,
        borderRadius: 10
      }
})


export default Profile;