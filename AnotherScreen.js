import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native'
import { appStyles } from './styles';
const styles = StyleSheet.create(appStyles);

export default class AnotherScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };
  render() {
    let { params } = this.props.navigation.state;

    // let { params } = this.props.navigation.state;

    // I haven't yet figured out how to provide
    // a navigation param...
    if (!params) {
     params = {
        name: 'everyone'
      };
    }
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hey {params.name}!</Text>
      </View>
    )
  }
}