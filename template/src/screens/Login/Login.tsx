import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { TextInput } from 'react-native-paper';

import Button from '@src/components/Buttons';
import Input from '@src/components/Input';
import images from '@src/config/image';
import useTheme from '@src/hooks/useTheme';
import { AuthStackNavigatorProps } from '@src/types/navigation';
import makeStyles from './style';

const Login = () => {
  const theme = useTheme();
  const styles = makeStyles(theme.colors);
  const [passVisible, setPassVisible] = useState(false);
  const navigation = useNavigation<AuthStackNavigatorProps>();

  const { control, handleSubmit } = useForm({
    mode: 'onBlur',
  });

  const loginHandler = (data: any) => {
    console.log(data);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <Image
        source={images.appLogo}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.welcomeText}>{'Welcome to your App'}</Text>
      <Input
        style={{ marginTop: 20 }}
        autoCapitalize="none"
        name="email"
        control={control}
        placeholder="Email"
        rules={{
          required: {
            value: true,
            message: 'Email is required',
          },
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'invalid email address',
          },
        }}
      />
      <Input
        name="pass"
        secureTextEntry={!passVisible}
        control={control}
        placeholder="Password"
        right={
          <TextInput.Icon
            icon={passVisible ? 'eye-off' : 'eye'}
            onPress={() => {
              setPassVisible(!passVisible);
            }}
          />
        }
        rules={{
          required: {
            value: true,
            message: 'Password is required',
          },
          minLength: {
            value: 8,
            message: 'Password must be atleast 8 charaters',
          },
        }}
      />
      <Text style={styles.forgotPasstext}>{'Forgot Password ?'}</Text>
      <Button title="Login" onPress={handleSubmit(loginHandler)} />
      <View style={styles.signUpContainer}>
        <Text>Don't have an account?</Text>
        <Pressable onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signUpText}>SignUp</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;