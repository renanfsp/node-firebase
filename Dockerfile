FROM rockylinux:9.3

RUN dnf update -y && dnf clean all && dnf module install nodejs:20 -y

WORKDIR /app

COPY  package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "node", "--env-file=.env", "build/Release/index.js" ]
