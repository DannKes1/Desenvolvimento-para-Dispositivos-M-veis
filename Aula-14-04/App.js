import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TabelaExemplo from "./components/TabelaExemplo";

export default function App() {
  return (
    <View style={styles.container}>
     <TabelaExemplo/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  
  },
});
