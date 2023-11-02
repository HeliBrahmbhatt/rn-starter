import { useNavigation } from '@react-navigation/native';
import images from '@src/assets/images/image';
import useTheme from '@src/hooks/useTheme';
import { AuthStackNavigatorProps } from '@src/types/navigation';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  Linking,
  Image,
} from 'react-native';
import { LogLevel, OneSignal } from 'react-native-onesignal';

const REPO_URL = 'https://github.com/hrithik73/rn-starter';

const Home = () => {
  const theme = useTheme();
  const styles = makeStyles(theme.colors);
  const { t, ready } = useTranslation();
  const navigation = useNavigation<AuthStackNavigatorProps>();

  console.log('Ready', ready);
  console.log('Translatiion===>', t('welcome'));
  useEffect(() => {
    // Remove this method to stop OneSignal Debugging
    OneSignal.Debug.setLogLevel(LogLevel.Verbose);

    // OneSignal Initialization
    OneSignal.initialize('ef79ac09-ba96-417c-a9ae-c322c2506d24');

    // requestPermission will show the native iOS or Android notification permission prompt.
    // We recommend removing the following code and instead using an In-App Message to prompt for notification permission
    OneSignal.Notifications.requestPermission(true);

    // Method for listening for notification clicks
    OneSignal.Notifications.addEventListener('click', event => {
      console.log('OneSignal: notification clicked:', event);
      if (event.notification.title === 'test') {
        navigation.navigate('QeuryExample');
      } else {
        navigation.navigate('Setting');
      }
      //
      //
    });
  });
  const openRepoLink = () => {
    Linking.openURL(REPO_URL).catch(err =>
      console.error("Couldn't load page", err),
    );
  };
  return (
    <View style={styles.container}>
      <Image source={theme.dark ? images.logo : images.logo_dark} />
      <Text style={styles.subheading}>
        Please visit the README of this repo for more info
      </Text>
      <Pressable style={styles.linkContainer} onPress={openRepoLink}>
        <Text style={styles.linkText}>{REPO_URL}</Text>
      </Pressable>
    </View>
  );
};

const makeStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    heading: {
      color: colors.text,
      fontSize: 22,
      fontWeight: 'bold',
    },
    subheading: {
      color: colors.text,
      fontSize: 16,
      marginVertical: 15,
    },
    linkText: {
      color: 'blue',
    },
    linkContainer: {},
  });
export default Home;
