import * as React from 'react';
import {View,AsyncStorage,StyleSheet} from 'react-native';
import { TextInput,RadioButton,Text,Button } from 'react-native-paper';
import { createStackNavigator } from "react-navigation-stack";

export default class MyComponent extends React.Component {
 state = {
    fname:'',
    lname:'',
    gender:'',
    pno:'',
    email:'',
    pwd:'',
    cpwd:''
  };
    componentDidMount(){
         AsyncStorage.getItem('fname').then(fname => this.setState({fname:fname}));
         AsyncStorage.getItem('lname').then(lname => this.setState({lname:lname}));
        AsyncStorage.getItem('gender').then(gender => this.setState({gender:gender}));
        AsyncStorage.getItem('email').then(email => this.setState({email:email}));
        AsyncStorage.getItem('pno').then(pno => this.setState({pno:pno}));

      }
      clear = () => {
        AsyncStorage.removeItem('fname');
        AsyncStorage.removeItem('lname');
        AsyncStorage.removeItem('pno');
        AsyncStorage.removeItem('gender');
        AsyncStorage.removeItem('pwd');
        AsyncStorage.removeItem('cpwd');
        AsyncStorage.removeItem('email');
        this.props.navigation.navigate("SignUp")
      }
  render(){
    return (
         <View style={{flex: 1, flexDirection: 'column'}}>
             <Text style={{fontWeight:'bold',fontSize:30,marginTop:100,marginLeft:40}}>Student Information</Text>
              <View style={styles.container}>
                 <Text style={styles.titlestyle}>First Name</Text>
                 <Text style={styles.valuestyle}>{this.state.fname}</Text>
              </View>
              <View style={styles.container}>
                 <Text style={styles.titlestyle}>Last Name</Text>
                 <Text style={styles.valuestyle}>{this.state.lname}</Text>
              </View>
              <View style={styles.container}>
                 <Text style={styles.titlestyle}>Gender Is </Text>
                 <Text style={{marginLeft:60,fontSize:20,}}>{this.state.gender}</Text>
              </View>
              <View style={styles.container}>
                 <Text style={styles.titlestyle}>Phone No</Text>
                 <Text style={{marginLeft:55,fontSize:20,}}>{this.state.pno}</Text>
              </View>
              <View style={styles.container}>
                 <Text style={styles.titlestyle}>Email   </Text>
                 <Text style={{marginLeft:70,fontSize:20,}}>{this.state.email}</Text>
              </View>
             
             <View style={styles.inputstyle}>
               <Button mode='contained' style={styles.btnstyle} onPress={() => {this.clear()}}>LogOut</Button>
    
          </View>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  titlestyle:{
    fontSize:20,
  },
  valuestyle:{
    marginLeft:50,fontSize:20,
  },
  container:{
    flexDirection:'row',alignItmes:'center',marginLeft:80,
  },
   btnstyle:{
    height:65,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:380,
    borderRadius:30,
  },
  inputstyle:{
       marginTop:6,
       marginLeft:20,
       marginRight:20,
  },
 
})