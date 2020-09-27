FROM node:12

EXPOSE 8080

WORKDIR /app

COPY package.json .
COPY server.js .

RUN npm install

ENTRYPOINT ["npm", "start"]