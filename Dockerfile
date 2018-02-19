FROM node:9.2.0-alpine as INT_BUILD_IMAGE

RUN mkdir -p /app
COPY package.json /app
COPY package-lock.json /app

WORKDIR /app

RUN npm install

COPY src/ /app/src/


FROM node:9.2.0-alpine
RUN mkdir -p /app
COPY --from=INT_BUILD_IMAGE /app/src /app
COPY package.json /app
COPY package-lock.json /app
ARG version
ENV VERSION=$version
WORKDIR /app
RUN npm install --only=production

CMD node bin/www
