import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {
  StackNavigator,
  TabNavigator
} from 'react-navigation';

import FirstScreen from './FirstScreen';
import AnotherScreen from './AnotherScreen';

const App = TabNavigator({
  Home: { screen: FirstScreen },
  Profile: { screen: AnotherScreen },
});

export default App;


// export default class App extends React.Component {
//   render() {
//     return (
//       <AnotherScreen />
//     );
//   }
// }

// const styles = StyleSheet.create(appStyles);


/*
      <View style={styles.container}>
        <Text style={styles.text}>Hello Wuuuuuuuuuurld!</Text>
        <Text style={styles.text}>Changes you make will automatically reload.</Text>
        <Text style={styles.text}>Shake your phone to open the developer menu.</Text>
      </View>

*/