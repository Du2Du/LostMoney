import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

export const Header: React.FC = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Valor Gasto no Total</Text>
      <Text style={styles.moneyText}>R$ 1.200,00</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    display: "flex",
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
    height: "18%",
    justifyContent: "center",
    backgroundColor: "#1f7a7b",
    borderBottomColor: '#0002',
    borderBottomWidth: 2
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
  moneyText: {
    color: "#fff",
    fontWeight: '100',
    marginTop: 5,
    fontSize: 30,
  },
});
