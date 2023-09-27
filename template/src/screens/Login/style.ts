import { Dimensions, StyleSheet } from 'react-native';

const makeStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    heading: {
      color: colors.text,
    },
    signUpContainer: {
      flexDirection: 'row',
      marginVertical: 15,
      gap: 10,
    },
    signUpText: {
      color: 'blue',
    },
    image: {
      width: Dimensions.get('window').width - 100,
      height: Dimensions.get('window').width / 2,
    },
    welcomeText: {
      marginTop: 20,
      fontWeight: '700',
      fontSize: 18,
      marginBottom: 20,
    },
    forgotPasstext: {
      marginTop: 20,
      alignSelf: 'flex-end',
      marginHorizontal: 20,
    },
    socialMediaImage: {
      width: Dimensions.get('window').width / 3,
      height: Dimensions.get('window').width / 6,
    },
    socialContainer:{ flexDirection: 'row', marginTop: 20 },
    orTextContainer:{marginHorizontal: 20 },
    orContainer:{ flexDirection: 'row', alignItems: 'center' },
    inputContainer :{ marginTop: 20 }
  });

export default makeStyles;