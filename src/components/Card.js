import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Card } from 'react-native-elements'

export default class Card extends Component {
  render() {
    return (
      <View>
        <Card>
          <View>
            <Image
              resizeMode={"cover"}
              source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg" }}
              style={styles.img}
            />
            <Text>Halo</Text>
          </View>
        </Card>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 200,
  }
})