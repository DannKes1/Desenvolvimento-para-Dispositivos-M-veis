
import Papa from "papaparse";

// --- Service para buscar e processar os dados da planilha ---
// Em um projeto maior, isso ficaria em: src/services/googleSheetService.js

const getCommunityWallData = async () => {
  const googleSheetUrl = process.env.EXPO_PUBLIC_GOOGLE_SHEET_CSV;
  if (!googleSheetUrl) {
    throw new Error("A URL da planilha não está configurada em .env");
  }

  try {
    const response = await fetch(googleSheetUrl);
    const csvString = await response.text();

    return new Promise((resolve, reject) => {
      Papa.parse(csvString, {
        header: true, // Trata a primeira linha como cabeçalho
        skipEmptyLines: true,
        complete: (results) => {
          // Filtra apenas os posts que estão ativos
          const activePosts = results.data.filter(
            (row) => row.ativo && row.ativo.trim().toLowerCase() === "sim"
          );
          resolve(activePosts);
        },
        error: (error) => {
          reject(error);
        },
      });
    });
  } catch (error) {
    console.error("Erro ao buscar dados da planilha:", error);
    throw error; // Propaga o erro para ser tratado na UI
  }
};
