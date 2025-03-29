import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FuncSomar from './components/funcsomar.js'; // Importação adicionada

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora que faz apenas Soma!</Text>
      <FuncSomar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});