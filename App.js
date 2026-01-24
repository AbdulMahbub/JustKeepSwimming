import * as React from 'react';
import { Text, View } from 'react-native';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { createStackNavigator } from '@react-navigation/stack';
import WoodenButton from './src/components/WoodenButton.jsx'

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate('Settings')}>
        Go to Settings
      </Button>

      <WoodenButton
        title = "huzzah"
        onPressFunction = {testPress}
        >
      </WoodenButton>
    </View>
  );
}

function testPress(){
  console.log("test")
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
    </View>
  );
}

const MyStack = createStackNavigator({
  screens: {
    Home: HomeScreen,
    Settings: SettingsScreen,
  },
});

const Navigation = createStaticNavigation(MyStack);

export default function App() {
  return <Navigation />;
}