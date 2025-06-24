FROM node:24-alpine

WORKDIR /app

COPY package.json ./

# RUN npm install

# Using cache mount for npm install, so unchanged packages aren’t downloaded every time
RUN --mount=type=cache,target=/root/.npm npm install

COPY server.js ./

# COPY . .
# COPY .env.example ./.env

EXPOSE 3000

CMD ["npm", "start"]
