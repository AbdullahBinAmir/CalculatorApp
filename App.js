import React, { useState } from 'react';
import {StyleSheet,SafeAreaView,Text,Button,TextInput,TouchableOpacity} from 'react-native'
function App() {
  let styleobj={
    //Use colon in case of object and = in other cases
    color:'black',fontSize:20
  }
  let textstyle={
    //Use colon in case of object and = in other cases
    color:'black',fontSize:12,borderColor:'yellow',borderWidth:1,borderRadius:5,marginTop:5
  }
  let[Num1,setNum1]=useState()
  let[Num2,setNum2]=useState()
  let[result,setResult]=useState()
  const clear=()=>{
    //console.log(result)
      setNum1('')
      setNum2('')
      setResult('')
  }
  return (
    <SafeAreaView style={{backgroundColor: "#FFF"}}>
      <Text style={styleobj}>Calculator App</Text>
      <TextInput style={textstyle} value={Num1} onChangeText={n1=>setNum1(n1)}></TextInput>
      <TextInput style={textstyle} value={Num2} onChangeText={n2=>setNum2(n2)}></TextInput>
      <Text style={styleobj}>Result is: {result}</Text>
      <TouchableOpacity onPress={()=>{setResult(parseInt(Num1)+parseInt(Num2))}} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{setResult(Num1-Num2)}} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>Subtract</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{setResult(Num1*Num2)}} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>Multiply</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{setResult(Num1/Num2)}} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>Divide</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={clear} style={styles.delButton}>
      <Text style={styles.appButtonText}>Clear</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  // ...
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "green",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop:5
  },
  delButton: {
    elevation: 8,
    backgroundColor: "red",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop:5
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});

export default App;
