import React, { Component } from 'react';
import { View,StatusBar,Text,StyleSheet } from 'react-native';
import Header from '../components/home/header';
import Listchat from '../components/home/listchat';
export class Home extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <StatusBar hidden={true}/>
                <Header {...this.props} ref="Modal"/>
                <Listchat {...this.props}/>
            </View>
        )
    }
}

export default Home;
