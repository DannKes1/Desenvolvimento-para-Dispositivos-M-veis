# 🏥 Plano Saúde - Verificação de Benefício Extra

<div align="center">

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**Aplicativo móvel para verificação de elegibilidade de benefício extra em planos de saúde**

[Funcionalidades](#-funcionalidades) • [Instalação](#-instalação) • [Como Usar](#-como-usar) • [Tecnologias](#-tecnologias) • [Estrutura](#-estrutura-do-projeto)

</div>

---

## 📋 Sobre o Projeto

O **Plano Saúde - Verificação de Benefício Extra** é um aplicativo React Native desenvolvido com Expo que permite aos usuários verificar se estão elegíveis para receber benefícios extras em seus planos de saúde. O app implementa um sistema de validação baseado em critérios específicos e fornece feedback imediato sobre a elegibilidade.

### 🎯 Objetivo

Simplificar o processo de verificação de elegibilidade para benefícios extras, oferecendo uma interface intuitiva e moderna que guia o usuário através de um formulário estruturado com validações em tempo real.

---

## ✨ Funcionalidades

### 📝 Formulário Completo

- **Dados Pessoais**: Idade do usuário
- **Informações do Plano**: Tipo (Básico, Essencial, Premium) e tempo de ativação
- **Status de Carência**: Verificação se o período de carência foi concluído
- **Histórico Médico**: Informações sobre doenças crônicas cadastradas
- **Dependentes**: Quantidade de dependentes incluídos no plano
- **Utilização**: Consultas realizadas nos últimos 6 meses
- **Situação Financeira**: Status de faturas em atraso
- **Localização**: Estado de residência

### 🔍 Sistema de Validação Inteligente

- Validação sequencial baseada em regras de negócio específicas
- Retorno da primeira regra não atendida para feedback claro
- Mensagens personalizadas para cada cenário

### 🎨 Interface Moderna

- Design responsivo otimizado para dispositivos móveis
- Componentes nativos do React Native
- Modal customizado para exibição de resultados
- Switches estilizados para melhor experiência do usuário
- Gradientes e sombras para visual moderno

---

## 📱 Como Usar

### 1. Preenchimento do Formulário

1. **Idade**: Digite sua idade (deve estar entre 18 e 65 anos)
2. **Tipo de Plano**: Selecione seu plano atual
3. **Tempo Ativo**: Informe há quantos meses seu plano está ativo
4. **Carência**: Indique se já passou pelo período de carência
5. **Doenças Crônicas**: Informe se possui doenças crônicas cadastradas
6. **Dependentes**: Digite o número de dependentes (máximo 3)
7. **Consultas**: Indique se teve consultas nos últimos 6 meses
8. **Faturas**: Informe se possui faturas em atraso
9. **Estado**: Selecione seu estado de residência

### 2. Verificação

- Toque no botão **"Verificar Benefício"**
- O sistema processará suas informações
- Receberá o resultado em um modal informativo

### 3. Resultados Possíveis

- ✅ **Aprovado**: Qualificado para o benefício extra
- ❌ **Reprovado**: Primeira regra não atendida será informada

---

## 🔧 Instalação

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) instalado globalmente
- [Expo Go](https://expo.dev/client) app no seu dispositivo móvel

### Passos para Instalação

1. **Clone ou baixe o projeto**

   ```bash
   # Se usando Git
   git clone [url-do-repositorio]
   cd plano-saude-beneficio
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**

   ```bash
   npm start
   # ou
   expo start
   ```

4. **Execute no dispositivo**
   - Escaneie o QR code com o app Expo Go (Android)
   - Escaneie o QR code com a câmera (iOS)
   - Ou use um emulador Android/iOS

### Scripts Disponíveis

```bash
npm start          # Inicia o servidor Expo
npm run android    # Executa no emulador Android
npm run ios        # Executa no simulador iOS
npm run web        # Executa no navegador web
```

---

## 🛠 Tecnologias

### Core

- **[React Native](https://reactnative.dev/)** `0.72.6` - Framework para desenvolvimento mobile
- **[Expo](https://expo.dev/)** `~49.0.0` - Plataforma para desenvolvimento React Native
- **[React](https://reactjs.org/)** `18.2.0` - Biblioteca JavaScript para interfaces

### Dependências Principais

- **[@react-native-picker/picker](https://github.com/react-native-picker/picker)** `2.4.10` - Componente Picker nativo
- **[react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context)** `4.6.3` - Gerenciamento de área segura
- **[expo-status-bar](https://docs.expo.dev/versions/latest/sdk/status-bar/)** `~1.6.0` - Controle da barra de status

### Suporte Web

- **[react-native-web](https://necolas.github.io/react-native-web/)** `~0.19.6` - Suporte para execução web
- **[react-dom](https://reactjs.org/docs/react-dom.html)** `18.2.0` - DOM para React
- **[@expo/webpack-config](https://github.com/expo/expo-cli)** `^19.0.0` - Configuração Webpack

---

## 📁 Estrutura do Projeto

```
plano-saude-beneficio/
├── 📄 App.js                 # Componente principal da aplicação
├── 📄 index.js               # Ponto de entrada (Expo)
├── 📄 package.json           # Dependências e scripts
├── 📄 package-lock.json      # Lock das dependências
├── 📄 devices.json           # Configurações de dispositivos Expo
├── 📄 README.md              # Documentação do projeto
└── 📁 .expo/                 # Pasta de configurações do Expo (não commitada)
    ├── devices.json          # Dispositivos conectados
    └── settings.json         # Configurações do servidor
```

### Descrição dos Arquivos

- **`App.js`**: Componente principal contendo toda a lógica da aplicação, interface e validações
- **`index.js`**: Arquivo de entrada que registra o componente principal no Expo
- **`package.json`**: Configurações do projeto, dependências e scripts de execução
- **`devices.json`**: Arquivo de configuração do Expo para dispositivos conectados

---

## 🔍 Regras de Negócio

### Critérios para Aprovação do Benefício

Para ser elegível ao benefício extra, o usuário deve atender **TODOS** os critérios abaixo:

1. **📅 Idade**: Entre 18 e 65 anos
2. **📋 Plano**:
   - Plano Premium (qualquer tempo) **OU**
   - Plano Essencial ativo há pelo menos 12 meses
3. **⏰ Carência**: Período de carência concluído
4. **🏥 Saúde**: Não possuir doenças crônicas cadastradas
5. **👨‍👩‍👧‍👦 Dependentes**: Máximo de 3 dependentes
6. **🩺 Consultas**: Ter realizado consultas nos últimos 6 meses
7. **💰 Financeiro**: Não possuir faturas em atraso
8. **📍 Localização**: Residir em estado atendido (SP, MG ou PR)

### Sistema de Validação

- As validações são executadas **sequencialmente**
- O sistema retorna apenas a **primeira regra não atendida**
- Se todas as regras forem atendidas, o usuário é **aprovado**

---

## 🎨 Design e UX

### Paleta de Cores

- **Primária**: `#667eea` (Azul gradiente)
- **Secundária**: `#764ba2` (Roxo gradiente)
- **Sucesso**: `#4CAF50` (Verde)
- **Erro**: `#FF6B6B` (Vermelho coral)
- **Texto**: `#2C3E50` (Azul escuro)

### Componentes Customizados

- **Modal de Resultado**: Exibição elegante dos resultados
- **Switch Personalizado**: Componentes toggle estilizados
- **Formulário Responsivo**: Layout adaptável para diferentes tamanhos de tela

### Experiência do Usuário

- **Feedback Visual**: Indicadores claros de estado
- **Navegação Intuitiva**: Fluxo linear e simples
- **Acessibilidade**: Labels e navegação adequadas
- **Performance**: Componentes otimizados para mobile

---

## 🚀 Desenvolvimento

### Estrutura do Código

O projeto segue uma arquitetura simples e direta:

- **Estado Local**: Gerenciado com React Hooks (`useState`)
- **Componentes Funcionais**: Uso de componentes funcionais modernos
- **Estilização**: StyleSheet nativo do React Native
- **Validação**: Lógica de validação centralizada

### Boas Práticas Implementadas

- ✅ Componentes reutilizáveis
- ✅ Código limpo e bem documentado
- ✅ Tratamento adequado de estados
- ✅ Interface responsiva
- ✅ Validação robusta de dados

---

## 📱 Compatibilidade

### Plataformas Suportadas

- **📱 iOS**: iPhone e iPad
- **🤖 Android**: Smartphones e tablets
- **🌐 Web**: Navegadores modernos (via Expo Web)

### Versões Mínimas

- **iOS**: 11.0+
- **Android**: API Level 21 (Android 5.0)+
- **Node.js**: 16.0+

---

## 🤝 Contribuição

Este projeto foi desenvolvido como uma solução específica para verificação de benefícios de plano de saúde. Para contribuições ou melhorias:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto é privado e destinado ao uso específico da verificação de benefícios de plano de saúde.

---

## 📞 Suporte

Para dúvidas ou problemas relacionados ao aplicativo:

- 📧 **Email**: [seu-email@exemplo.com]
- 📱 **Telefone**: [seu-telefone]
- 🌐 **Website**: [seu-website]

---

<div align="center">

**Desenvolvido com ❤️ usando React Native e Expo**

_Versão 1.0.0 - 2024_

</div>
