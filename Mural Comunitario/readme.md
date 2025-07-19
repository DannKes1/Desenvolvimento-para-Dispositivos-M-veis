Mural Comunitário APP

📱 Visão Geral

O Mural Comunitário é um aplicativo mobile desenvolvido em React Native que funciona como uma plataforma digital para compartilhamento de informações comunitárias. O projeto utiliza uma abordagem inovadora ao empregar Google Sheets como backend, proporcionando uma solução simples, acessível e de baixo custo para comunidades que desejam manter seus membros informados sobre eventos, avisos e atividades locais.

Este aplicativo foi desenvolvido como projeto acadêmico, demonstrando a viabilidade de soluções tecnológicas simples para problemas reais de comunicação comunitária. A escolha por Google Sheets como backend elimina a necessidade de infraestrutura complexa de servidor, tornando a solução acessível para organizações com recursos limitados.

🎯 Objetivos do Projeto

Objetivo Principal

Desenvolver uma plataforma digital que facilite a comunicação e o compartilhamento de informações dentro de comunidades locais, utilizando tecnologias acessíveis e de baixo custo.

Objetivos Específicos

•
Criar uma interface intuitiva para visualização de eventos e avisos comunitários

•
Implementar sistema de filtragem e busca para facilitar a localização de informações relevantes

•
Utilizar Google Sheets como backend para reduzir custos e complexidade de infraestrutura

•
Desenvolver uma solução responsiva que funcione adequadamente em dispositivos móveis

•
Demonstrar a viabilidade de soluções tecnológicas simples para problemas comunitários

🏗️ Arquitetura do Sistema

Visão Geral da Arquitetura

O sistema segue uma arquitetura cliente-servidor simplificada, onde:

•
Frontend: Aplicativo React Native que consome dados via API REST

•
Backend: Google Sheets funcionando como banco de dados e API

•
Comunicação: Requisições HTTP para CSV público do Google Sheets

Componentes Principais

1. Camada de Apresentação (Frontend)

•
React Native: Framework principal para desenvolvimento mobile

•
React Native Paper: Biblioteca de componentes UI seguindo Material Design

•
Expo: Plataforma para desenvolvimento e deploy simplificado

2. Camada de Dados (Backend)

•
Google Sheets: Planilha online funcionando como banco de dados

•
CSV Export: API pública do Google Sheets para exportação de dados

•
Papa Parse: Biblioteca para parsing de dados CSV

3. Camada de Comunicação

•
Axios: Cliente HTTP para requisições à API

•
REST API: Comunicação via protocolo HTTP/HTTPS

🛠️ Tecnologias Utilizadas

Frontend

TecnologiaVersãoDescriçãoReact Native^0.72.0Framework para desenvolvimento mobile multiplataformaReact^18.2.0Biblioteca JavaScript para construção de interfacesReact Native Paper^5.10.0Componentes UI seguindo Material DesignExpo^49.0.0Plataforma para desenvolvimento React NativeReact Navigation^6.0.0Biblioteca para navegação entre telas

Utilitários e Bibliotecas

BibliotecaVersãoDescriçãoAxios^1.5.0Cliente HTTP para requisiçõesPapa Parse^5.4.0Parser CSV para JavaScriptReact Native Safe Area Context^4.7.0Gerenciamento de área segura@env^1.0.0Gerenciamento de variáveis de ambiente

Backend e Infraestrutura

ServiçoDescriçãoGoogle SheetsPlanilha online funcionando como banco de dadosGoogle Drive APIAPI para acesso público aos dados da planilhaCSV ExportEndpoint público para exportação de dados

📁 Estrutura do Projeto

Plain Text


mural-comunitario/
├── src/
│   ├── components/           # Componentes reutilizáveis
│   │   ├── EventCard.js     # Card para exibição de eventos
│   │   └── LoadingIndicator.js # Indicador de carregamento
│   ├── screens/             # Telas do aplicativo
│   │   └── HomeScreen.js    # Tela principal
│   ├── utils/               # Utilitários e serviços
│   │   └── api.js          # Serviços de API
│   └── App.js              # Componente raiz
├── .env                    # Variáveis de ambiente
├── package.json           # Dependências e scripts
├── app.json              # Configurações do Expo
└── README.md            # Documentação do projeto


Descrição dos Diretórios

/src/components/

Contém componentes React reutilizáveis que podem ser utilizados em diferentes partes da aplicação:

•
EventCard.js: Componente responsável pela renderização individual de cada evento ou aviso no mural

•
LoadingIndicator.js: Componente de feedback visual durante carregamento de dados

/src/screens/

Contém as telas principais da aplicação:

•
HomeScreen.js: Tela principal que exibe a lista de eventos e implementa funcionalidades de busca e filtro

/src/utils/

Contém utilitários e serviços da aplicação:

•
api.js: Módulo responsável pela comunicação com o backend (Google Sheets)

🔧 Configuração e Instalação

Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

•
Node.js (versão 16 ou superior)

•
npm ou yarn (gerenciador de pacotes)

•
Expo CLI (para desenvolvimento e teste)

•
Android Studio ou Xcode (para emuladores)

Instalação

1. Clone o Repositório

Bash


git clone https://github.com/seu-usuario/mural-comunitario.git
cd mural-comunitario


2. Instale as Dependências

Bash


npm install
# ou
yarn install


3. Configure as Variáveis de Ambiente

Crie um arquivo .env na raiz do projeto:

Plain Text


EXPO_PUBLIC_GOOGLE_SHEET_CSV=https://docs.google.com/spreadsheets/d/e/SEU_ID_DA_PLANILHA/pub?output=csv


4. Execute o Projeto

Bash


npm start
# ou
expo start


Configuração do Google Sheets

1. Criar a Planilha

1.
Acesse Google Sheets

2.
Crie uma nova planilha

3.
Configure as colunas conforme a estrutura abaixo:

Coluna AColuna BColuna CColuna DColuna EColuna FColuna GColuna Hidtitulodescricaodatacategoriaautorcontatoativo

2. Publicar a Planilha

1.
Vá em Arquivo > Compartilhar > Publicar na web

2.
Selecione Toda a planilha

3.
Escolha formato CSV

4.
Clique em Publicar

5.
Copie a URL gerada

3. Configurar Permissões

1.
Clique em Compartilhar no canto superior direito

2.
Altere para Qualquer pessoa com o link pode visualizar

3.
Copie o link de compartilhamento

📊 Estrutura de Dados

Modelo de Dados da Planilha

A planilha Google Sheets deve seguir a seguinte estrutura:

CampoTipoDescriçãoExemploidNúmeroIdentificador único do evento1tituloTextoTítulo do evento ou aviso"MÚSICA AO VIVO"descricaoTextoDescrição detalhada"MÚSICA AO VIVO NA PRAÇA BEIRA RIO, CANTO JOSÉ NETO"dataDataData do evento (DD/MM/AAAA)"30/09/2025"categoriaTextoCategoria do evento"Evento"autorTextoResponsável pela publicação"Presidente do Bairro"contatoTextoInformação de contato"69 9900 0000"ativoTextoStatus de ativação (SIM/NÃO)"SIM"

Categorias Suportadas

O sistema suporta as seguintes categorias com cores específicas:

CategoriaCorDescriçãoEventoVerde (#4CAF50)Eventos comunitários, festivais, apresentaçõesUrgenteVermelho (#F44336)Avisos urgentes, emergênciasAvisoLaranja (#FF9800)Informações importantes, mudançasInformaçãoAzul (#2196F3)Informações gerais, comunicadosGeralCinza (#9E9E9E)Outros tipos de conteúdo

🎨 Interface do Usuário

Design System

O aplicativo utiliza um design system baseado em Material Design, implementado através da biblioteca React Native Paper. As principais características incluem:

Paleta de Cores

•
Primária: #2196F3 (Azul Material)

•
Fundo: #F8F9FA (Cinza claro)

•
Superfície: #FFFFFF (Branco)

•
Texto Principal: #333333 (Cinza escuro)

•
Texto Secundário: #666666 (Cinza médio)

Tipografia

•
Título Principal: 22px, Bold

•
Título de Card: 18px, Bold

•
Corpo de Texto: 14px, Regular

•
Texto Secundário: 12px, Regular

Espaçamentos

•
Margem Externa: 16px

•
Margem Interna: 12px

•
Espaçamento entre Cards: 8px

•
Border Radius: 12px para containers, 16px para cards

Componentes de Interface

1. Header (Cabeçalho)

•
Título da aplicação centralizado

•
Botão de refresh integrado

•
Cor de fundo azul (#2196F3)

•
Sombra sutil para profundidade

2. Barra de Busca

•
Campo de texto com placeholder "Buscar eventos..."

•
Ícone de busca integrado

•
Container próprio com fundo branco

•
Bordas arredondadas e sombra

3. Filtros de Categoria

•
Chips horizontais para cada categoria

•
Estado selecionado destacado em azul

•
Scroll horizontal para múltiplas categorias

•
Botão "Limpar filtros" quando aplicados

4. Cards de Evento

•
Layout em card com bordas arredondadas

•
Header com título e chip de categoria

•
Descrição do evento

•
Informações organizadas com ícones

•
Contato clicável (telefone/email)

5. Estados de Feedback

•
Loading indicator durante carregamento

•
Mensagem de lista vazia

•
Snackbar para erros de conexão

•
Pull-to-refresh na lista

⚙️ Funcionalidades

Funcionalidades Principais

1. Visualização de Eventos

•
Lista todos os eventos ativos da planilha

•
Ordenação automática por data (mais recente primeiro)

•
Exibição de informações completas de cada evento

•
Formatação adequada de datas em português

2. Sistema de Busca

•
Busca em tempo real por título, descrição e autor

•
Filtro não case-sensitive

•
Destaque visual dos termos encontrados

•
Limpeza rápida da busca

3. Filtros por Categoria

•
Filtro por categoria específica

•
Chips visuais para seleção

•
Combinação com busca textual

•
Contador de resultados filtrados

4. Atualização de Dados

•
Pull-to-refresh na lista principal

•
Botão de refresh no header

•
Indicador de última atualização

•
Feedback visual durante carregamento

5. Interação com Contatos

•
Detecção automática de telefone/email

•
Abertura do discador para telefones

•
Abertura do cliente de email

•
Fallback para exibição em modal

Funcionalidades Técnicas

1. Gerenciamento de Estado

•
Estado local com React Hooks

•
Sincronização entre busca e filtros

•
Persistência de filtros durante sessão

•
Otimização de re-renderizações

2. Tratamento de Erros

•
Captura de erros de rede

•
Mensagens amigáveis ao usuário

•
Retry automático em falhas

•
Fallback para dados em cache

3. Performance

•
Lazy loading de componentes

•
Otimização de listas com FlatList

•
Debounce em campos de busca

•
Memoização de componentes pesados

🔒 Segurança e Privacidade

Considerações de Segurança

1. Dados Públicos

•
Todos os dados são públicos por design

•
Não há informações sensíveis armazenadas

•
Acesso somente leitura aos dados

•
Sem autenticação necessária

2. Comunicação

•
Todas as requisições via HTTPS

•
Validação de dados recebidos

•
Sanitização de inputs do usuário

•
Proteção contra XSS

3. Privacidade

•
Não coleta dados pessoais dos usuários

•
Sem tracking ou analytics invasivos

•
Dados de contato fornecidos voluntariamente

•
Conformidade com LGPD

Boas Práticas Implementadas

1. Validação de Dados

JavaScript


// Validação de formato de data
const isValidDate = (dateString) => {
  const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
  return dateRegex.test(dateString);
};

// Validação de status ativo
const isActive = (status) => {
  return status && status.toLowerCase() === 'sim';
};


2. Sanitização de Inputs

JavaScript


// Limpeza de dados recebidos
const sanitizeData = (data) => ({
  title: data.titulo || 'Sem título',
  description: data.descricao || 'Sem descrição',
  author: data.autor || 'Anônimo',
  contact: data.contato || '',
});


🧪 Testes e Qualidade

Estratégia de Testes

1. Testes Unitários

•
Testes de componentes individuais

•
Validação de funções utilitárias

•
Mocking de APIs externas

•
Cobertura de casos extremos

2. Testes de Integração

•
Fluxo completo de carregamento de dados

•
Interação entre componentes

•
Navegação entre telas

•
Funcionalidades de busca e filtro

3. Testes de Interface

•
Renderização correta de componentes

•
Responsividade em diferentes tamanhos

•
Acessibilidade para usuários com deficiência

•
Compatibilidade entre plataformas

Ferramentas de Qualidade

1. Linting e Formatação

JSON


{
  "scripts": {
    "lint": "eslint src/",
    "format": "prettier --write src/",
    "test": "jest"
  }
}


2. Análise de Código

•
ESLint para padrões de código

•
Prettier para formatação consistente

•
Husky para hooks de commit

•
SonarQube para análise de qualidade

📈 Performance e Otimização

Métricas de Performance

1. Tempo de Carregamento

•
Carregamento inicial: < 3 segundos

•
Atualização de dados: < 2 segundos

•
Renderização de lista: < 1 segundo

•
Resposta a filtros: < 500ms

2. Uso de Memória

•
Footprint inicial: < 50MB

•
Crescimento por evento: < 1KB

•
Garbage collection otimizado

•
Prevenção de memory leaks

Otimizações Implementadas

1. Renderização de Listas

JavaScript


// Uso de FlatList para performance
<FlatList
  data={filteredEvents}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => <EventCard event={item} />}
  removeClippedSubviews={true}
  maxToRenderPerBatch={10}
  windowSize={10}
/>


2. Memoização de Componentes

JavaScript


// Memoização para evitar re-renders desnecessários
const EventCard = React.memo(({ event }) => {
  // Componente otimizado
});


3. Debounce em Buscas

JavaScript


// Debounce para otimizar buscas
const debouncedSearch = useCallback(
  debounce((query) => setSearchQuery(query), 300),
  []
);


🚀 Deploy e Distribuição

Opções de Deploy

1. Expo Application Services (EAS)

Bash


# Configuração do EAS
npm install -g @expo/cli
eas build --platform all
eas submit --platform all


2. Build Local

Bash


# Android
expo build:android
# iOS
expo build:ios


3. Web Deploy

Bash


# Build para web
expo build:web
# Deploy para Netlify/Vercel
npm run deploy


Configurações de Produção

1. Variáveis de Ambiente

Plain Text


# Produção
EXPO_PUBLIC_GOOGLE_SHEET_CSV=https://docs.google.com/spreadsheets/d/e/PRODUCTION_ID/pub?output=csv
EXPO_PUBLIC_API_TIMEOUT=10000
EXPO_PUBLIC_CACHE_DURATION=300000


2. Otimizações de Build

JSON


{
  "expo": {
    "optimization": {
      "minify": true,
      "treeshake": true
    },
    "assetBundlePatterns": [
      "**/*"
    ]
  }
}


🔮 Roadmap e Melhorias Futuras

Versão 2.0 - Funcionalidades Avançadas

1. Sistema de Notificações

•
Push notifications para novos eventos

•
Lembretes personalizáveis

•
Notificações por categoria

•
Integração com calendário do dispositivo

2. Modo Offline

•
Cache local de eventos

•
Sincronização automática

•
Indicador de status de conexão

•
Funcionalidade básica sem internet

3. Personalização

•
Temas customizáveis (claro/escuro)

•
Configurações de notificação

•
Filtros salvos

•
Layout personalizável

Versão 3.0 - Recursos Comunitários

1. Interação Social

•
Sistema de comentários

•
Avaliações de eventos

•
Compartilhamento social

•
Grupos de interesse

2. Geolocalização

•
Mapa de eventos

•
Filtro por proximidade

•
Direções para eventos

•
Check-in em eventos

3. Administração

•
Painel administrativo web

•
Moderação de conteúdo

•
Analytics de engajamento

•
Relatórios de uso

📞 Suporte e Contribuição

Como Contribuir

1. Reportar Bugs

•
Use o sistema de issues do GitHub

•
Forneça informações detalhadas

•
Inclua screenshots quando relevante

•
Especifique versão e dispositivo

2. Sugerir Melhorias

•
Abra uma issue com label "enhancement"

•
Descreva o problema que resolve

•
Proponha uma solução detalhada

•
Considere impacto em outros usuários

3. Contribuir com Código

Bash


# Fork do repositório
git clone https://github.com/seu-usuario/mural-comunitario.git
# Crie uma branch para sua feature
git checkout -b feature/nova-funcionalidade
# Faça suas alterações e commit
git commit -m "Adiciona nova funcionalidade"
# Push para sua branch
git push origin feature/nova-funcionalidade
# Abra um Pull Request


Diretrizes de Contribuição

1. Padrões de Código

•
Siga as convenções do ESLint

•
Use nomes descritivos para variáveis

•
Comente código complexo

•
Mantenha funções pequenas e focadas

2. Testes

•
Adicione testes para novas funcionalidades

•
Mantenha cobertura acima de 80%

•
Teste em múltiplos dispositivos

•
Valide acessibilidade

3. Documentação

•
Atualize README quando necessário

•
Documente APIs e componentes

•
Inclua exemplos de uso

•
Mantenha changelog atualizado

📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.

Termos da Licença MIT

Plain Text


MIT License

Copyright (c) 2024 Mural Comunitário

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


🙏 Agradecimentos

Tecnologias e Bibliotecas

•
React Native Team - Framework principal

•
Expo Team - Plataforma de desenvolvimento

•
Google - Google Sheets API

•
Material Design - Sistema de design

•
Open Source Community - Bibliotecas utilizadas

Inspirações

•
Aplicativos de comunicação comunitária

•
Plataformas de eventos locais

•
Sistemas de gestão comunitária

•
Feedback da comunidade acadêmica





Desenvolvido com ❤️ para comunidades

Este projeto foi desenvolvido como trabalho acadêmico, demonstrando a aplicação prática de tecnologias modernas para solução de problemas reais de comunicação comunitária.

