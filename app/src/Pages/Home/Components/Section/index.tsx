import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import IconMaterial from "react-native-vector-icons/MaterialIcons";
import { homeStyles } from "../../Styles";
import Icon from "react-native-vector-icons/FontAwesome";

export const Section: React.FC = () => {
  return (
    <View style={homeStyles.section}>
      <Text style={homeStyles.optionText}>Opções</Text>
      
      <View style={homeStyles.optionButtons}>
        <TouchableOpacity style={homeStyles.buttons}>
          <IconMaterial color="#1f7a7b" size={35} name="trending-down" />
        </TouchableOpacity>
        <TouchableOpacity style={homeStyles.buttons}>
          <Icon color="#1f7a7b" size={35} name="sticky-note-o" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
