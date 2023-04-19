import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContext: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 30,
    
  },
  form: {
    width: "100%",
  },
  formLabel: {
    color: "#000",
    fontSize: 18,
    paddingLeft: 20,
  },
  errorMessage: {
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
    paddingLeft: 20,
  },
  formInput: {
    borderRadius: 50,
    backgroundColor: "#f6f6f6",
    margin: 12,
    paddingLeft: 10,
    height: 40,
    width: "90%",
  },
  formButton: {
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "#FF0043",
    margin: 30,
    marginRight: "auto",
    marginLeft: "auto",
    paddingTop: 14,
    paddingBottom: 14,
    width: "90%",
  },
  formTextButton: {
    fontSize: 20,
    color: "#fff"
  },
  exhibitionResultImc: {
    height: "50%",
    width: "100%",
  },
  listImcs: {
    marginTop: 20,
  },
  resultImcItem: {
    fontSize: 26,
    color: "red",
    height: 50,
    width: "100%",  
    paddingRight: 20,
  },
  textResultImcItemList: {
    fontSize: 16,
  },
});

export default styles;