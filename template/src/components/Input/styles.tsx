import { StyleSheet } from 'react-native';

const makeStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      marginVertical: 10,
      width: '85%',
    },
    errorText: {
      color: 'red',
    },
  });

export default makeStyles;
