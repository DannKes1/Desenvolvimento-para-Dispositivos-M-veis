import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

const TabelaExemplo = () => {
  const [tarefa, setTarefa] = useState("");
  const [listaTarefas, setListaTarefas] = useState([]);

  const adicionarTarefa = () => {
    if (tarefa.trim() === "") return;
    const novaTarefa = {
      id: `${Date.now()}-${Math.random()}`, // ID bem único porque você parece confuso
      titulo: tarefa,
    };
    setListaTarefas((prev) => [...prev, novaTarefa]);
    setTarefa("");
  };

  const confirmarRemocao = (id) => {
    const confirmar = window.confirm(
      "Tem certeza que deseja remover esta tarefa?"
    );
    if (confirmar) {
      removerTarefa(id);
    }
  };

  const removerTarefa = (id) => {
    setListaTarefas((prev) => prev.filter((item) => item.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.tarefaContainer}>
      <Text style={styles.tarefaTexto}>{item.titulo}</Text>
      <TouchableOpacity
        onPress={() => confirmarRemocao(item.id)}
        style={styles.botaoRemover}
      >
        <Text style={styles.removerTexto}>✕</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>📋 Lista de Tarefas</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa..."
          placeholderTextColor="#aaa"
          value={tarefa}
          onChangeText={setTarefa}
        />
        <TouchableOpacity
          style={styles.botaoAdicionar}
          onPress={adicionarTarefa}
        >
          <Text style={styles.textoBotao}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={listaTarefas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={styles.vazioTexto}>
            Nenhuma tarefa ainda. Vai lá, campeão.
          </Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
    padding: 20,
    paddingTop: 60,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 24,
    alignItems: "center",
    marginRight: 12,
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  botaoAdicionar: {
    backgroundColor: "#4CAF50",
    borderRadius: 12,
    padding: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  textoBotao: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  tarefaContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 2,
  },
  tarefaTexto: {
    fontSize: 16,
    color: "#333",
    flexShrink: 1,
  },
  botaoRemover: {
    backgroundColor: "#ff5252",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  removerTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  vazioTexto: {
    textAlign: "center",
    color: "#999",
    fontStyle: "italic",
    marginTop: 40,
  },
});

export default TabelaExemplo;
