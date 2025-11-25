FROM node:18-alpine

# diretório de trabalho no container
WORKDIR /app

# copia package.json
COPY package*.json ./

# instala dependências
RUN npm install

# copia o restante dos arquivos
COPY . .

# build da aplicação
RUN npm run build

# expõe a porta
EXPOSE 3011

# comando de inicialização
CMD ["npm", "run", "start:prod"]
