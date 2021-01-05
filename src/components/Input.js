import React, { Component } from 'react'
import { View } from 'react-native'
import { Input, Button } from 'react-native-elements'

export default class App extends Component {
  render() {
    return (
      <View>
        <Input placeholder={"username"} />
        <Input placeholder={"password"} secureTextEntry={true} />
        <Button title={"Login"} />
      </View>
    )
  }
}