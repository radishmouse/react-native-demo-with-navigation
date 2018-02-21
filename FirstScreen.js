import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { appStyles } from './styles';
const styles = StyleSheet.create(appStyles);

export default class FirstScreen extends React.Component {
  static navigationOptions = {
    title: 'First!'
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Bonjour!</Text>
        <Button
          title="Go to Jane's profile"
          onPress={() => navigate('Profile', { name: 'Jane' })}
        />

      </View>
    )
  }
}