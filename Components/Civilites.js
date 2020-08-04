import React from 'react'
import { StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableHighlight, Dimensions, TextInput } from 'react-native'
import DatePicker from 'react-native-datepicker'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { Picker } from '@react-native-community/picker';


const { width: WIDTH } = Dimensions.get('window')
const { height: HEIGHT } = Dimensions.get('window')
class Civilites extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      date: "",
      inputSexe: 0
    }

  }



  render() {
    return (
      <SafeAreaView style={styles.container}>

        <View style={styles.maincontainer}>
          <View style={styles.inputZone}>
            <Text style={[{ color: "#fedb4a" }, { fontSize: 20 }]}>Les informations de l'abonné</Text>
            <TextInput style={[styles.input, { marginTop: 20 }]} placeholder={'nom'} />
            <TextInput style={[styles.input, { marginTop: 20 }]} placeholder={'prénom'} />
            <TextInput style={[styles.input, { marginTop: 20 }]} placeholder={'adresse mail'} />
            <TextInput style={[styles.input, { marginTop: 20 }, { marginBottom: 1 }]} placeholder={'profession'} />
            <View style={[styles.sex_container, { marginRight: 0 }]}>
              <Picker
                style={[styles.picker, { marginLeft: 0 }]}
                selectedValue={this.state.inputSexe}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ inputSexe: itemValue })
                }>
                <Picker.Item label="Sexe" value="Sexe" />
                <Picker.Item label="Homme" value="homme" />
                <Picker.Item label="Femme" value="femme" />
              </Picker>
            </View>
            <View style={[styles.date_container, { marginTop: 20 }]}>

              <DatePicker
                style={{ width: WIDTH - 80 }}
                date={this.state.date}
                mode="date"
                placeholder="Date de naissance"
                format="DD/MM/YYYY"
                minDate="01/01/2020"
                maxDate="01/01/2035"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 1,
                    borderRadius: 10,
                    height: 50,
                    borderColor: "#fedb4a",
                  }
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => this._dateTextInputChanged(date)}
              />
            </View>

          </View>
          <View style={styles.boutonZone}>
            <TouchableHighlight style={styles.bouton} activeOpacity={0.6} underlayColor="#DDDDDD"
              onPress={() => this.props.navigation.navigate('CarteSim')}>
              <Text style={[{ color: "#fff" }]}> PRECEDENT </Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.bouton} activeOpacity={0.6} underlayColor="#DDDDDD"
              onPress={() => this.props.navigation.navigate('CiviliteSuite')}>
              <Text style={[{ color: "#fff" }]}> SUIVANT </Text>
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
    backgroundColor: "#fff",
    paddingTop: 10,
  },
  inputZone: {
    flex: 4,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 20,

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
  sex_container:{
    width:(WIDTH-80),
    height:50,
    borderColor:"#fedb4a",
      borderRadius:10,
      borderWidth:1,
      paddingLeft:5,
      marginTop:20
  },


})
var radio_props = [
  { label: "Homme", value: 0 },
  { label: 'Femme', value: 1 }
];



export default Civilites