# Data Insights Platform

Uma plataforma completa de análise de dados que permite upload, visualização, processamento e geração automática de insights utilizando NestJS, Next.js, MongoDB e um serviço dedicado em Python para tarefas de análise, machine learning e IA.

Este projeto foi criado com:

- **Backend:** NestJS
- **Frontend:** Next.js 
- **Data/ML Worker:** Serviço Python (ETL, estatísticas, modelos de ML e IA)
- **Banco:** MongoDB

---

## 🚀 Visão Geral

A Data Insights Platform fornece uma experiência completa para exploração e análise de dados, permitindo que usuários:

- Enviem datasets
- Visualizem prévias e estatísticas
- Gerem análises automáticas
- Executem machine learning
- Obtenham explicações com IA
- Criem relatórios automatizados em PDF ou Excel
- Recebam alertas e insights contínuos

É um projeto full-stack orientado a dados que integra backend, frontend, serviços assíncronos e IA.

---

## 📂 Escopo do Projeto

### ✔ Backend (NestJS)

- **Upload de datasets**
  - CSV / JSON
  - Validação estruturada
  - Armazenamento de metadados

- **Gerenciamento de datasets**
  - Preview de dados
  - Estatísticas básicas
  - Histórico de processamento

- **Jobs assíncronos**
  - Processamento via Worker Python
  - Filas opcionais (Redis/BullMQ)

- **Módulo de Insights**
  - Sumário estatístico
  - Correlações
  - Anomalias
  - Requisições para modelos de IA

- **Serviços auxiliares**
  - Logs de processamento
  - Integração com S3/MinIO (opcional)
  - APIs públicas para integração externa

---

### 🐍 Python Worker (Análise, ML e IA)

Responsável pelo processamento pesado e automatizado:

#### 🔎 ETL / Data Processing
- Limpeza e normalização
- Conversão de tipos
- Tratamento de valores ausentes
- Detectores automáticos de inconsistência

#### 📊 Estatísticas e Insights
- Descritivos básicos
- Matriz de correlação
- Detecção de outliers (IQR / Isolation Forest)
- Séries temporais (se aplicável)

#### 🤖 IA / Machine Learning
- Regressão / Classificação
- Clusterização (KMeans)
- Anomalias (IsolationForest)
- Importância de features (SHAP)

#### 🧠 IA Generativa
- Explicação de gráficos
- Resumo automático de datasets
- Descrições de insights
- Geração de relatórios

#### 📝 Geração de Relatórios
- PDFs com gráficos
- Excel com análises
- Markdown para documentação

---

### 🎨 Frontend (Next.js)

Interface moderna e amigável para uso da plataforma:

#### 📌 Principais funcionalidades

- **Dashboard geral**
  - Status dos datasets
  - Últimos insights
  - Atividade dos jobs

- **Página de upload**
  - Upload de CSV/JSON
  - Validação visual
  - Preview rápido da tabela

- **Visualização de dataset**
  - Grid com dados
  - Estatísticas básicas
  - Análise de tipos
  - Gráficos dinâmicos

- **Página de insights**
  - Correlações
  - Distribuições
  - Anomalias detectadas
  - Recomendações da IA

- **Relatórios**
  - Download de PDFs
  - Download de Excel
  - Histórico de análises

- **Chat para exploração de dados**
  - Perguntas em linguagem natural
  - Explicações automáticas
  - Assistente inteligente para dados

---

## 📦 Estrutura Inicial dos Diretórios

root
│
├─ backend/ # NestJS API
├─ frontend/ # Next.js UI
└─ worker/ # Python ML/IA service


---

## 🛠 Tecnologias principais

- **NestJS**
- **Next.js**
- **MongoDB**
- **Python (pandas, numpy, scikit-learn, matplotlib, transformers, etc.)**
- **BullMQ / Redis (opcional)**
- **MinIO/S3 (opcional)**

---

## 🧪 Futuras Melhorias

- Sistema de autenticação (JWT ou OAuth)
- Versões de datasets
- Modelos de ML treináveis pelo usuário
- Agendador de tarefas (cron jobs)
- Conectores externos (Google Sheets, APIs, SQL)
- Deploy com Docker Compose ou Kubernetes

---

## 💡 Objetivo

Criar uma plataforma robusta, modular e extensível que una análise de dados, engenharia, backend, frontend e IA — simulando o fluxo real de uma solução empresarial moderna.

---

## 📜 Licença

MIT – fique à vontade para utilizar, modificar e expandir.


