
FROM node:14.18.2-alpine AS development

WORKDIR /usr/src/app

COPY  package*.json ./

RUN npm install glob rimraf

RUN npm install

COPY . .

RUN npm run build

FROM node:14.18.2-alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

ARG MONGO_URI=mongodb+srv://mongo-user:9COt3I2uHypbTdo5@issueinvoice.ukmfw1w.mongodb.net/?retryWrites=true&w=majority
ENV MONGO_URI=${MONGO_URI}

WORKDIR /usr/src/app

COPY  package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]