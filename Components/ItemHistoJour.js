import React from 'react'
import { StyleSheet, View,Text } from 'react-native'



class ItemHistoJour extends React.Component {

  constructor(props) {
    super(props)
    
  }

  

  render() {
    const { DATA } = this.props
    return (
        <View style={styles.maincontainer}>
            <View style={styles.dateZone}>
                 <Text style={[{color:"#000"},{fontSize:18}]}>{DATA.jour} </Text>
                 <Text style={[{color:"#000"},{fontSize:12}]}>{DATA.date} </Text>
            </View>
            <View style={styles.idzone}>
                <Text style={[{color:"#000"},{fontSize:24}]}>{DATA.nombreidentifi} </Text>
                 <Text style={[{color:"#000"},{fontSize:13}]}>identifications</Text>
            </View>

        </View>
    )
  }
}

const styles = StyleSheet.create({
    maincontainer: {
    flex: 1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:"#fff",
    borderColor:"#fff",
    borderRadius:15,
    paddingVertical:5,
    borderBottomWidth:0.5,
    borderBottomColor:"#da021d"
  },
  dateZone:{
      flex:2,
      paddingLeft:20,
      backgroundColor:"#fff",
  },
  idzone:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',

  },

  
})




export default ItemHistoJour