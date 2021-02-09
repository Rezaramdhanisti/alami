import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import PostList from './containers/list-post/ListPost';
import DetailPost from './containers/detail-post/DetailPost';
import Account from './containers/account/Account';
import Login from './containers/auth/Login';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={DashboardStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function DashboardStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="listPost"
        component={PostList}
        options={{title: 'Home', headerLeft: null}}
      />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="profile"
        component={Account}
        options={{title: 'Profile', headerLeft: null}}
      />
    </Stack.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="login" component={Login} options={{title: 'Login'}} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={AuthStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeStack}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="detailPost"
          component={DetailPost}
          options={{title: 'Detail Page'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
