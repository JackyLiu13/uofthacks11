import React from "react";
import { View, Text, TextInput, Button, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

export default function NegotiateScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 2, flexDirection: "row" }}>
        <View style={{ flex: 1, backgroundColor: "skyblue" }}>
          <Text>Reaction Box</Text>
        </View>
        <View style={{ flex: 2, backgroundColor: "powderblue" }}>
          <Text>Offer</Text>
        </View>
      </View>
      <View style={{ flex: 5, backgroundColor: "steelblue" }}>
        <View style={{ flex: 1 }}>
          <Text>Current Price</Text>
        </View>
      </View>
      <View style={{ flex: 3 }}>
        <View style={{ flex: 1 }}>
          <Text>Textbox</Text>
        </View>
        <View style={{ flex: 1 }}>
          <TextInput placeholder="Input Text Box" />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Button title="Haggle" onPress={() => {}} />
          <Button title="✅" onPress={() => {}} />
          <Button title="❌" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
}
