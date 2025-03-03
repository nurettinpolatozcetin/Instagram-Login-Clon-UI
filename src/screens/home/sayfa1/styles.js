import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  background: {
    backgroundColor: '#ffff',
    flex: 1,
  },
  login: {
    width: 250,
    height: 250,
  },
  loginpos: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 90,
  },
  logintextStyle: {
    fontWeight: 'bold',
    color: '#2C2966',
    fontSize: 35,
  },
  loginundertext: {
    fontWeight: 'medium',
    color: '#2C2966',
    fontSize: 15,
  },
  middle: {
    justifyContent: 'flex-start',
    margin: 20,
    marginTop: 80,
  },
  loginbar: {
    backgroundColor: '#CCCCCC',
    width: '90%',
    height: 50,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  unametxt: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'medium',
  },
  signin: {
    backgroundColor: '#2C2966',
    borderRadius: 20,
    width: '90%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signinpos: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  profile: {
    width: 25,
    height: 25,
  },
  reminder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
  },
  onoff: {
    width: 30,
    height: 30,
  },
  signbuttontxt: {
    fontWeight: 'bold',
    color: '#ffff',
  },
  ended: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  endedsign: {
    fontWeight: 'bold',
    color: '#2C2966',
    fontSize: 18,
  },
});
