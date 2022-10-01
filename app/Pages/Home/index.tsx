import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Header } from "./Components";

const Home: React.FC = ({}) => {
  return (
    <View style={styles.homeStyle}>
      <Header />
      <View style={styles.divButtons}>
        <TouchableOpacity style={styles.removeButton}>
          <Text style={styles.textStyle}>Remover</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.textStyle}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    backgroundColor: "#268789",
  },

  textStyle: {
    color: "#fff",
  },

  divButtons: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 20,
  },
  removeButton: {
    backgroundColor: "#af1418",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 6,
  },

  addButton: {
    backgroundColor: "#279541",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 6,
  },
});

export default Home;
