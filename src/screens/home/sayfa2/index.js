import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Style from './styles';
import {Icons, Images} from '../../../assets';
import {Loginbar} from '../../../components';

const login = () => {
  return (
    <View>
      <View style={Style.welcomepos}>
        <Image source={Icons.welcome} style={Style.welcomeimg} />
      </View>
      <View style={Style.registerpos}>
        <Text style={Style.logintextStyle}>Register</Text>
        <Text style={Style.registeruntextStyle}>Please register to login.</Text>
      </View>
      <View style={{marginTop: 10}}>
        <View style={{alignItems: 'center'}}>
          <View style={{marginTop: 15}}>
            <Loginbar
              source={Icons.profile}
              placeholder="Username"
              secure={false}
            />
          </View>
          <View style={{marginTop: 15}}>
            <Loginbar source={Icons.phone} placeholder="Phone" secure={false} />
          </View>
          <View style={{marginTop: 15}}>
            <Loginbar
              source={Icons.pword}
              placeholder="Password"
              secure={true}
            />
          </View>
        </View>
        <View style={Style.reminder}>
          <Text style={Style.loginundertext}>Remind me nextime</Text>
          <TouchableOpacity>
            <Image source={Icons.onoff} style={Style.onoff} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <View style={Style.signinpos}>
            <View style={Style.signin}>
              <Text style={Style.signbuttontxt}>Sign up</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={Style.ended}>
          <Text>Already have account?</Text>
          <TouchableOpacity>
            <Text style={Style.endedsign}>Sign In!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default login;
