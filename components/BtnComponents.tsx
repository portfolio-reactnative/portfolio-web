import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface BtnComponentProps {
  text: string;
  onPress: () => void; // Define the onPress function with no arguments
}

const BtnComponent: React.FC<BtnComponentProps> = ({ text, onPress }) => {
  const styles = StyleSheet.create({
    btnStyle: {
      backgroundColor: "#292930",
      height: 40, // Adjust height as needed
      width: 150, // Adjust width as needed
      padding: 10, // Adjust padding as needed
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5, // Add border radius for rounded corners
    },
    btnText: {
      textAlign: "center",
      color: "#FCC133",
      fontSize: 20,
    },
  });

  return (
    <TouchableOpacity style={styles.btnStyle} onPress={onPress}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default BtnComponent;
