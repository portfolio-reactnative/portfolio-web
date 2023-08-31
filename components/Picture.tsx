import React from "react";
import { Image, StyleSheet } from "react-native";
import profilePic from "../assets/myPhoto.png"

export default function mypic(){
    const style=StyleSheet.create({
        profileStyle:{
            height:625,
            width:400,
            alignItems:"baseline",
            alignSelf:"center"
            
        }

    });


    return(
        <Image source={profilePic} style={style.profileStyle}/>
    );
}