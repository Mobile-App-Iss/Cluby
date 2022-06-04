import {React, useState,useContext} from "react";
import { View,ScrollView } from "react-native";
import UserInput from "../components/auth/UserInput";
import SubmitButton from "../components/auth/SubmitButton";
import Text from "@kaloraat/react-native-text";
import axios from "axios";
import CircleLogo from "../components/auth/CircleLogo";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
//import { API } from "../confing";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from "../context/auth";





export default function Signup ({navigation}) {


    const[name, setName] =useState("");
    const[email, setEmail] =useState("");
    const[password, setPassword] =useState("");
    const[loading, setLoading] =useState(false);
    //context
    const [state,setState]= useContext(AuthContext);

    console.log ("NAVIGATION ->", navigation);

    const handleSubmit = async () => {
        setLoading(true)
        if (!name || !email || !password) {
            alert ("All fields are required ")
            setLoading (false);
            return;
        }
        //console.log ("SIGNUP REQUEST =>" , name ,email , password)
        try {
            const {data} = await axios.post(`/signup`,
            {
                name,
                email,
                password,
            });

          
          if (data.error) 
          {
              alert(data.error);
              setLoading(false);
          } else {
              //save to context
              setState(data);
              // save response in async storage
              await AsyncStorage.setItem("@auth", JSON.stringify(data));
              setLoading(false);
              console.log("SIGN IN SUCCESS =>",data);
              alert("Sign up successful");
              //redirect
              navigation.navigate("Home");
            }


          
        

        } catch (err) {
            alert("Signup failed. Try again.");
            console.log(err)
            setLoading (false);
        }
    }

    return (
        <KeyboardAwareScrollView contentContainerStyle={{flex :1, justifyContent: "center"}}>
            <ScrollView style = {{flex:10, marginVertical: 30}}>
            <CircleLogo/>

                <Text title center color="#000000" > 
                  JOIN US
                </Text>

                <UserInput name="Name" value={name} setValue={setName} autoCapitalize ="words" autoCorrect={false}/>

                <UserInput name ="Email" value={email} setValue={setEmail} autoCompleteType="email" keyboardType="email-address"/>

                <UserInput name ="Password" value={password} setValue={setPassword} secureTextEntry={true} autoCompleteType="password"/> 

                <SubmitButton title = "Sign Up" handleSubmit={handleSubmit} loading ={loading}/>
                <Text small center>Already Joined ? 
                    <Text onPress={() => navigation.navigate("Signin")} color ="#ff2222"> Sign In</Text>
                </Text>



                {/*<Text>{JSON.stringify( {name,email,password}, null, 4)}</Text>*/}



            </ScrollView>
            


        </KeyboardAwareScrollView>

    );
};

