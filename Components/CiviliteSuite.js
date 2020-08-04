import React from 'react'
import { StyleSheet, View,Text, SafeAreaView, ScrollView, TouchableHighlight, Dimensions, TextInput } from 'react-native'



const {width: WIDTH}=Dimensions.get('window')
const {height: HEIGHT}=Dimensions.get('window')
class CiviliteSuite extends React.Component {

  constructor(props) {
    super(props)
    
  }

 

  render() {
    return (
    <SafeAreaView style={styles.container}>
     
            <View style={styles.maincontainer}>
                <View style={styles.inputZone}>
                    <Text style={[{color:"#fedb4a"},{fontSize:20}]}>Les informations de l'abonné</Text>
                    <TextInput style={[styles.input,{marginTop:20}]} placeholder={'nom du père'}/>
                    <TextInput style={[styles.input,{marginTop:20}]} placeholder={'nom de la mère'}/>
                    <TextInput style={[styles.input,{marginTop:20}]} placeholder={'ville'}/>
                    <TextInput style={[styles.input,{marginTop:20}]} placeholder={'quartier'}/>
                    
                </View>
                <View style={styles.boutonZone}>
                    <TouchableHighlight style={styles.bouton}  activeOpacity={0.6} underlayColor="#DDDDDD"
                      onPress={() => this.props.navigation.navigate('Civilites')}>
                        <Text style={[{color:"#fff"}]}> PRECEDENT </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.bouton} activeOpacity={0.6}  underlayColor="#DDDDDD"
                     onPress={() => this.props.navigation.navigate('Cni')}>
                        <Text  style={[{color:"#fff"}]}> SUIVANT </Text>
                    </TouchableHighlight>
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
      scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
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
      paddingTop:20,

  },
  boutonZone:{
      flex:1,
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center'
    
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




export default CiviliteSuite