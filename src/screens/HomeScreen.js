import React, { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
  RefreshControl,
  StatusBar,
} from "react-native";
import {
  Appbar,
  Text,
  Searchbar,
  Chip,
  Snackbar,
  Button,
  Surface,
} from "react-native-paper";
import EventCard from "../components/EventCard";
import LoadingIndicator from "../components/LoadingIndicator";
import { fetchSheetData } from "../utils/api";

export default function HomeScreen() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [lastUpdate, setLastUpdate] = useState(null);

  // Tema claro personalizado
  const lightTheme = {
    colors: {
      primary: "#2196F3",
      background: "#F8F9FA",
      surface: "#FFFFFF",
      onBackground: "#1A1A1A",
      onSurface: "#333333",
      outline: "#E0E0E0",
      surfaceVariant: "#F5F5F5",
    },
  };

  const loadData = async () => {
    try {
      setError(null);
      const data = await fetchSheetData();
      setEvents(data);
      setFilteredEvents(data);

      // Extrair categorias únicas
      const uniqueCategories = [
        ...new Set(data.map((event) => event.category)),
      ];
      setCategories(uniqueCategories);

      setLastUpdate(new Date());
    } catch (error) {
      console.error("Erro ao carregar eventos:", error);
      setError("Não foi possível carregar os eventos. Verifique sua conexão.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Filtrar eventos baseado na busca e categoria
  useEffect(() => {
    let filtered = events;

    // Filtro por categoria
    if (selectedCategory) {
      filtered = filtered.filter(
        (event) =>
          event.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Filtro por busca
    if (searchQuery) {
      filtered = filtered.filter(
        (event) =>
          event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.author.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredEvents(filtered);
  }, [events, searchQuery, selectedCategory]);

  const handleRefresh = () => {
    setRefreshing(true);
    loadData();
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("");
  };

  if (loading) {
    return (
      <View
        style={[
          styles.loadingContainer,
          { backgroundColor: lightTheme.colors.background },
        ]}
      >
        <LoadingIndicator />
      </View>
    );
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={lightTheme.colors.primary}
      />
      <SafeAreaView
        style={[
          styles.container,
          { backgroundColor: lightTheme.colors.background },
        ]}
      >
        {/* Header customizado */}
        <Surface
          style={[
            styles.header,
            { backgroundColor: lightTheme.colors.primary },
          ]}
        >
          <View style={styles.headerContent}>
            <Text style={styles.headerTitle}>Mural Comunitário</Text>
            <Button
              mode="contained-tonal"
              onPress={handleRefresh}
              disabled={refreshing}
              style={styles.refreshButton}
              buttonColor="rgba(255,255,255,0.2)"
              textColor="white"
              compact
            >
              ↻
            </Button>
          </View>
        </Surface>

        {/* Container principal */}
        <View style={styles.mainContent}>
          {/* Barra de busca */}
          <Surface
            style={[
              styles.searchContainer,
              { backgroundColor: lightTheme.colors.surface },
            ]}
          >
            <Searchbar
              placeholder="Buscar eventos..."
              onChangeText={setSearchQuery}
              value={searchQuery}
              style={[
                styles.searchbar,
                { backgroundColor: lightTheme.colors.surfaceVariant },
              ]}
              inputStyle={{ color: lightTheme.colors.onSurface }}
              iconColor={lightTheme.colors.primary}
            />
          </Surface>

          {/* Filtros de categoria */}
          {categories.length > 0 && (
            <Surface
              style={[
                styles.categoryContainer,
                { backgroundColor: lightTheme.colors.surface },
              ]}
            >
              <Text
                style={[
                  styles.categoryLabel,
                  { color: lightTheme.colors.onSurface },
                ]}
              >
                Categorias:
              </Text>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={categories}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <Chip
                    selected={selectedCategory === item}
                    onPress={() =>
                      setSelectedCategory(selectedCategory === item ? "" : item)
                    }
                    style={[
                      styles.categoryChip,
                      selectedCategory === item && {
                        backgroundColor: lightTheme.colors.primary,
                      },
                    ]}
                    textStyle={[
                      styles.categoryChipText,
                      selectedCategory === item && { color: "white" },
                    ]}
                  >
                    {item}
                  </Chip>
                )}
                contentContainerStyle={styles.categoryList}
              />
              {(searchQuery || selectedCategory) && (
                <Button
                  mode="text"
                  onPress={clearFilters}
                  style={styles.clearButton}
                  textColor={lightTheme.colors.primary}
                >
                  Limpar filtros
                </Button>
              )}
            </Surface>
          )}

          {/* Indicador de última atualização */}
          {lastUpdate && (
            <Text
              style={[
                styles.lastUpdate,
                { color: lightTheme.colors.onBackground },
              ]}
            >
              Última atualização: {lastUpdate.toLocaleTimeString("pt-BR")}
            </Text>
          )}

          {/* Lista de eventos */}
          {filteredEvents.length === 0 ? (
            <View style={styles.emptyContainer}>
              <Text
                style={[
                  styles.emptyText,
                  { color: lightTheme.colors.onSurface },
                ]}
              >
                {searchQuery || selectedCategory
                  ? "Nenhum evento encontrado com os filtros aplicados"
                  : "Nenhum evento encontrado"}
              </Text>
              {(searchQuery || selectedCategory) && (
                <Button
                  mode="outlined"
                  onPress={clearFilters}
                  style={styles.clearFiltersButton}
                  textColor={lightTheme.colors.primary}
                >
                  Limpar filtros
                </Button>
              )}
            </View>
          ) : (
            <FlatList
              data={filteredEvents}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <EventCard event={item} />}
              contentContainerStyle={styles.listContent}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={handleRefresh}
                  colors={[lightTheme.colors.primary]}
                  tintColor={lightTheme.colors.primary}
                />
              }
              showsVerticalScrollIndicator={false}
            />
          )}
        </View>

        {/* Snackbar para erros */}
        <Snackbar
          visible={!!error}
          onDismiss={() => setError(null)}
          duration={4000}
          action={{
            label: "Tentar novamente",
            onPress: loadData,
          }}
          style={{ backgroundColor: "#F44336" }}
        >
          {error}
        </Snackbar>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
  refreshButton: {
    minWidth: 40,
  },
  mainContent: {
    flex: 1,
    paddingTop: 8,
  },
  searchContainer: {
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  searchbar: {
    margin: 12,
    elevation: 0,
    borderRadius: 8,
  },
  categoryContainer: {
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    padding: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  categoryLabel: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
  },
  categoryList: {
    paddingVertical: 4,
  },
  categoryChip: {
    marginRight: 8,
    backgroundColor: "#E3F2FD",
  },
  categoryChipText: {
    color: "#1976D2",
    fontWeight: "500",
  },
  clearButton: {
    alignSelf: "flex-end",
    marginTop: 8,
  },
  lastUpdate: {
    textAlign: "center",
    fontSize: 12,
    opacity: 0.7,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  listContent: {
    padding: 16,
    paddingTop: 8,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  emptyText: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 16,
    opacity: 0.7,
  },
  clearFiltersButton: {
    marginTop: 8,
  },
});
