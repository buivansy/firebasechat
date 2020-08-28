import React, { Component } from 'react'
import { Text, View ,StyleSheet,TextInput,Dimensions,TouchableOpacity} from 'react-native'

export class Chatgroup extends Component {
    constructor(props){
        super(props);
        this.state={
            name:""
        }
    }
    render() {
        return (
            <View style={{flex:1,backgroundColor:"#66CC99"}}>
                <View style={{alignItems:"center",margin:20}}>
                    <Text>Welcome chat groups </Text>
                </View>
            <View style={styles.container}>
                
                    <TextInput style={styles.inputs}
                        placeholder="Enter your name"
                        placeholderTextColor="#F5F5F5"
                        keyboardType="email-address"
                        onChangeText={(name) => this.setState({name})}/>
                <TouchableOpacity style={styles.chatgroups} onPress={()=>this.joingroups()}>
                    <Text>Join </Text>
                </TouchableOpacity>
            </View>
                            
            </View>
        )
    }
    joingroups(){
        const {name}=this.state;
        if(name!=""){
            this.props.navigation.navigate("Roomchat",{'name':name});
        }else{
            alert("Hãy nHập tên!")
        }
        
    }
}

export default Chatgroup;
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
