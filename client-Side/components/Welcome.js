import React from "react";
import { View , Text} from "react-native";


const Welcome=(props) => (
 
    <View>
  
    <Text>Hello {props.name}</Text>
    </View>
);

export default Welcome;