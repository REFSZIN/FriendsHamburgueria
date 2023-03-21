FROM node:16.15
WORKDIR /usr/src/friends
COPY ./package*.json ./
COPY ./.husky ./
RUN npm install
COPY . .