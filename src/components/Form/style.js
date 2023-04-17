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
  formInput: {
    width: "90%",
    borderRadius: 50,
    backgroundColor: "#f6f6f6",
    height: 40,
    margin: 12,
    paddingLeft: 10,
  },
  formButton: {
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "#FF0043",
    marginRight: "auto",
    marginLeft: "auto",
    margin: 30,
    paddingTop: 14,
    paddingBottom: 14,
    width: "90%",
  },
  formTextButton: {
    fontSize: 20,
    color: "#fff"
  },
  errorMessage: {
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
    paddingLeft: 20,
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