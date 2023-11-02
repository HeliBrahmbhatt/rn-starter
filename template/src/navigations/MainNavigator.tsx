import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { screenName } from '@src/constants/screen';
import Login from '@src/screens/Login/Login';
import SingUp from '@src/screens/SignUp/SignUp';
import Home from '@src/screens/Home/Home';
import Query from '@src/screens/Home/Query';
import Setting from '@src/screens/Home/Setting';
import { AuthStackType, RootStackType } from '@src/types/navigation';

import { useTranslation } from 'react-i18next';

const Auth = createNativeStackNavigator<AuthStackType>();
const Tab = createBottomTabNavigator<RootStackType>();

const AuthNavigator = () => {
  const { t } = useTranslation();

  return (
    <Auth.Navigator>
      <Auth.Screen
        name={t(screenName.login.name)}
        component={Login}
        options={{ headerShown: false }}
      />
      <Auth.Screen
        name={screenName.signUp.name}
        component={SingUp}
        options={{ headerShown: false }}
      />
    </Auth.Navigator>
  );
};

const HomeNavigator = () => {
  const { t } = useTranslation();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name={t(screenName.home.name)}
        component={Home}
        options={{
          tabBarIcon: ({ ...props }) => <AntDesign name="home" {...props} />,
        }}
      />
      <Tab.Screen
        name={t(screenName.queryExample.name)}
        component={Query}
        options={{
          headerTitle: screenName.queryExample.headerTitle,
          tabBarIcon: ({ ...props }) => (
            <AntDesign name="codesquare" {...props} />
          ),
        }}
      />
      <Tab.Screen
        name={t(`${screenName.setting.name}`)}
        component={Setting}
        options={{
          tabBarIcon: ({ ...props }) => <AntDesign name="setting" {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};

const MainNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return <>{isLoggedIn ? <HomeNavigator /> : <AuthNavigator />}</>;
};
export default MainNavigator;
