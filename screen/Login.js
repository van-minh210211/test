import React, { Component } from 'react'
import { Text, StyleSheet, View,Image, TextInput, TouchableOpacity } from 'react-native'
export default class Login extends Component {
    render() {
        return (
            <View >
            <View>
            <Image style={styles.styleImage} source={require('../Image/log0.webp')}/>
            <View >
                <Text style={styles.styletext}> Login </Text>
                <TextInput  placeholder="Nhập Email ..." style={styles.styleinput}/>
                <TextInput  placeholder="Nhập pass..." style={styles.styleinput}/>
            </View>
            <View  style={styles.button1}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Main')} >
                <Text style={styles.styletext}>Đăng nhập </Text>
                </TouchableOpacity>
            </View>
            <View  style={styles.button1}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('sinup')} >
                <Text style={styles.styletext}>đăng ký </Text>
                </TouchableOpacity>
            </View>
            </View>
           </View>
        )
    }
}

const styles = StyleSheet.create({
    styleImage: {
        alignSelf: 'center',
        height: '40%',
        width: '80%',
        paddingTop:20,
    },
    styletext:{
       textAlign: 'center',
       color: 'blue',
       fontSize:30,
    },
    styleinput:{
        borderRadius: 10,
        borderWidth:1,
        padding:10,
        margin:10,
    },
   button1:{ 
       borderRadius:10,
       borderWidth:1,
       width:'50%',
       alignSelf:'center',
       backgroundColor:'red',
       color:'white',
   }
})
