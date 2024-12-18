import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Icon, TextInput, Text, Button } from 'react-native-paper'

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSecure, setIsSecure] = useState(true);

    const handleLogin = () => {
        // Implementasi logika login
        console.log({ email, password });
        // navigation.navigate('Absen'); // Navigasi ke halaman Absen setelah login
    };

    return (
        <ImageBackground
        source={require('../assets/bgimage.jpg')} // Path ke gambar
        style={styles.container}
        resizeMode="cover" // Atur ukuran gambar
        >
            <View style={styles.bodies}>
                <View style={styles.v_input}>
                    <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom:30}}>
                        <Icon source="pac-man" color='#707b7c' size={100} />
                        <Text style={{fontSize:20, textAlign:'center', fontWeight:'700'}}>AppStract - Internship Absence</Text>
                    </View>
                    <TextInput style={styles.t_input} label="Email" placeholder="rambelawe@gmai.com" mode='outlined' left={<TextInput.Icon icon="email" disabled/>} value={email} onChangeText={setEmail} />
                    <TextInput style={styles.t_input} label="Password" left={<TextInput.Icon icon="lock" disabled/>} right={<TextInput.Icon icon="eye" onPress={() => setIsSecure(!isSecure)} />} value={password} onChangeText={setPassword} secureTextEntry={isSecure} mode='outlined' placeholder="**********************************************" />
                    <View style={{flexDirection: 'column', alignItems: 'center', marginTop:30, justifyContent: 'center', gap: 5}}>
                        <Button style={{width:400, marginVertical:10, paddingHorizontal:10}} buttonColor='#1f618d' onPress={handleLogin} mode="contained-tonal">
                            <Text style={{fontSize:15, color:'#FFF'}}>Login</Text>
                        </Button>
                        <Button style={{width:400, marginVertical:10, paddingHorizontal:10}} buttonColor='#d4ac0d' onPress={handleLogin} mode="contained-tonal">
                            <Text style={{fontSize:15, color:'#FFF'}}>Register</Text>
                        </Button>
                    </View>
                </View>   
            </View>
            <View style={styles.footers}>
                {/* <Text style={{fontSize:'50px', fontWeight:'700'}}>AppStract - Internship Absence</Text> */}
                <Text style={{fontSize:12, color:'#2e4053'}}>Created by Rio Teguh</Text>
                <Text style={{fontSize:12, color:'#99a3a4'}}>Mbadox45 &copy; Copyright 2024</Text>
            </View>
            {/* <View style={styles.container}>
            </View> */}
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1, // Background mengisi seluruh layar
        justifyContent: 'center', // Konten berada di tengah
        alignItems: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%' ,
        backgroundColor: '#fff',
    },
    bodies: {

    },
    footers: {
        position:'absolute',
        bottom: 0,
        gap:3,
        paddingVertical:25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    v_input: {
        paddingHorizontal:'3rem',
        width: '100%' ,
        gap: 2,
        alignItems: 'center',
        paddingVertical:10,
        flexDirection: 'column',
    },
    t_label: {
        fontSize: 20,
        fontWeight:'600',
        fontVariant:'#2471a3',
    },
    t_input: {
        // fontSize: '20px',
        marginVertical:10,
        width: 400,
    },
    activeBorder: {
        borderColor: 'black', // Warna saat aktif
    },
    inactiveBorder: {
        borderColor: 'gray', // Warna saat tidak aktif
    },
});