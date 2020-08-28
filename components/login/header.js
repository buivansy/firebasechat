import React, { Component } from 'react';
import { Image, View,StyleSheet } from 'react-native';
import logo from '../../imgs/logo-standard.png';
export class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.tinyLogo}
                    source={logo}
                />
            </View>
        )
    }
}

export default Header;
const styles=StyleSheet.create({
    container:{
        height:30,
        backgroundColor:'#777777',
        justifyContent:"center",
        alignItems:"center",
        margin:20
    },
    tinyLogo: {
        width: 120,
        height: 80,
        resizeMode:"contain",
    }
})
