import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, TextInput, View , Button} from 'react-native';
 
 
import Location from './location';
import { timeOf } from './time';
import timeOfFive from './time'; 
import DatePickT from './datepicker';
 

export default function App() {
  
  
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 32, backgroundColor:'#4ecdc4',padding:10,  width:400}} >     Namaz in Kerala</Text>
       
      <Location style={{backgroundColor:'blue'}} />
      <DatePickT/>
      <View style={styles.prayers}> 

      <Text style={styles.Text}> Subh : {timeOf[0]} AM</Text>
      <Text style={styles.Text}> Zuhr : {timeOf[1]} PM</Text>
      <Text style={styles.Text}> Asar : {timeOf[2]} PM</Text>
      <Text style={styles.Text}> Marib : {timeOf[3]} PM</Text>
      <Text style={styles.Text} > Isha : {timeOf[4]} PM</Text>
      </View>
      <StatusBar style="auto" />
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aafa',
    alignItems: 'center',

  },
  Text: {
    fontSize: 32,
  },
  prayers :{
    backgroundColor: '#eee',
    height: 300,
    width: 300,
    padding: 20,
    bottom: 20,
    borderRadius:20,

    position: 'absolute'

  },

   
  
});
