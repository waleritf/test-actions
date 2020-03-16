FROM node:latest

WORKDIR ./tst-node

COPY *.json ./

RUN npm install

COPY . .

CMD npm run staging-deploy
