import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import IconMaterial from "react-native-vector-icons/MaterialIcons";
import { homeStyles } from "../../Styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MainStackNavigation } from "../../../../../Types";

export const Section: React.FC = () => {
  const {navigate} = useNavigation<NativeStackNavigationProp<MainStackNavigation>>();
  
  const redirectExpenseList = () => {
    navigate('Expense_List');
  };

  return (
    <View style={homeStyles.section}>
      <Text style={homeStyles.optionText}>Opções</Text>

      <View style={homeStyles.optionButtons}>
        <TouchableOpacity
          onPress={redirectExpenseList}
          style={homeStyles.buttons}
        >
          <IconMaterial color="#1f7a7b" size={35} name="trending-down" />
        </TouchableOpacity>
        <TouchableOpacity style={homeStyles.buttons}>
          <Icon color="#1f7a7b" size={35} name="sticky-note-o" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
