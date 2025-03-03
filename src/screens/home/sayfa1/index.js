import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Style from './styles';
import {Icons, Images} from '../../../assets';
import {Loginbar} from '../../../components';

const login = () => {
  return (
    <View>
      <View>
        <View style={Style.loginpos}>
          <Image source={Icons.instal} style={Style.login} />
        </View>
        <View style={Style.middle}>
          <Text style={Style.logintextStyle}>Login</Text>
          <Text style={Style.loginundertext}>Please sign in to continue</Text>
        </View>
        <Loginbar
          source={Icons.profile}
          placeholder="Username"
          secure={false}
        />

        <View
          style={{
            marginTop: 30,
            alignItems: 'center',
          }}>
          <Loginbar source={Icons.pword} placeholder="Password" secure={true} />
        </View>
        <View style={Style.reminder}>
          <TouchableOpacity>
            <Text style={Style.loginundertext}>Remind me nextime</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Icons.onoff} style={Style.onoff} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <View style={Style.signinpos}>
            <View style={Style.signin}>
              <Text style={Style.signbuttontxt}>Sign In</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={Style.ended}>
          <Text>Don't have account?</Text>
          <TouchableOpacity>
            <Text style={Style.endedsign}>Sign Up!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default login;
