import React from 'react'
import { StyleSheet, View,Text } from 'react-native'



class Signature extends React.Component {

  constructor(props) {
    super(props)
    
  }

 

  render() {
    return (
        <View style={styles.maincontainer}>
 <Text style={[{ color: "#fedb4a" }, { fontSize: 20 }]}>Signature de l'abonné</Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    maincontainer: {
    flex: 1,
    backgroundColor:"#fff",
  },

  
})




export default Signature