import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function btnCom(pros: any){
    const styles=StyleSheet.create({
        btnStyle:{
            backgroundColor:'#ac215cf',
            height:5,
            width:150,
            padding:20
        },
        btnText:{
            textAlign:"center",
            color:"gold",
            fontSize:20,

        }

    });

    return(
        <TouchableOpacity style={styles.btnStyle}>
            <Text style={styles.btnText}>{pros.text}</Text>
        </TouchableOpacity>
        

    );
}