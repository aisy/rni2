import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'

export default class Button extends Component {
  render() {
    return (
      <View style={{ backgroundColor: "red" }}>
        <Text>
          Hello, world!
                </Text>
        <Button title="Hey!" />
      </View>
    )
  };
}