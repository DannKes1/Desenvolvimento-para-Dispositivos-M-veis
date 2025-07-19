import React from "react";
import { Card, Title, Paragraph, Chip, Surface } from "react-native-paper";
import {
  StyleSheet,
  View,
  Linking,
  Alert,
  TouchableOpacity,
} from "react-native";

const EventCard = ({ event }) => {
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

  const handleContactPress = () => {
    if (!event.contact) return;

    // Detectar se é telefone ou email
    const isPhone = /^\d+/.test(event.contact.replace(/\s/g, ""));
    const isEmail = /@/.test(event.contact);

    if (isPhone) {
      const phoneNumber = event.contact.replace(/\D/g, "");
      Linking.openURL(`tel:${phoneNumber}`);
    } else if (isEmail) {
      Linking.openURL(`mailto:${event.contact}`);
    } else {
      Alert.alert("Contato", event.contact, [{ text: "OK", style: "default" }]);
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      evento: "#4CAF50",
      urgente: "#F44336",
      aviso: "#FF9800",
      informação: "#2196F3",
      geral: "#9E9E9E",
    };

    const normalizedCategory = category.toLowerCase();
    return colors[normalizedCategory] || colors["geral"];
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Data não informada";

    try {
      const [day, month, year] = dateString.split("/");
      const date = new Date(year, month - 1, day);

      return date.toLocaleDateString("pt-BR", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch (error) {
      return dateString;
    }
  };

  const categoryColor = getCategoryColor(event.category);
  const formattedDate = formatDate(event.date);

  return (
    <Surface
      style={[styles.card, { backgroundColor: lightTheme.colors.surface }]}
    >
      {/* Header com título e categoria */}
      <View style={styles.header}>
        <Title
          style={[styles.title, { color: lightTheme.colors.onSurface }]}
          numberOfLines={2}
        >
          {event.title}
        </Title>
        <Chip
          style={[styles.categoryChip, { backgroundColor: categoryColor }]}
          textStyle={styles.categoryText}
          compact
        >
          {event.category}
        </Chip>
      </View>

      {/* Descrição */}
      <Paragraph
        style={[styles.description, { color: lightTheme.colors.onSurface }]}
        numberOfLines={4}
      >
        {event.description}
      </Paragraph>

      {/* Linha divisória */}
      <View
        style={[styles.divider, { backgroundColor: lightTheme.colors.outline }]}
      />

      {/* Informações adicionais */}
      <View style={styles.infoContainer}>
        {/* Data */}
        <View style={styles.infoRow}>
          <View style={[styles.iconContainer, { backgroundColor: "#E3F2FD" }]}>
            <Paragraph style={styles.icon}>📅</Paragraph>
          </View>
          <Paragraph
            style={[styles.infoText, { color: lightTheme.colors.onSurface }]}
          >
            {formattedDate}
          </Paragraph>
        </View>

        {/* Autor */}
        <View style={styles.infoRow}>
          <View style={[styles.iconContainer, { backgroundColor: "#E8F5E8" }]}>
            <Paragraph style={styles.icon}>👤</Paragraph>
          </View>
          <Paragraph
            style={[styles.infoText, { color: lightTheme.colors.onSurface }]}
          >
            {event.author}
          </Paragraph>
        </View>

        {/* Contato */}
        {event.contact && (
          <TouchableOpacity onPress={handleContactPress}>
            <View style={styles.infoRow}>
              <View
                style={[styles.iconContainer, { backgroundColor: "#FFF3E0" }]}
              >
                <Paragraph style={styles.icon}>📞</Paragraph>
              </View>
              <Paragraph
                style={[
                  styles.infoText,
                  styles.contactText,
                  { color: lightTheme.colors.primary },
                ]}
              >
                {event.contact}
              </Paragraph>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </Surface>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
    borderRadius: 16,
    padding: 16,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    flex: 1,
    marginRight: 8,
    lineHeight: 24,
  },
  categoryChip: {
    alignSelf: "flex-start",
  },
  categoryText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 16,
  },
  divider: {
    height: 1,
    marginVertical: 12,
  },
  infoContainer: {
    gap: 8,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  icon: {
    fontSize: 16,
    margin: 0,
  },
  infoText: {
    fontSize: 14,
    flex: 1,
    lineHeight: 18,
  },
  contactText: {
    textDecorationLine: "underline",
    fontWeight: "500",
  },
});

export default EventCard;
