import React from 'react'
import { Image, StyleSheet, View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

function SecondScreen({navigation}) {
  return (
   <View style={styles.container}>

     <View style={styles.imageContainer}>
       <Image source={require('./../../assets/img3.jpg')} style={styles.image} />
     </View>


     <View style={styles.content}>

      <View style={styles.topContent}>
        <Text style={styles.header}>keep in touch with the people of ampersand</Text>
        <Text style={styles.notice}>Sign in or register with your Ampersand email</Text>
      </View>

      <View style={styles.downContent}>
        <TouchableOpacity style={styles.btnContainer} onPress={() => {
          navigation.navigate('Register')
        }} >
          <Text style={styles.btnTxt}>register</Text>
        </TouchableOpacity>
          <TouchableOpacity style={styles.btnContainer} onPress={() =>{
            navigation.navigate('SignIn')
          }}>
          <Text style={styles.btnTxt}>sign in</Text>
        </TouchableOpacity>
      </View>

     </View>


   </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width:'100%',
    flex:1,
    // justifyContent:'space-between'
  },
  imageContainer:{
 flex:0.5,
  },
  image:{
    width:'100%',
   height:"115%",
  },
  content:{
    flex:0.5,
   marginHorizontal:40,
    justifyContent: 'space-around',
  },
  header:{
    textTransform:'uppercase',
    fontSize:18,
    letterSpacing:1,
    color:'#4d4c4c'
  },
  notice:{
    fontSize:16,
    marginTop:15,
    color:'#a6a2a2'
  },
  downContent:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  btnContainer:{
    borderBottomColor:'#7a1515',
    borderBottomWidth:2,
    paddingBottom:2
  },
  btnTxt: {
    fontSize:16,
    textTransform:'uppercase'
  }
})

export default SecondScreen
