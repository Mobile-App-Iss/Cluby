import {React, useState, useContext} from "react";
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



export default function Signin ({navigation}) {


    
    const[email, setEmail] =useState("");
    const[password, setPassword] =useState("");
    const[loading, setLoading] =useState(false);
    //context
    const [state,setState]= useContext(AuthContext);



    const handleSubmit = async () => {
        setLoading(true)
        if (!email || !password) {
            alert ("All fields are required ")
            setLoading (false);
            return;
        }
        console.log ("SIGNIN REQUEST =>" ,email , password)
        try {
            const {data} = await axios.post(`/signin`,
            {
                
                email,
                password,
            });
            if (data.error)
            {
                alert(data.error)
                setLoading(false);
            } else {
                //save in context
                setState(data);
                
                // save response in async storage
                await AsyncStorage.setItem("@auth", JSON.stringify(data));
                
                setLoading(false);
                console.log("SignIn Success =>", data);
                alert ("Sign in successful");
                //redirect
                navigation.navigate("Home");
            }

        

        } catch (err) {
            alert("Signin failed. Try again.");
            console.log(err);
            setLoading (false);
        }
    }
    /*//for testing
        const loadFromAsyncStorage = async() => {
        let data =await AsyncStorage.getItem("@auth");
        console.log("FROM ASYNC STORAGE =>", data);
    };
    loadFromAsyncStorage();
     */
    return (
        <KeyboardAwareScrollView contenContainerStyle={{flex :1, justifyContent: "center"}}>
            <ScrollView style = {{ flex:1, marginVertical: 40}}>
            <CircleLogo/>

                <Text title center color="#000000" > 
                  Cluby
                </Text>

                

                <UserInput name ="Email" value={email} setValue={setEmail} autoCompleteType="email" keyboardType="email-address"/>

                <UserInput name ="Password" value={password} setValue={setPassword} secureTextEntry={true} autoCompleteType="password"/> 

                <SubmitButton title = "Sign In" handleSubmit={handleSubmit} loading ={loading}/>
                <Text small center >Not yet registred ? 
                    <Text onPress={() => navigation.navigate("Signup")} color ="#ff2222"> Sign Up</Text>
                </Text>

                <Text onPress={() => navigation.navigate("ForgotPassword")}
                    small center color="orange" style={{marginTop : 10}}
                >
                    Forgot Password ?
                </Text>



                {/*<Text>{JSON.stringify( {name,email,password}, null, 4)}</Text>*/}



            </ScrollView>
            


        </KeyboardAwareScrollView>

    );
};

