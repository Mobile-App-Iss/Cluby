import React from "react";
import { SafeAreaView, TextInput } from "react-native";


import Text from "@kaloraat/react-native-text";



const UserInput = ({
    name,
    value,
    setValue,
    autoCapitalize = "none",
    keyboardType = "default",
    secureTextEntry = false,
  }) => {
    return (
      <SafeAreaView style={{ marginHorizontal: 24 }}>
        <Text semi>{name}</Text>
        <TextInput
          autoCorrect={false}
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          style={{
            borderBottomWidth: 0.5,
            height: 48,
            borderBottomColor: "#8e93a1",
            marginBottom: 30,
          }}
          value={value}
          onChangeText={(text) => setValue(text)}
        />
      </SafeAreaView>
    );
};
  
export default UserInput;