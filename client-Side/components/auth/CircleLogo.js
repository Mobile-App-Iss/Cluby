import React from "react";
import { SafeAreaView, Image,View } from "react-native";




const CircleLogo = ({ children }) => (
  <SafeAreaView
    style={{
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 20,
      paddingBottom: 40,
    }}
  >
    <SafeAreaView
      style={{
        backgroundColor: "#fff",
        height: 220,
        width: 190,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children ? (
        children
      ) : (
        <Image
          source={ require("../../assets/Logo.png")}
          style = {{flex:1, width:280 , height:280 }}         
        />
      )}
    </SafeAreaView>
  </SafeAreaView>
);

export default CircleLogo;








