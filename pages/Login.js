import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
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
        <View style={styles.container}>
            <View style={styles.bodies}>
                <View style={styles.v_input}>
                    <View style={{alignItems: 'center', justifyContent: 'center', gap:'1rem'}}>
                        <Icon source="pac-man" color='#85929e' size={100} />
                        <Text style={{fontSize:'20px', textAlign:'center', fontWeight:'700'}}>AppStract - Internship Absence</Text>
                    </View>
                    <TextInput style={styles.t_input} label="Email" placeholder="rambelawe@gmai.com" mode='outlined' left={<TextInput.Icon icon="email" disabled/>} value={email} onChangeText={setEmail} />
                    <TextInput style={styles.t_input} label="Password" left={<TextInput.Icon icon="lock" disabled/>} right={<TextInput.Icon icon="eye" onPress={() => setIsSecure(!isSecure)} />} value={password} onChangeText={setPassword} secureTextEntry={isSecure} mode='outlined' placeholder="**********************************************" />
                    <Button style={{width:'100%'}} buttonColor='#d4ac0d' onPress={handleLogin} mode="contained-tonal">Login</Button>
                </View>   
            </View>
            <View style={styles.footers}>
                {/* <Text style={{fontSize:'50px', fontWeight:'700'}}>AppStract - Internship Absence</Text> */}
                <Text style={{fontSize:'12px', color:'#2e4053'}}>Created by Rio Teguh</Text>
                <Text style={{fontSize:'12px', color:'#99a3a4'}}>&copy; Copyright 2024</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
        bottom:'0px',
        gap:'0.5rem',
        paddingVertical:'1rem',
        alignItems: 'center',
        justifyContent: 'center',
    },
    v_input: {
        paddingHorizontal:'3rem',
        width: '100%' ,
        gap:'2rem',
        alignItems: 'center',
        paddingVertical:'1rem'
    },
    t_label: {
        fontSize: '20px',
        fontWeight:'600',
        fontVariant:'#2471a3',
    },
    t_input: {
        // fontSize: '20px',
        width: '100%',
    },
    activeBorder: {
        borderColor: 'black', // Warna saat aktif
    },
    inactiveBorder: {
        borderColor: 'gray', // Warna saat tidak aktif
    },
});