import { useNavigation } from "@react-navigation/native";
import { Card } from "@rneui/themed";
import { useState } from "react";
import { Alert, View, StyleSheet, TextInput, Button } from "react-native";

const Login = () =>{
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');

    const ig = require('../assets/img/ig.png');
    const navigation = useNavigation();

    const validUser = [
        {
            username: 'aldair.py',
            password: '12345'
        },
        {
            username: 'maisol.denisse_version',
            password: '12345'
        }
    ]

    const login = () => {
        const user = validUser.find((u) => u.username === username && u.password === password);
    
        if (user) {
          Alert.alert("Inicio de sesión exitoso", "Bienvenido");
          navigation.replace("Posts");
        } else {
          Alert.alert("Error", "Usuario o contraseña incorrectos");
        }
      };

    return(
        <View style={styles.container}>
            <Card containerStyle={{ width:300, height:300, backgroundColor: 'black'}}>
                <Card.Image source={ig} style={{height: 50, width: 50, justifyContent:'center', alignSelf:'center', margin:10}}/>
                <Card.Divider />
                <TextInput 
                    placeholder="Usuario"
                    style={styles.input}
                    onChangeText={setUsername}
                    placeholderTextColor={'white'}
                />
                <TextInput 
                    placeholder="Contraseña"
                    secureTextEntry={true}
                    style={styles.input}
                    onChangeText={setPassword}
                    placeholderTextColor={'white'}
                />
                <Button title="Iniciar sesión"  onPress={login} />
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input:{
        backgroundColor: '#4A4A4A',
        borderRadius: 10,
        padding: 10,
        margin: 10,
    }
})


export default Login;