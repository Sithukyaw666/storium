FROM alpine
RUN apk add --update nodejs nodejs-npm
COPY . /app
WORKDIR /app
RUN npm install -y
EXPOSE 5000
ENTRYPOINT ["npm","start"]