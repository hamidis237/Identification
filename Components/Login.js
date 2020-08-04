import React from 'react'
import {StyleSheet, View, Dimensions, Image,Text, TextInput, Button, TouchableOpacity, ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'


const {width: WIDTH}=Dimensions.get('window')
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      state: '[15-20]'
    }
  }

render(){
  return(
//<ScrollView style={styles.scrollcontainer}>

<View style={styles.maincontainer}>
    <View style={styles.logo_container}>      
       <Image style={styles.logo}
        source={require('../Images/logo.png')}
       />

       </View>
    <View style={styles.credentiel_container}>
        <View style={styles.titre_container}>
        <Text style={styles.texta}></Text>

        </View>
        <View style={styles.input_container}>
        <View style={styles.inputContainer}>

        <Icon
              name="ios-mail"
              size={28}
              style={styles.inputicon}
            />
         
                <TextInput
                style={styles.input}
                placeholder={'Login'}
                keyboardType={'email-address'}
                />

          </View>
          <View style={styles.inputContainer}>
          
          <Icon
              name="ios-person"
              size={28}
              style={styles.inputicon}
            />

                <TextInput
                style={styles.input}
                placeholder={'Mot de passe'}
                />
          </View>

        </View>
        <TouchableOpacity style={styles.bouton} onPress={() =>  this.props.navigation.navigate('CarteSim')}>
        <Text style={styles.text_btn}>Connexion</Text>
        </TouchableOpacity>
</View>

</View>

//</ScrollView>

  )
}
}

const styles = StyleSheet.create({
   scrollcontainer: {
        flex:1,   
    
      },
      
    maincontainer: {
    flex: 1,
    backgroundColor: '#fff',

  },
  logo_container:{
      flex:1,
      justifyContent:'center',
     alignItems:'center',

  },
  
  logo:{
    resizeMode: 'contain',
    width:300,
    height:150,

  },
  credentiel_container:{
    flex:1,
    backgroundColor:'#fff',
    borderRadius:20,
    marginLeft:20,
    marginRight:20,
    marginBottom:20,

  },
  titre_container:{
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:20,

  },
  texta:{
    fontSize:20,
    fontWeight:'bold',
    marginTop:10,
    
  },
  input:{
    width: WIDTH - 75,
    height:55,
    borderRadius: 10,
    fontSize:16,
    paddingLeft:55,
    marginHorizontal:15,
    borderColor:'#da021d',
     borderWidth: 1,
     marginBottom:30,

  },
  bouton:{
    width: WIDTH - 75,
    height:55,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#da021d',
    marginHorizontal:15,
    borderRadius:20,
  },
  text_btn:{
      color:'#fff',
      fontSize:20,
  },
  inputicon:{
    position:'absolute',
    top:13,
    left:37,
    color:'#fedb4a'
  },

});

export default Login
