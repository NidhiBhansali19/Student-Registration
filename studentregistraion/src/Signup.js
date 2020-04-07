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
 
  register = () => {
     if(this.state.fname ==='')
      {
        alert('First Name required');
      }
      else if(this.state.lname ==='')
      {
        alert('Last Name required');
      }
     else if(this.state.gender ==='')
      {
        alert('Select Gender');
      }
      else if(this.state.pno ==='')
      {
        alert('Phone Number required');
      }
      else if(this.state.pwd ==='')
      {

        alert('Password required');
      }
      else if(this.state.cpwd !== this.state.pwd){
        alert('Invalid Password');
      }
      else{
        AsyncStorage.setItem('fname',this.state.fname);
      AsyncStorage.setItem('lname',this.state.lname);
      AsyncStorage.setItem('gender',this.state.gender);
      AsyncStorage.setItem('pno',this.state.pno);
      AsyncStorage.setItem('email',this.state.email);
      AsyncStorage.setItem('pwd',this.state.pwd);
      this.setState({
          fname:'',
          lname:'',
          gender:'',
          pno:'',
          email:'',
          pwd:'',
          cpwd:''
      });
       this.props.navigation.navigate("SignIn");
      }    
     
    
  }
  render(){
    return (
      <View style={{flex: 1, flexDirection: 'column',marginTop:30}}>
        <View style={styles.inputstyle}>
              <TextInput
              style={styles.textstyle}
              label='Firts Name'
              value={this.state.fname}
              onChangeText={fname => this.setState({ fname })}
            />
        </View>
        <View style={styles.inputstyle}>
              <TextInput
                style={styles.textstyle}
                label='Last Name'
                value={this.state.lname}
                onChangeText={lname => this.setState({ lname })}
              />
        </View>
       <View>
              <RadioButton.Group 
                  onValueChange={gender => this.setState({gender})}
                  value={this.state.gender}>
                  <View style={{flexDirection:'row'}}>
                      <Text style={styles.rdbtn}>Male</Text>
                      <RadioButton value="male"></RadioButton>   
                      <Text style={styles.rdbtn}>FeMale</Text>
                      <RadioButton value="female"></RadioButton>
                </View>    
             </RadioButton.Group>
         </View>
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
                    label='Email'
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
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
          </View >
           <View style={styles.inputstyle}>
              <TextInput        
                  style={styles.textstyle}
                  label='Confirm Password'
                  value={this.state.cpwd}
                  maxLength={10}
                  secureTextEntry={true}
                  onChangeText={cpwd => this.setState({ cpwd })}
                />
                
          </View>
           <View style={styles.inputstyle}>
              <Button style={styles.btnstyle} mode='contained' onPress={() => {this.register()}}>Sign Up</Button>   
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
  rdbtn:{
    marginLeft:25,marginTop:7
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