import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Vibration, Pressable, Keyboard, FlatList } from "react-native";
import ResultIMC from "./ResultIMC";
import styles from "./style";

const Form = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [messageImc, setMessageImc] = useState("preencha o peso e altura");
  const [imc, setImc] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [imcList, setImcList] = useState([]);

  const handleImcCalculation = () => {
    if (weight !== "" && height !== "") {
      let totalImc = (weight / (height.replace(",", ".") * height.replace(",", "."))).toFixed(2);
      setImcList((arr) => [...arr, { id: new Date().getTime(), imc: totalImc }]);
      setImc(totalImc);
      setHeight("");
      setWeight("");
      setMessageImc("seu IMC é igual:");
      setErrorMessage("");
    }
    if (imc == "") {
      Vibration.vibrate();
      setErrorMessage("campo obrigatório*");
    }
    setMessageImc("preencha o peso e altura");
  };
  const resetForm = () => {
    setHeight("");
    setWeight("");
    setImc("");
    setErrorMessage("");
  };

  const renderForm = () => (
    <Pressable onPress={Keyboard.dismiss} style={styles.form}>
      <Text style={styles.formLabel}>Altura</Text>
      <Text style={styles.errorMessage}>{errorMessage}</Text>
      <TextInput
        style={styles.formInput}
        onChangeText={setHeight}
        value={height}
        placeholder="Ex. 1.75"
        keyboardType="numeric"
      />

      <Text style={styles.formLabel}>Peso</Text>
      <Text style={styles.errorMessage}>{errorMessage}</Text>
      <TextInput
        style={styles.formInput}
        onChangeText={setWeight}
        value={weight}
        placeholder="Ex. 75.365"
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.formButton} onPress={handleImcCalculation}>
        <Text style={styles.formTextButton}>Calcular</Text>
      </TouchableOpacity>
    </Pressable>
  );

  const renderResult = () => (
    <View style={styles.exhibitionResultImc}>
      <ResultIMC messageImc={messageImc} imc={imc} />
      <TouchableOpacity style={styles.formButton} onPress={resetForm}>
        <Text style={styles.formTextButton}>Calcular novamente</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.formContext}>
      {imc === "" ? renderForm() : renderResult()}
      <FlatList
        showsVerticalScrollIndicator={false} //user dont see scroll
        style={styles.listImcs}
        data={[...imcList].reverse()}
        renderItem={({ item }) => {
          return (
            <Text style={styles.resultImcItem}>
              <Text style={styles.textResultImcItemList}>Resultado IMC = </Text>
              {item.imc}
            </Text>
          );
        }}
        keyExtractor={ item => item.id }
      />
    </View>
  );
};

export default Form;