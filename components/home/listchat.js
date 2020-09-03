import React, { Component } from 'react';
import { Text, View,StyleSheet } from 'react-native';
import firebaseApp from '../../firebase/FirebaseConfig';
import { TouchableOpacity } from 'react-native-gesture-handler';
export class Listchat extends Component {
    componentDidMount() {
        this.data();
    }
    data=()=>{
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.chatgroups} onPress={()=>this.chatgroups()}>
                    <Text>Welcome chat groups </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.chatgroups} onPress={()=>this.chatfriend()}>
                    <Text>Welcome chat friends </Text>
                </TouchableOpacity>
            </View>
        )
    }
    chatgroups(){
        this.props.navigation.navigate("Chatgroup");
    }
    chatfriend(){
        this.props.navigation.navigate("Chatfriends");
    }
}

export default Listchat;
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#CCFF66",
        justifyContent:"center",
        alignItems:"center"
    },
    chatgroups:{
        width:200,
        height:50,
        backgroundColor:"#66FF99",
        justifyContent:"center",
        alignItems:"center",
        borderWidth:2,
        margin:10
    }
})
