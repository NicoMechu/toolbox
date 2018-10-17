FROM node:8.7.0-alpine

RUN mkdir -p /toolbox/frontend

WORKDIR /toolbox/frontend

COPY package.json /toolbox/frontend
COPY package-lock.json /toolbox/frontend

RUN npm install

COPY . /toolbox/frontend

CMD ["npm", "start"]