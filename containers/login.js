import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import Header from '../components/login/header';
import LoginScreen from '../components/login/loginscreen';
export class Login extends Component {
    render() {
        return (
            <View style={{flex:1,backgroundColor:'#777777'}}>
                <StatusBar hidden={true}/>
                <Header {...this.props}/>
                <LoginScreen {...this.props}/>
            </View>
        )
    }
}

export default Login;
