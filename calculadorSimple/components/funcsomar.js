import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';

const FuncSomar = () => {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState(null);

  const somar = () => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);

    if (isNaN(numero1) || isNaN(numero2)) {
      Alert.alert('Entrada inválida', 'Por favor, insira números válidos.');
      return;
    }

    setResultado(num1 + num2);
  };

  const clear = () => {
  setNumero1('');
  setNumero2('');
  setResultado(null);

  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Digite o primeiro número"
        value={numero1}
        onChangeText={setNumero1}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Digite o segundo número"
        value={numero2}
        onChangeText={setNumero2}
      />

      
      <Button title="Somar" onPress={somar} />
      {resultado !== null && (
        <Text style={styles.resultado}>Resultado: {resultado}</Text>
      )}
      <Button title = "Limpar Campos" onPress ={clear}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },

  clear: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10,
    gap: 10,
  }
});

export default FuncSomar;
