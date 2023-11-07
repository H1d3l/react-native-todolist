import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardTask: {
    //flex:1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "auto",
    height: "auto",
    marginLeft: 24,
    marginRight: 24,
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 8,
    paddingLeft: 12,
    gap:8,
    backgroundColor: "#333333",
    borderWidth: 1,
    borderColor: "#333",
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 8,
  },

  cardTaskText: {
    width: 235,
    color: "#F2F2F2",
    fontSize: 14,
    lineHeight:19
  },
  cardTaskTextConcluded: {
    width: 235,
    color: "#808080",
    fontSize: 14,
    lineHeight:19,
    textDecorationLine:"line-through"
  },
  cicle: {
    //backgroundColor:"white",
    padding: 3,
  },
  trash: {
    //backgroundColor:"white",
    paddingTop:9,
    paddingBottom:9,
    paddingLeft:10,
    paddingRight:10,
  },
});
