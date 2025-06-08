import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Switch,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  Modal,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [idade, setIdade] = useState('');
  const [tipoPlano, setTipoPlano] = useState('Básico');
  const [mesesAtivo, setMesesAtivo] = useState('');
  const [carencia, setCarencia] = useState(false);
  const [doencasCronicas, setDoencasCronicas] = useState(false);
  const [dependentes, setDependentes] = useState('');
  const [consultasRecentes, setConsultasRecentes] = useState(false);
  const [faturaEmAtraso, setFaturaEmAtraso] = useState(false);
  const [estado, setEstado] = useState('São Paulo');

  // Estados para modal customizado
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');

  const estadosAtendidos = ['São Paulo', 'Minas Gerais', 'Paraná'];

  const showAlert = (title, message) => {
    setModalTitle(title);
    setModalMessage(message);
    setModalVisible(true);
  };

  const verificarBeneficio = () => {
    const idadeNum = parseInt(idade);
    const mesesNum = parseInt(mesesAtivo);
    const dependentesNum = parseInt(dependentes);

    if (isNaN(idadeNum) || idadeNum < 18 || idadeNum > 65) {
      return showAlert('Resultado', 'Desculpe, você não pode receber o benefício porque sua idade não está entre 18 e 65 anos.');
    }
    
    if (!(tipoPlano === 'Premium' || (tipoPlano === 'Essencial' && mesesNum >= 12))) {
      return showAlert('Resultado', 'Desculpe, você não pode receber o benefício porque seu plano não é elegível ou está ativo há menos de 12 meses.');
    }

    if (!carencia) {
      return showAlert('Resultado', 'Desculpe, você não pode receber o benefício porque ainda não concluiu o período de carência.');
    }

    if (doencasCronicas) {
      return showAlert('Resultado', 'Desculpe, você não pode receber o benefício porque possui doenças crônicas cadastradas.');
    }

    if (isNaN(dependentesNum) || dependentesNum > 3) {
      return showAlert('Resultado', 'Desculpe, você não pode receber o benefício porque tem mais de 3 dependentes.');
    }

    if (!consultasRecentes) {
      return showAlert('Resultado', 'Desculpe, você não pode receber o benefício porque não teve consultas liberadas nos últimos 6 meses.');
    }

    if (faturaEmAtraso) {
      return showAlert('Resultado', 'Desculpe, você não pode receber o benefício porque possui faturas em atraso.');
    }

    if (!estadosAtendidos.includes(estado)) {
      return showAlert('Resultado', 'Desculpe, você não pode receber o benefício porque seu estado não está na lista de cobertura.');
    }

    showAlert('Resultado', '🎉 Parabéns, você está qualificado para o benefício extra do seu Plano de Saúde!');
  };

  const CustomModal = () => (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{modalTitle}</Text>
          <Text style={styles.modalMessage}>{modalMessage}</Text>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.modalButtonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );

  const SwitchRow = ({ label, value, onValueChange }) => (
    <View style={styles.switchContainer}>
      <Text style={styles.switchLabel}>{label}</Text>
      <Switch
        trackColor={{ false: '#E0E0E0', true: '#4CAF50' }}
        thumbColor={value ? '#FFFFFF' : '#FFFFFF'}
        ios_backgroundColor="#E0E0E0"
        onValueChange={onValueChange}
        value={value}
        style={styles.switch}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#667eea" />
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Verificação de Benefício Extra</Text>
          <Text style={styles.subtitle}>Plano de Saúde</Text>
        </View>

        <View style={styles.form}>
          {/* Idade */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Idade</Text>
            <TextInput
              style={styles.input}
              value={idade}
              onChangeText={setIdade}
              placeholder="Digite sua idade"
              placeholderTextColor="#999"
              keyboardType="numeric"
              maxLength={3}
            />
          </View>

          {/* Tipo de Plano */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Tipo de Plano</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={tipoPlano}
                onValueChange={setTipoPlano}
                style={styles.picker}
                itemStyle={styles.pickerItem}
              >
                <Picker.Item label="Básico" value="Básico" />
                <Picker.Item label="Essencial" value="Essencial" />
                <Picker.Item label="Premium" value="Premium" />
              </Picker>
            </View>
          </View>

          {/* Meses Ativo */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Meses com plano ativo</Text>
            <TextInput
              style={styles.input}
              value={mesesAtivo}
              onChangeText={setMesesAtivo}
              placeholder="Quantos meses seu plano está ativo"
              placeholderTextColor="#999"
              keyboardType="numeric"
              maxLength={3}
            />
          </View>

          {/* Switches */}
          <View style={styles.switchSection}>
            <SwitchRow
              label="Já passou pela carência?"
              value={carencia}
              onValueChange={setCarencia}
            />

            <SwitchRow
              label="Possui doenças crônicas?"
              value={doencasCronicas}
              onValueChange={setDoencasCronicas}
            />
          </View>

          {/* Dependentes */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Número de dependentes</Text>
            <TextInput
              style={styles.input}
              value={dependentes}
              onChangeText={setDependentes}
              placeholder="Quantos dependentes você tem"
              placeholderTextColor="#999"
              keyboardType="numeric"
              maxLength={2}
            />
          </View>

          {/* Mais Switches */}
          <View style={styles.switchSection}>
            <SwitchRow
              label="Teve consultas nos últimos 6 meses?"
              value={consultasRecentes}
              onValueChange={setConsultasRecentes}
            />

            <SwitchRow
              label="Possui fatura em atraso?"
              value={faturaEmAtraso}
              onValueChange={setFaturaEmAtraso}
            />
          </View>

          {/* Estado */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Estado onde mora</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={estado}
                onValueChange={setEstado}
                style={styles.picker}
                itemStyle={styles.pickerItem}
              >
                <Picker.Item label="São Paulo" value="São Paulo" />
                <Picker.Item label="Minas Gerais" value="Minas Gerais" />
                <Picker.Item label="Paraná" value="Paraná" />
                <Picker.Item label="Outro" value="Outro" />
              </Picker>
            </View>
          </View>

          {/* Botão */}
          <TouchableOpacity style={styles.button} onPress={verificarBeneficio}>
            <Text style={styles.buttonText}>Verificar Benefício</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <CustomModal />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#667eea',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 30,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 18,
    color: '#E8E8E8',
    textAlign: 'center',
    fontWeight: '500',
  },
  form: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 10,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    backgroundColor: '#FAFAFA',
    color: '#2C3E50',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    backgroundColor: '#FAFAFA',
    overflow: 'hidden',
  },
  picker: {
    height: 50,
  },
  pickerItem: {
    fontSize: 16,
    color: '#2C3E50',
  },
  switchSection: {
    marginBottom: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E9ECEF',
  },
  switchLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2C3E50',
    flex: 1,
    marginRight: 15,
  },
  switch: {
    transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
  },
  button: {
    backgroundColor: '#FF6B6B',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#FF6B6B',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  modalContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 15,
    maxWidth: 350,
    width: '100%',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 15,
    textAlign: 'center',
  },
  modalMessage: {
    fontSize: 16,
    color: '#34495E',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 25,
  },
  modalButton: {
    backgroundColor: '#3498DB',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    minWidth: 100,
  },
  modalButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

