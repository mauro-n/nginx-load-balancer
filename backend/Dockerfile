FROM node:20-alpine

EXPOSE 3000

WORKDIR /app

COPY ./package.json /app

RUN npm install

COPY . .

CMD ["node", "index.js"]
