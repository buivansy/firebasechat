import React, { Component } from 'react'
import { Text, View,StyleSheet,TextInput,Dimensions ,TouchableOpacity} from 'react-native'
import firebaseApp from '../../firebase/FirebaseConfig';
import { FlatList } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
class Roomchatfriend extends Component {
    constructor(props){
        super(props);
        this.state={
            text:"",
            room:props.route.params.room,
            data:[],
            name:""
        }
    }
    componentDidMount(){
        firebaseApp.database().ref('/chatfriend').on("value", snapshot => {
            if(snapshot!=null){
                this.setState({
                    data: Object.values(snapshot.val())
                });
            }
        });
        this.getname();
    }
    getname=async()=>{
        try {
            const name=await AsyncStorage.getItem('name');
            if(name!=null){
              this.setState({
                name:name
              })
            }
        } catch (e) {
            console.log("loi o !");
        }
    }
    render() {
        const {data}=this.state;
        return (
            <View style={styles.container}>
                <View style={styles.messae}>
                        <TextInput style={styles.inputs}
                            placeholder="Enter your name"
                            placeholderTextColor="#F5F5F5"
                            keyboardType="email-address"
                            onChangeText={(text) => this.setState({text})}/>
                    <TouchableOpacity style={styles.chatgroups} onPress={()=>this.send()}>
                        <Text>Gửi </Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={data}
                    renderItem={({ item }) =>
                        <View style={styles.view}>
                            <View style={styles.viewtext}>
                                <Text style={styles.textname}>{item.name}</Text>
                                <View style={{flex:1,flexDirection:"row-reverse"}}>
                                    <Text style={styles.textnd}>{item.text}</Text>
                                </View>
                            </View>
                        </View>
                    }
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }
    send(){
        const {name,text,room}=this.state;
        firebaseApp.database().ref(room).push({
            name : name,
            text : text,
        });
        this.setState({
            text : ''
        });
    }
}

export default Roomchatfriend;
const {width,height}=Dimensions.get('window');

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#66CC99",
    },
    messae:{
        height:60,
        // backgroundColor:"white",
        justifyContent:"center",
        flexDirection:"row"
    },
    inputs:{
        backgroundColor: '#363636',
        width:width-100,
        flexDirection: 'row',
        alignItems:'center',
        borderRadius: 5,
        color: 'white',
        padding:10,
        margin:10,
    },
    chatgroups:{
        width:40,
        backgroundColor:"#66FF99",
        justifyContent:"center",
        alignItems:"center",
        borderWidth:2,
        margin:10
    },
    textname:{
        color:"blue"
    },
    textnd:{
        color:"black"
    },
    view:{
    },
    viewtext:{
        backgroundColor:"white",
        margin:10,
        borderRadius:60,
        padding:20
    }
})
