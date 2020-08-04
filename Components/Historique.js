import React from 'react'
import { StyleSheet, View,Text, Image, TouchableOpacity, SafeAreaView, FlatList, Dimensions } from 'react-native'
import ItemHistoJour from './ItemHistoJour'

const {width: WIDTH}=Dimensions.get('window')
const {height: HEIGHT}=Dimensions.get('window')
class Historique extends React.Component {

  constructor(props) {
    super(props)
    
  }


  render() {
    return (
      <SafeAreaView style={styles.container}>
          <View style={styles.maincontainer}>
              <View style={styles.boutonZone}>
                  <TouchableOpacity style={styles.ligne_item} 
                      onPress={()=>  console.log('Jour')}>

                      <Image style={styles.icone}
                          source={require('../Images/stylo.png')}
                          />
                    <Text style={styles.icone_text}>Par Jour</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.ligne_item} 
                      onPress={()=> console.log('Semaine')}>

                      <Image style={styles.icone}
                          source={require('../Images/stylo.png')}
                          />
                    <Text style={styles.icone_text}>Par Semaine</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.ligne_item} 
                      onPress={()=> console.log('Mois')}>

                      <Image style={styles.icone}
                          source={require('../Images/stylo.png')}
                          />
                    <Text style={styles.icone_text}>Par Mois</Text>
                  </TouchableOpacity>
              </View>
              <View style={styles.listZone}>
              <Text style={[{color:"#da021d"},{fontSize:20},{marginBottom:10} ]}>Historique de vos enregistrements</Text>
              <FlatList
                  style={styles.list}
                  data={DATA}
                  extraData={this.props.vueFilm}
                  keyExtractor={(item) => item.id}
                  renderItem={({item}) => (
                    <ItemHistoJour
                    DATA={item}
                    />
                  )}

                />

               </View>
          </View>
        </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'red'
  },
  scrollView: {
    backgroundColor: 'pink',
  },
maincontainer: {
flex: 1,
backgroundColor:"#fedb4a",
},
listZone:{
  flex:4,
  alignItems:"center",
  backgroundColor:"#fff",
  paddingTop:20,

},
boutonZone:{
  flex:1,
  flexDirection:'row',
  justifyContent:'space-around',
  alignItems:'center',

},
ligne_item:{
  flex:1,
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:"#fedb4a",
  paddingVertical:10,

},
icone:{
  borderRadius:100,
  width:50,
  height:50,
  resizeMode: 'cover',
  backgroundColor:'#fff',

},
list:{
  width:WIDTH-30,
},
  
})
const DATA = [
  {
    id: '1',
    date: '18/05/2020',
    jour:'Lundi',
    nombreidentifi:'10'
  },
  {
    id: '2',
    date: '17/05/2020',
    jour:'Dimanche',
    nombreidentifi:'60'
  },
  {
    id: '3',
    date: '16/05/2020',
    jour:'Samedi',
    nombreidentifi:'100'
  },
  
];
const DATA2 = [
  {
    id: '1',
    date: '18/05/2020',
    jour:'Lundi2',
    nombreidentifi:'102'
  },
  {
    id: '2',
    date: '17/05/2020',
    jour:'Dimanche2',
    nombreidentifi:'602'
  },
  {
    id: '3',
    date: '16/05/2020',
    jour:'Samedi2',
    nombreidentifi:'1002'
  },
  
];
const DATA3 = [
  {
    id: '1',
    date: '18/05/2020',
    jour:'Lundi3',
    nombreidentifi:'103'
  },
  {
    id: '2',
    date: '17/05/2020',
    jour:'Dimanche',
    nombreidentifi:'603'
  },
  {
    id: '3',
    date: '16/05/2020',
    jour:'Samedi',
    nombreidentifi:'1003'
  },
  
];


export default Historique