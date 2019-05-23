import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 10,
    marginHorizontal: 20
  },
  controls: {
    flexDirection: "row",
    marginLeft: "auto"
  },
  bold: {
    fontWeight: "bold"
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    marginRight: 10,
    paddingHorizontal: 5,
    minWidth: 50
  }
});

export default styles;
