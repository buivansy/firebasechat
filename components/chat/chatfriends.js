import React, { Component } from 'react'
import { Text, View ,StyleSheet,TextInput,Dimensions,TouchableOpacity} from 'react-native'

class Chatfriends extends Component {
    constructor(props){
        super(props);
        this.state={
            room:""
        }
    }
    render() {
        return (
            <View style={{flex:1,backgroundColor:"#66CC99"}}>
                <View style={{alignItems:"center",margin:20}}>
                    <Text>Welcome chat friends </Text>
                </View>
            <View style={styles.container}>
                
                    <TextInput style={styles.inputs}
                        placeholder="Enter room name"
                        placeholderTextColor="#F5F5F5"
                        keyboardType="email-address"
                        onChangeText={(room) => this.setState({room})}/>
                <TouchableOpacity style={styles.chatgroups} onPress={()=>this.joinrooms()}>
                    <Text>Create room </Text>
                </TouchableOpacity>
            </View>
                            
            </View>
        )
    }
    joinrooms(){
        const {room}=this.state;
        if(room!=""){
            this.props.navigation.navigate("Roomchatfriend",{'room':room});
        }else{
            alert("Hãy nHập tên!")
        }
        
    }
}

export default Chatfriends;
const {width,height}=Dimensions.get('window');
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#66CC99"
    },
    inputs:{
        backgroundColor: '#363636',
        width:width-100,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center',
        borderRadius: 5,
        color: '#F5F5F5',
        height:50,
        padding:10
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
