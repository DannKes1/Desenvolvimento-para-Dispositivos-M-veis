import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  ScrollView,
  FlatList,
  Button,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Alert,
  Modal,
  StyleSheet,
} from "react-native";

export default function App() {
  const [busca, setBusca] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [modalVisivel, setModalVisivel] = useState(false);
  const [itens, setItens] = useState([
    { id: "1", nome: "React Native" },
    { id: "2", nome: "JavaScript" },
    { id: "3", nome: "Expo" },
    { id: "4", nome: "Node.js" },
    { id: "5", nome: "TypeScript" },
    { id: "6", nome: "Firebase" },
    { id: "7", nome: "MongoDB" },
    { id: "8", nome: "GraphQL" },
    { id: "9", nome: "CSS-in-JS" },
    { id: "10", nome: "Styled Components" },
    { id: "11", nome: "R" },
    { id: "11", nome: "Pandas" },
  ]);

  // Filtrando itens conforme a busca do usuário
  const itensFiltrados = itens.filter((item) =>
    item.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Título */}
      <Text style={styles.titulo}>Explorando Componentes Nativos</Text>

      {/* Campo de busca */}
      <TextInput
        style={styles.input}
        placeholder="Busque um item..."
        placeholderTextColor="#888"
        value={busca}
        onChangeText={setBusca}
      />

      {/* Lista com ScrollView para rolagem */}
      <ScrollView style={styles.listaContainer}>
        {itensFiltrados.length > 0 ? (
          itensFiltrados.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.item}
              onPress={() => Alert.alert("Item Selecionado", item.nome)}
            >
              <Text style={styles.itemTexto}>{item.nome}</Text>
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.naoEncontrado}>Nenhum item encontrado</Text>
        )}
      </ScrollView>

      {/* Botão para simular carregamento */}
      <Button
        title="Carregar Novidades"
        color="#007BFF"
        onPress={() => {
          setCarregando(true);
          setTimeout(() => setCarregando(false), 2000);
        }}
      />

      {/* Indicador de carregamento */}
      {carregando && <ActivityIndicator size="large" color="blue" />}

      {/* Imagem ilustrativa */}
      <Image
        source={{
          uri: "https://portal.ifro.edu.br/images/botoes_do_site/menu-de-relevancia/logotipo-IFRO-portal-principal.png",
        }}
        style={styles.imagem}
      />

      {/* Botão para abrir o Modal */}
      <Button
        title="Sobre o App"
        color="green"
        onPress={() => setModalVisivel(true)}
      />

      {/* Modal */}
      <Modal visible={modalVisivel} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalConteudo}>
            <Text style={styles.modalTexto}>
              Este app foi criado para explorar os principais componentes do
              React Native! 🚀
            </Text>
            <Button
              title="Fechar"
              color="red"
              onPress={() => setModalVisivel(false)}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f8f8f8" },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  listaContainer: { maxHeight: 250, marginBottom: 10 },
  item: {
    padding: 10,
    backgroundColor: "#e0e0e0",
    marginVertical: 5,
    borderRadius: 5,
  },
  itemTexto: { fontSize: 16 },
  naoEncontrado: { textAlign: "center", fontSize: 16, color: "#888" },
  imagem: { width: 60, height: 60, alignSelf: "center", marginVertical: 15 },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalConteudo: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  modalTexto: { fontSize: 18, textAlign: "center", marginBottom: 10 },
});
