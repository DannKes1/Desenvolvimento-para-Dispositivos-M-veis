import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const TabelaExemplo = () => {
  const [dados, setDados] = useState([
    { id: "1", nome: "Jõao", valor: "100" },
    { id: "2", nome: "Zeca", valor: "200" },
    { id: "3", nome: "Joel", valor: "300" },
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.id}</Text>
      <Text style={styles.cell}>{item.nome}</Text>
      <Text style={styles.cell}>{item.valor}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>ID</Text>
        <Text style={styles.headerText}>NOME</Text>
        <Text style={styles.headerText}>VALOR</Text>
      </View>
      <FlatList
        data={dados}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },

  header: {
    flexDirection: "row",
    backgroundColor: "#4CAF50",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },

  headerText: {
    flex: 1,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    padding: 5
  },

  row: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 1,

  },

  cell: {
    flex: 1,
    textAlign: "center",
  },
});

export default TabelaExemplo;
