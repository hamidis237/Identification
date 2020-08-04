import React from 'react'
import { StyleSheet, View,Text, SafeAreaView, ScrollView, TouchableOpacity, Dimensions, TextInput } from 'react-native'



const {width: WIDTH}=Dimensions.get('window')
const {height: HEIGHT}=Dimensions.get('window')
class CarteSim extends React.Component {

  constructor(props) {
    super(props)
    
  }

 

  render() {
    return (
    <SafeAreaView style={styles.container}>
     
            <View style={styles.maincontainer}>
                <View style={styles.inputZone}>
                    <Text style={[{color:"#fedb4a"},{fontSize:20}]}>Identité téléphonique</Text>
                    <TextInput style={[styles.input,{marginTop:20}]} placeholder={'numéro de tél kakotel'}/>
                    <TextInput style={[styles.input,{marginTop:20}]} placeholder={'Autre numéro '}/>
                    <TextInput style={[styles.input,{marginTop:20}]} placeholder={'Banque '}/>
                    
                </View>
                <View style={styles.boutonZone}>
                    
                    <TouchableOpacity style={styles.bouton} 
                     onPress={() => this.props.navigation.navigate('Civilites')}>
                        <Text  style={[{color:"#fff"}]}> SUIVANT </Text>
                    </TouchableOpacity>
                </View>
            </View>
       
    </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
      },
      
    maincontainer: {
    flex: 1,
    backgroundColor:"#fff",
    paddingTop:10,
  },
  inputZone:{
      flex:4,
      alignItems:"center",
      backgroundColor:"#fff",
      

  },
  boutonZone:{
      flex:1,
      flexDirection:'row',
      justifyContent:'flex-end',
      alignItems:'center',
      padding:30,
    
  },
  bouton:{
      height:50,
      width:WIDTH/3,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#da021d',
      borderWidth:1,
      borderRadius:10,
      borderColor:'#fedb4a'
  },
  input:{
    width:WIDTH-80,
    height:50,
    borderColor:"#fedb4a",
    borderRadius:10,
    borderWidth:1,
    paddingLeft:5,
},

  
})




export default CarteSim