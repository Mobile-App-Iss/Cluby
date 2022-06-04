import React from "react";
import Text from"@kaloraat/react-native-text";
import { TouchableOpacity } from "react-native";

const SubmitButton = ({title, handleSubmit,loading}) => (
    <TouchableOpacity
       onPress={handleSubmit}
       style ={{
           backgroundColor: "#48d1cc",
           height: 50,
           marginBottom: 20,
           justifyContent: "center",
           marginHorizontal: 15,
           borderRadius: 24,
        }}
   
    >
       <Text bold medium center > 
          {loading ? "Please wait..":title} 
       </Text>

    </TouchableOpacity>

);
export default SubmitButton;