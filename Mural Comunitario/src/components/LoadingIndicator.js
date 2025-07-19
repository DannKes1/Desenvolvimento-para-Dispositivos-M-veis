import React from "react";
import { View, StyleSheet } from "react-native";
import { ActivityIndicator, Text, useTheme } from "react-native-paper";

export default function LoadingIndicator({
  message = "Carregando eventos...",
}) {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ActivityIndicator
        size="large"
        color={colors.primary}
        style={styles.indicator}
      />
      <Text style={[styles.message, { color: colors.onBackground }]}>
        {message}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  indicator: {
    marginBottom: 16,
  },
  message: {
    fontSize: 16,
    textAlign: "center",
    opacity: 0.7,
  },
});
