import * as React from 'react';
import {View,AsyncStorage,StyleSheet,TouchableHighlight} from 'react-native';
import { TextInput,Text,Button } from 'react-native-paper';
import { createStackNavigator } from "react-navigation-stack";

export default class SignIn extends React.Component {
  state = {
    pno:'',
    pwd:'',
    pno1:'',
    pwd1:'',
    perror:'',
    passerror:'',
   
  };
  componentDidMount(){
    AsyncStorage.getItem('pno').then(pno1 => this.setState({pno1:pno1}));
    AsyncStorage.getItem('pwd').then(pwd1 => this.setState({pwd1:pwd1}));
 
  }
  login = () => {
      
      if(this.state.pno ==='')
      {
        alert('Phone Number Required');
      }
      else if(this.state.pno !== this.state.pno1){
         alert('Invalid Phone NUmber');
      }
      else if(this.state.pwd !== this.state.pwd1){
        alert('Invalid Password');
      }
      else{
       this.props.navigation.navigate("Home");
      }    
       
  }
  render(){
    return (
      <View style={{flex: 1, flexDirection: 'column',justifyContent:'center'}}>
        <View style={styles.inputstyle}>
                  <TextInput
                    style={styles.textstyle}
                    label='PhoneNo'
                    value={this.state.pno}
                    keyboardType={'numeric'}
                    maxLength={10}
                    onChangeText={pno => this.setState({ pno })}
                  />
  
          </View>
          <View style={styles.inputstyle}>
                   <TextInput
                      style={styles.textstyle}
                      label='Password'
                      value={this.state.pwd}
                        maxLength={12}
                      secureTextEntry={true}
                      onChangeText={pwd => this.setState({ pwd })}
                    />  
          </View>
       
       
             <View style={styles.inputstyle}>
               <Button mode='contained' style={styles.btnstyle} onPress={() => {this.login()}}>Sign In</Button>
    
          </View>
           
      
       </View>
    );
  }
}
const styles=StyleSheet.create({
  inputstyle:{
       marginTop:6,
       marginLeft:20,
       marginRight:20,
  },
  textstyle:{
    color:'black',
    borderColor:'black',
    backgroundColor:'white',
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
})