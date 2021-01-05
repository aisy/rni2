import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'

export default class App extends Component {
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