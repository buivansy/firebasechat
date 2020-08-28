import React, { Component } from 'react';
import { StyleSheet, View, Animated, Image, Easing,StatusBar } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
class Bootscreen extends Component {
        constructor() {
        super();
        this.RotateValueHolder = new Animated.Value(0);
      }
      componentDidMount() {
        this.StartImageRotateFunction();
        this.checkToken();
      }
      StartImageRotateFunction() {
        this.RotateValueHolder.setValue(0);
        Animated.timing(this.RotateValueHolder, {
            toValue: 1,
            duration: 3000,
            easing: Easing.linear,
            useNativeDriver: true
        }).start(() => {
            this.StartImageRotateFunction();
        });
      }
      checkToken=async()=>{
          try {
              const name=await AsyncStorage.getItem('name');
              if(name!=null){
                this.props.navigation.navigate("Home");
              }else {
                this.props.navigation.navigate('Login');
              }
          } catch (e) {
              console.log("loi o check login BootScreen!");
          }
      }
    render() {
      const RotateData = this.RotateValueHolder.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
      });
      return (
        <View style={styles.container}>
            <StatusBar hidden={true}/>
            <Animated.Image
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain',
                transform: [{ rotate: RotateData }],
              }}
              source={require('../imgs/react_logo.png')}
            />
        </View>
      );
    }
}
export default Bootscreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#20232a',
  },
});
