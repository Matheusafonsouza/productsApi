FROM node:alpine
RUN mkdir /app
WORKDIR /app
COPY package.json yarn.lock ./

RUN yarn install

COPY . /app

EXPOSE 3333

CMD ["yarn","dev"]
