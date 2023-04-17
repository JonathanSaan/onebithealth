import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Vibration, Pressable, Keyboard } from "react-native";
import ResultIMC from "./ResultIMC";
import styles from "./style";


const Form = () => {
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();
    const [messageImc, setMessageImc] = useState("preencha o peso e altura");
    const [imc, setImc] = useState();
    const [textButton, setTextButton] = useState("Calcular");
    const [errorMessage, setErrorMessage] = useState();

    const imcCalculater = () => {
        if (weight != null && height != null) {
            setImc((weight/(height.replace(",", ".") * height.replace(",", "."))).toFixed(2));
            setHeight();
            setWeight();
            setTextButton("Calcular novamente");
            setMessageImc("seu IMC é igual:");
            setErrorMessage("");
            return;
        }

        Vibration.vibrate();
        setImc();
        setTextButton("Calcular");
        setMessageImc("preencha o peso e altura");
        setErrorMessage("campo obrigatório*");
    };

    return (
        <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput style={styles.formInput} onChangeText={setHeight} value={height} placeholder="Ex. 1.75" keyboardType="numeric" />
                
                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput style={styles.formInput} onChangeText={setWeight} value={weight} placeholder="Ex. 75.365" keyboardType="numeric" />
                
                <TouchableOpacity style={styles.formButton} onPress={() => imcCalculater()}>
                    <Text style={styles.formTextButton}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultIMC messageImc={messageImc} imc={imc} />
        </Pressable>
    );
};

export default Form;