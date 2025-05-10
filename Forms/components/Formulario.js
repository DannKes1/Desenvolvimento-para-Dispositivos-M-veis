import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Platform,
} from 'react-native';
import { Formik } from 'formik';
import validationSchema from '../validadores/Validacao';
import { TextInput, Button, Text } from 'react-native-paper';

export default function Formulario() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.title}>Forms</Text> 
      <View style={styles.formContainer}>
        <Formik
          initialValues={{
            nome: '',
            cep: '',
            cpf: '',
            telefone: '',
            email: '',
            senha: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log('Dados enviados:', values);
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            setFieldValue,
          }) => (
            <>
              <TextInput
                label="Nome completo"
                mode="flat"
                onChangeText={handleChange('nome')}
                onBlur={handleBlur('nome')}
                value={values.nome}
                error={touched.nome && !!errors.nome}
                style={styles.input}
                theme={{ colors: { text: 'white' } }}
                autoComplete="off"
                textContentType="name"
              />
              {touched.nome && errors.nome && (
                <Text style={styles.error}>{errors.nome}</Text>
              )}

              <TextInput
                label="CEP"
                mode="flat"
                value={values.cep}
                onChangeText={(text) => {
                  const cep = text
                    .replace(/\D/g, '')
                    .replace(/(\d{5})(\d{1,3})/, '$1-$2')
                    .slice(0, 9);
                  setFieldValue('cep', cep);
                }}
                error={touched.cep && !!errors.cep}
                style={styles.input}
                theme={{ colors: { text: 'white' } }}
                autoComplete="off"
                textContentType="postalCode"
              />
              {touched.cep && errors.cep && (
                <Text style={styles.error}>{errors.cep}</Text>
              )}

              <TextInput
                label="CPF"
                mode="flat"
                value={values.cpf}
                onChangeText={(text) => {
                  const cpf = text
                    .replace(/\D/g, '')
                    .replace(/(\d{3})(\d)/, '$1.$2')
                    .replace(/(\d{3})(\d)/, '$1.$2')
                    .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
                    .slice(0, 14);
                  setFieldValue('cpf', cpf);
                }}
                error={touched.cpf && !!errors.cpf}
                style={styles.input}
                theme={{ colors: { text: 'white' } }}
                autoComplete="off"
              />
              {touched.cpf && errors.cpf && (
                <Text style={styles.error}>{errors.cpf}</Text>
              )}

              <TextInput
                label="Telefone com DDD"
                mode="flat"
                value={values.telefone}
                onChangeText={(text) => {
                  const tel = text
                    .replace(/\D/g, '')
                    .replace(/^(\d{2})(\d)/g, '($1) $2')
                    .replace(/(\d{5})(\d{1,4})$/, '$1-$2')
                    .slice(0, 15);
                  setFieldValue('telefone', tel);
                }}
                error={touched.telefone && !!errors.telefone}
                style={styles.input}
                theme={{ colors: { text: 'white' } }}
                autoComplete="tel"
                textContentType="telephoneNumber"
              />
              {touched.telefone && errors.telefone && (
                <Text style={styles.error}>{errors.telefone}</Text>
              )}

              <TextInput
                label="E-mail"
                mode="flat"
                keyboardType="email-address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                error={touched.email && !!errors.email}
                style={styles.input}
                theme={{ colors: { text: 'white' } }}
                autoComplete="off"
                textContentType="emailAddress"
              />
              {touched.email && errors.email && (
                <Text style={styles.error}>{errors.email}</Text>
              )}

              <TextInput
                label="Senha"
                mode="flat"
                secureTextEntry
                onChangeText={handleChange('senha')}
                onBlur={handleBlur('senha')}
                value={values.senha}
                error={touched.senha && !!errors.senha}
                style={styles.input}
                theme={{ colors: { text: 'white' } }}
                autoComplete="off"
                textContentType="password"
              />
              {touched.senha && errors.senha && (
                <Text style={styles.error}>{errors.senha}</Text>
              )}

              <Button
                mode="contained"
                onPress={handleSubmit}
                style={styles.button}
              >
                Enviar Formulário
              </Button>
            </>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
    scrollContainer: {
      flexGrow: 1,
      backgroundColor: '#2B2B2B',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
    },
    formContainer: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: '#3C3C3C',
      borderRadius: 8,
      padding: 20,
      borderWidth: 1,
      borderColor: '#555',
    },
    input: {
      marginBottom: 10,
      backgroundColor: '#2B2B2B',
      fontSize: 14,
      color: 'white', 
    },
    error: {
      color: '#FF6B6B',
      fontSize: 12,
      marginBottom: 8,
    },
    button: {
      marginTop: 16,
      paddingVertical: 10,
      borderRadius: 4,
      backgroundColor: '#707070', 
    },

    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 24,
        textAlign: 'center',
      },
  });
  
  