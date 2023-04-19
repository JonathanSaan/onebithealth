import { View, Text, TouchableOpacity, Share } from "react-native";
import styles from "./style";

const ResultIMC = ({ messageImc, imc }) => {
  const onShare = async () => {
    const result = await Share.share({ message: `meu IMC hoje é: ${imc}` });
  };

  return (
    <View style={styles.resultImc}>
      <View style={styles.boxShareButton}>
        <Text style={styles.information}>{messageImc}</Text>
        <Text style={styles.numberImc}>{imc}</Text>
        <TouchableOpacity onPress={onShare} style={styles.shared}>
          <Text style={styles.sharedText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResultIMC;