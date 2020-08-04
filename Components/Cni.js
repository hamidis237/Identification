import React from 'react'
import { StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableHighlight, Dimensions, TextInput, Image, TouchableOpacity } from 'react-native'
import ImagePicker from 'react-native-image-picker'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'


const { width: WIDTH } = Dimensions.get('window')
const { height: HEIGHT } = Dimensions.get('window')
class Cni extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      avatar: require('../Images/cni3.png'),
      cniVerso: require('../Images/cni4.png')
    }
  }
  _imagePik() {
    console.log('******************************************')
    ImagePicker.showImagePicker({}, (response) => {
      if (response.didCancel) {
        console.log('L\'utilisateur a annulé**************')
      }
      else if (response.error) {
        console.log('Erreur : ', response.error)
      }
      else {
        console.log('Photo********* : ', response.uri)
        let requireSource = { uri: response.uri }
        this.setState({
          avatar: requireSource
        })
      }
    })
  }

  _imagePikVerso() {
    console.log('******************************************')
    ImagePicker.showImagePicker({}, (response) => {
      if (response.didCancel) {
        console.log('L\'utilisateur a annulé**************')
      }
      else if (response.error) {
        console.log('Erreur : ', response.error)
      }
      else {
        console.log('Photo********* : ', response.uri)
        let requireSource = { uri: response.uri }
        this.setState({
          cniVerso: requireSource
        })
      }
    })
  }


  render() {
    return (
      <KeyboardAwareScrollView style={styles.container}>

        <View style={styles.maincontainer}>
          <View style={styles.inputZone}>
            <Text style={[{ color: "#fedb4a" }, { fontSize: 20 }]}>Carte National d'Identité</Text>
            <TextInput style={[styles.input, { marginTop: 20 }]} placeholder={'numéro CNI'} />
            <TextInput style={[styles.input, { marginTop: 20 }]} placeholder={'date de délivrance'} />
            <TextInput style={[styles.input, { marginTop: 20 }]} placeholder={'lieu de délivrance'} />

          </View>
          <View style={styles.capturZone}>
            <View style={styles.imageCNI}>
              <View style={styles.imageCNI2}>
                <Image style={styles.imageCNI2} source={this.state.avatar} />
              </View>
              <TouchableOpacity style={styles.flotbouton} activeOpacity={0.6} underlayColor="#DDDDDD"
                onPress={() => this._imagePik()}>
                <Image 
                  source={require('../Images/appfoto.png')}
                />

              </TouchableOpacity>

            </View>
            <View style={styles.imageCNI}>
            <View style={styles.imageCNI2}>
                <Image style={styles.imageCNI2} source={this.state.cniVerso} />
              </View>
              <TouchableOpacity style={styles.flotbouton} activeOpacity={0.6} underlayColor="#DDDDDD"
                onPress={() => this._imagePikVerso()}>
                <Image 
                  source={require('../Images/appfoto.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.boutonZone}>
            <TouchableHighlight style={styles.bouton} activeOpacity={0.6} underlayColor="#DDDDDD"
              onPress={() => this.props.navigation.navigate('CiviliteSuite')}>
              <Text style={[{ color: "#fff" }]}> PRECEDENT </Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.bouton} activeOpacity={0.6} underlayColor="#DDDDDD"
              onPress={() => this.props.navigation.navigate('Signature')}>
              <Text style={[{ color: "#fff" }]}> SUIVANT </Text>
            </TouchableHighlight>
          </View>
        </View>

      </KeyboardAwareScrollView>
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
    backgroundColor: "#fff",
  },
  inputZone: {
    flex: 2,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 20,

  },
  capturZone: {
    flex: 2,
    alignItems: 'center',
    marginTop:20,
  },
  imageCNI: {
    width: WIDTH - 80,
    height: (WIDTH - 80) / 2,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#fedb4a',
    borderWidth: 1,
    borderRadius: 20,
  },
  imageCNI2: {
    width: WIDTH - 80,
    height: (WIDTH - 80) / 2,
  },
  boutonZone: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'

  },
  bouton: {
    height: 50,
    width: WIDTH / 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#da021d',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#fedb4a'
  },
  input: {
    width: WIDTH - 80,
    height: 50,
    borderColor: "#fedb4a",
    borderRadius: 10,
    borderWidth: 1,
    paddingLeft: 5,
  },
  flotbouton: {
    width: 45,
    height: 45,
    borderColor: "#da021d",
    borderRadius: 100,
    borderWidth: 1,
    position: 'absolute',
    left: 0,
    right: 100,
    top: 0,
    bottom: 0,
    backgroundColor: '#fedb4a',
    alignItems: 'center',
    justifyContent: 'center'
  },
  item_image:{
    resizeMode: 'contain',
    width: WIDTH - 80,
    height: (WIDTH - 80) / 2,
  }

})




export default Cni