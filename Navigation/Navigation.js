// Navigation/Navigations.js
import { NavigationContainer, DrawerActions } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, TouchableOpacity, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/Ionicons'
import Historique from '../Components/Historique'
import Login from '../Components/Login'
import CarteSim from '../Components/CarteSim'
import Cni from '../Components/Cni'
import Civilites from '../Components/Civilites'
import CiviliteSuite from '../Components/CiviliteSuite'
import Contact from '../Components/Contact'
import Signature from '../Components/Signature'
//import drawerContentComponents from './drawerContentComponents' 



const MainStackNavigator = createStackNavigator()

const HistoriqueStackNavigator = createStackNavigator()

const ContactStackNavigator = createStackNavigator()

const MyDrawerNavigation = createDrawerNavigator()

function StackMain({navigation}) {
  return (
    <MainStackNavigator.Navigator initialRouteName="CarteSim" 
    screenOptions={{
        headerStyle: {
          backgroundColor: '#da021d',
        },
        title: "Enregistrement de l'abonné",
        headerTintColor: '#fff',
      }}>
      <MainStackNavigator.Screen name="CarteSim" component={CarteSim} 
        options={{
          headerLeft: () =><TouchableOpacity
    style={styles.menu_button}          
    onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
    >
      <Icon
        name="md-menu"
        size={28}
        color='#fff'
      />
    </TouchableOpacity>
        }}
      />
      <MainStackNavigator.Screen name="Civilites" component={Civilites} />
      <MainStackNavigator.Screen name="CiviliteSuite" component={CiviliteSuite} />
      <MainStackNavigator.Screen name="Cni" component={Cni} />
      <MainStackNavigator.Screen name="Signature" component={Signature} />
    </MainStackNavigator.Navigator>
  )
}

function StackHistorique({navigation}) {
  return (
    <HistoriqueStackNavigator.Navigator initialRouteName="Historique"
    screenOptions={{
        headerStyle: {
          backgroundColor: '#da021d',
        },
        headerTintColor: '#fff',
      }}>
      <HistoriqueStackNavigator.Screen name="Historique" component={Historique} 
      options={{ title: "Vos Enregistrements" ,
      headerLeft: () =><TouchableOpacity
    style={styles.menu_button}          
    onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
    >
      <Icon
        name="md-menu"
        size={28}
        color='#fff'
      />
    </TouchableOpacity>}}/>
    </HistoriqueStackNavigator.Navigator>
  )
}

function StackContact({navigation}) {
  return (
    <ContactStackNavigator.Navigator initialRouteName="Contact"
    screenOptions={{
        headerStyle: {
          backgroundColor: '#da021d',
        },
        headerTintColor: '#fff',
      }}>
      <ContactStackNavigator.Screen name="Contact" component={Contact} 
      options={{ title: "Nous Contacter",
      headerLeft: () =><TouchableOpacity
    style={styles.menu_button}          
    onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
    >
      <Icon
        name="md-menu"
        size={28}
        color='#fff'
      />
    </TouchableOpacity> }}/>
    </ContactStackNavigator.Navigator>
  )
}


function Navigation() {
  return (
    <NavigationContainer>
      <MyDrawerNavigation.Navigator initialRouteName="Login">
      <MyDrawerNavigation.Screen name="Login" component={Login} />
      <MyDrawerNavigation.Screen name="Enregistrement" component={StackMain} />
      <MyDrawerNavigation.Screen name="Historique" component={StackHistorique} />
      <MyDrawerNavigation.Screen name="Contact" component={StackContact} />
    </MyDrawerNavigation.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  },
  power_button:{
    width:30,
    height:30,
    color:'#000',
    alignItems:'center',
    justifyContent:'center',
    marginRight:20,
    borderRadius:100

  },
  menu_button:{
    width:30,
    height:30,
    color:'#000',
    alignItems:'center',
    justifyContent:'center',
    marginLeft:10,
    borderRadius:100

  },
  
})
export default Navigation
