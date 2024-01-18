FROM node:21-alpine

WORKDIR /app

COPY package.json ./
RUN npm install
COPY server.js ./

# COPY . .
# COPY .env.example ./.env

EXPOSE 3000

CMD ["npm", "start"]
