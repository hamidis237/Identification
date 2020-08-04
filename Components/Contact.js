import React from 'react'
import { StyleSheet, View,Text, ScrollView,TouchableOpacity, Dimensions,Image } from 'react-native'


const { width: WIDTH } = Dimensions.get('window')
const { height: HEIGHT } = Dimensions.get('window')
class Contact extends React.Component {

  constructor(props) {
    super(props)
    
  }

 

  render() {
    return (
      <ScrollView style={styles.scroll}>
      <View style={styles.maincontainer}>
      
      <TouchableOpacity style={styles.itemContainer} >
          <View style={styles.itemImage}>
          <Image style={styles.item_image}
          source={require('../Images/tel_kakot.png')}
          />
          </View>
          <View style={styles.itemText}>
          <Text style={[styles.text, { color: '#6eb557' }, { fontSize: 18 }]} >(237)654-030-303 </Text>
          </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemContainer} >
          <View style={styles.itemImage}>
          <Image style={styles.item_image}
          source={require('../Images/mail_kakot.png')}
          />
          </View>
          <View style={styles.itemText}>
          <Text style={[styles.text, { color: '#6eb557' }, { fontSize: 18 }]} >info@gedomed.com </Text>
          </View>
      </TouchableOpacity>
      <View style={styles.itemContainer}>
          <View style={styles.itemImage}>
          <Image style={styles.item_image}
          source={require('../Images/site_kakot.png')}
          />
          </View>
          <View style={styles.itemText}>
          <Text style={[styles.text, { color: '#6eb557' }, { fontSize: 18 }]} >www.gedomed.com </Text>
          </View>
      </View>
      <View style={styles.itemContainer}>
          <View style={styles.itemImage}>
          <Image style={styles.item_image}
          source={require('../Images/facebook.png')}
          />
          </View>
          <View style={styles.itemText}>
          <Text style={[styles.text, { color: '#6eb557' }, { fontSize: 18 }]} >Facebook </Text>
          </View>
      </View>
      <TouchableOpacity style={styles.itemContainer} >
          <View style={styles.itemImage}>
          <Image style={styles.item_image}
          source={require('../Images/twitter.png')}
          />
          </View>
          <View style={styles.itemText}>
          <Text style={[styles.text, { color: '#6eb557' }, { fontSize: 18 }]} >Tiwtter</Text>
          </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemContainer} >
          <View style={styles.itemImage}>
          <Image style={styles.item_image}
          source={require('../Images/youtube.png')}
          />
          </View>
          <View style={styles.itemText}>
          <Text style={[styles.text, { color: '#6eb557' }, { fontSize: 18 }]} >Youtube</Text>
          </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemContainer} >
          <View style={styles.itemImage}>
          <Image style={styles.item_image}
          source={require('../Images/partage_kakot.png')}
          />
          </View>
          <View style={styles.itemText}>
          <Text style={[styles.text, { color: '#6eb557' }, { fontSize: 18 }]} >Partager l'App</Text>
          </View>
      </TouchableOpacity>

  </View>
  </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  scroll:{
    flex:1,
  },
  maincontainer: {
      flex: 1,
      backgroundColor: "#fff",
  },
  titreContainer: {
      backgroundColor: '#137288',
      height: 100,
      alignItems:'center',
      justifyContent:'center',
  },
  itemContainer: {
      backgroundColor: '#fff',
      height: 100,
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: 10,
      borderTopWidth:1,
      borderTopColor:'#137288',
  },
  itemImage: {
      width: 80,
      height: 80,
      borderRadius: 100,
      alignItems:'center',
      justifyContent:'center',
      
  },
  itemText: {
      height: 80,
      width:WIDTH-110,
      alignItems:'center',
      justifyContent:'center',
  },
  item_image:{
      width:50,
      height:50,
      resizeMode: 'contain',
  },
  text:{
      textAlign:"center",
  },


})




export default Contact