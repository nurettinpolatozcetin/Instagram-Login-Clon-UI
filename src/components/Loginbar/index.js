import {Text, View, Image, TextInput} from 'react-native';
import React from 'react';
import Style from './styles';
import PropTypes from 'prop-types';
const Loginbar = ({source, placeholder, secure}) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
      <View style={Style.loginbar}>
        <View style={Style.paddingbar}>
          <Image source={source} style={Style.profile} />
          <TextInput
            placeholder={placeholder}
            style={Style.unametxt}
            secureTextEntry={secure}
          />
        </View>
      </View>
    </View>
  );
};

Loginbar.propTypes = {
  source: PropTypes.number,
  placeholder: PropTypes.string,
  secure: PropTypes.bool,
};
export default Loginbar;
