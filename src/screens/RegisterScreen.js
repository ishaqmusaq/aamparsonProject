import React from 'react'
import { Image, StyleSheet, View, TextInput, Text } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'


function RegisterScreen() {
  return (
<View style={styles.parentContainer}>

<ScrollView style={styles.container}>

    <View style={styles.imageContainer}>

     <View  style={styles.editContainer}>
      <TouchableOpacity style={styles.editBtnContainer}>
      <Text style={styles.editText}>edit profile photo</Text>
      </TouchableOpacity>
    </View>

      <Image  source={require('../../assets/img5.png')} style={styles.image} />

    </View>

    <View style={styles.content}>
  
      <View style={styles.formContainer}>
      <Text style={styles.formTxt}>Full name</Text>
     <TextInput placeholder='Joan Shay' placeholderTextColor='#a6a2a2' style={styles.input} />
      </View>
       <View style={styles.formContainer}>
      <Text style={styles.formTxt}>Email</Text>
     <TextInput placeholder='joan.shay@mail.com' placeholderTextColor='#a6a2a2' style={styles.input} />
      </View>
       <View style={styles.formContainer}>
      <Text style={styles.formTxt}>Phone Number</Text>
     <TextInput placeholder='+233 (244) 245 190' placeholderTextColor='#a6a2a2' style={styles.input} />
      </View>
       <View style={styles.formContainer}>
      <Text style={styles.formTxt}>Role</Text>
     <TextInput placeholder='Director of Marketing' placeholderTextColor='#a6a2a2' style={styles.input} />
      </View>
       <View style={styles.formContainer}>
      <Text style={styles.formTxt}>Twitter</Text>
     <TextInput placeholder='@joansays' placeholderTextColor='#a6a2a2' style={styles.input} />
      </View>
       <View style={styles.formContainer}>
      <Text style={styles.formTxt}>LinkedIn</Text>
     <TextInput placeholder='/joan.shay' placeholderTextColor='#a6a2a2' style={styles.input} />
      </View>
         <View>
      <Text style={styles.formTxt}>Password</Text>
     <TextInput  placeholder={"\u2B24 \u2B24 \u2B24 \u2B24 \u2B24"} placeholderTextColor='#a6a2a2' autoCapitalize='none' autoCorrect={false} secureTextEntry ={true}  style={[styles.input, styles.passInput]} />
      </View>

    <TouchableOpacity style={styles.signinBtnContainer}>
      <Text style={styles.signintxt}>sign in</Text>
    </TouchableOpacity>




  </View>

</ScrollView>

</View>
  )
}

const styles = StyleSheet.create({
  parentContainer:{
    flex:1,
 
  },
container:{
  height:'100%',
},
imageContainer:{

  // flex:0.3,
  // backgroundColor: 'green',
},
image:{
  width:'100%',
  height:350
},
editContainer:{
 alignItems:'center',
 justifyContent:'center',
 alignSelf:'center',
//  backgroundColor:'red',
 position:'absolute',
 top:'50%',
 left:'30%',
 zIndex:2
},
editBtnContainer:{
  borderWidth:1,
 borderColor:'red',
 paddingVertical:5,
 paddingHorizontal:10,
 borderRadius:3
},
editText:{
  textTransform:'uppercase',
  fontSize:15,
  fontWeight:'bold'
},
content:{
  marginVertical:'5%',
  marginHorizontal:30,

},
errorContainer:{
  marginBottom:20
},
error:{
  color:'#7a1515',
  fontSize:15
},
input:{
  borderBottomWidth:1,
  borderBottomColor:'#a6a2a2',
  textAlign:'right',
  fontSize:17,
  height:50
},
passInput:{
  fontSize:14,
   
},
formTxt: {
  position: 'absolute',
  top:15,
  fontSize:17,
  color:'#474545'
},
formContainer:{
  marginBottom:7
},
signinBtnContainer:{
  backgroundColor:'#ff006f',
  height:60,
  alignItems:'center',
  justifyContent:'center',
   marginVertical:30,
   borderRadius:7
},
signintxt:{
  color:'white',
  textTransform:'uppercase',
  fontSize:17,
  letterSpacing:2,
},
downContent:{
  flexDirection:'row',
},
  btnContainer:{
    borderBottomColor:'#7a1515',
    borderBottomWidth:2,
    paddingBottom:2,
    marginLeft:10
  },
  btnTxt: {
    fontSize:16,
    textTransform:'capitalize',
      letterSpacing:1,
      color:'#474545'
  },
  forgotTxt:{
     fontSize:16,
     letterSpacing:1,
     color:'#474545'
  }
})
export default RegisterScreen
