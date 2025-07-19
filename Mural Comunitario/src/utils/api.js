import axios from "axios";
import Papa from "papaparse";

// Consolidação e melhoria do serviço de API
export const fetchSheetData = async () => {
  try {
    // Usar a variável de ambiente corretamente
    const sheetUrl = process.env.EXPO_PUBLIC_GOOGLE_SHEET_CSV;

    if (!sheetUrl) {
      throw new Error("URL da planilha não configurada");
    }

    const response = await axios.get(sheetUrl);
    const results = Papa.parse(response.data, {
      header: true,
      skipEmptyLines: true,
      transformHeader: (header) => header.toLowerCase().replace(/\s+/g, "_"),
    });

    return (
      results.data
        .map((item, index) => ({
          // ID mais consistente baseado no índice e título
          id: `${index}-${
            item.titulo?.replace(/\s+/g, "-").toLowerCase() || "evento"
          }`,
          title: item.titulo || "Sem título",
          description: item.descricao || "Sem descrição",
          date: item.data || "",
          category: item.categoria || "Geral",
          author: item.autor || "Anônimo",
          contact: item.contato || "",
          active: (item.ativo || "").toLowerCase() === "sim",
        }))
        // Filtrar apenas posts ativos
        .filter((event) => event.active)
        // Filtrar eventos com datas válidas
        .filter((event) => {
          if (!event.date) return false;
          const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
          return dateRegex.test(event.date);
        })
        // Ordenar por data (mais recente primeiro)
        .sort((a, b) => {
          const dateA = new Date(a.date.split("/").reverse().join("-"));
          const dateB = new Date(b.date.split("/").reverse().join("-"));
          return dateB - dateA;
        })
    );
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    throw error; // Propagar erro para tratamento na UI
  }
};

// Função utilitária para formatar data
export const formatDate = (dateString) => {
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
    return dateString; // Retorna original se não conseguir formatar
  }
};

// Função utilitária para obter cor da categoria
export const getCategoryColor = (category) => {
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
