FROM node:8.7.0-alpine

RUN mkdir -p /toolbox/server

WORKDIR /toolbox/server

COPY package.json /toolbox/server
COPY package-lock.json /toolbox/server

RUN npm install

COPY . /toolbox/server

CMD ["npm", "start"]