FROM node:14.21.3

LABEL version="1.0"



WORKDIR /

COPY ["package.json", "package-lock.json", "./"]



RUN npm install --production

COPY . .

EXPOSE 3000

CMD ["npm", "start", "--host", "0.0.0.0"]