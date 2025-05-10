import React from 'react';
import { SafeAreaView } from 'react-native';
import Formulario from './components/Formulario';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }}>
  
        <Formulario />
      </SafeAreaView>
    </PaperProvider>
  );
}
