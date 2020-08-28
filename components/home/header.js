import React, { Component } from 'react';
import {Text, Image, View ,StyleSheet,Alert} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import logo from '../../imgs/logo-standard.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-community/async-storage';
export class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            modal:false,
            name:""
        }
    }
    componentDidMount() {
        this.getname();
    }
    getname=async()=>{
        try {
            const value = await AsyncStorage.getItem('name')
            if(value !== null) {
              this.setState({
                name:value
              })
            }
          } catch(e) {
            // error reading value
            console.log(e);
          }
    }
    render() {
        const {modal,name}=this.state;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>this.onModal()}>
                    <View style={styles.viewicon1}>
                        <FontAwesome5 name="user" style={styles.icon_user}/>
                    </View>
                </TouchableOpacity>

                <View style={styles.viewlogo}>
                    <Image
                        style={styles.tinyLogo}
                        source={logo}
                    />
                </View>
                <View style={styles.viewicon2}>
                    <FontAwesome5 name="plus" style={styles.icon_user}/>
                </View>
                <Modal isVisible={modal}>
                    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                        <View style={styles.view}>
                            <Text>{name}</Text>
                            <TouchableOpacity 
                                style={{width:100,height:30,backgroundColor:"#CCFFCC",
                                justifyContent:"center",alignItems:"center",marginTop:30}}
                                onPress={()=>this.Logout()}
                            >
                                <Text>Logout</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </Modal>
            </View>
        )
    }
    onModal(){
        this.setState({
            modal:!this.state.modal
        })
    }
    Logout(){
        Alert.alert(
            "Thông báo",
            "Đăng xuất",
            [
              {
                text: "Ask me later",
                onPress: () => console.log("Ask me later pressed")
              },
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => this.yesLogout() }
            ],
            { cancelable: false }
          );
    }
    yesLogout=async()=>{
        try {
            await AsyncStorage.removeItem('name');
            this.props.navigation.navigate('Login');
            this.setState({
                modal:false,
            })
          } catch(e) {
            // remove error
            console.log(e);
          }
    }
}

export default Header;
const styles=StyleSheet.create({
    container:{
        height:40,
        backgroundColor:"#CCCC33",
        flexDirection:"row"
    },
    viewicon1:{
        height:"100%",
        justifyContent:"center",
        marginLeft:5
    },
    icon_user:{
        fontSize:20,
        color:"white"
    },
    viewlogo:{
        // width:"100%",
        flex:1,
        justifyContent:"center",
    },
    tinyLogo: {
        width:"100%",
        height:"100%",
        resizeMode:"contain",
    },
    viewicon2:{
        height:"100%",
        justifyContent:"center",
        marginRight:10
    },
    view:{
        width:200,
        height:150,
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center"
    }
})
