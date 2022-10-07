import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
  homeStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    color: "#000",
    backgroundColor: "#fff",
  },

  section: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "flex-start",
  },

  optionText: {
    fontSize: 20,
    marginBottom: 10,
  },

  optionButtons: {
    display: "flex",
    width: "90%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },

  buttons: {
    borderColor: "#1f7a7b",
    borderWidth: 2,
    display: "flex",
    alignItems: "center",
    margin: 10,
    justifyContent: "center",
    width: 70,
    height: 70,
    borderRadius: 6,
  },

  addButton: {
    backgroundColor: "#1f7a7b",
    width: 60,
    height: 60,
    paddingTop: 18,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 50,
    position: "absolute",
    bottom: 0,
    right: 0,
    marginRight: 15,
    marginBottom: 15,
  },
});
