FROM rockylinux:9.3

RUN yum -y update && yum clean all

WORKDIR /app

COPY  package*.json ./

RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
RUN source ~/.bashrc && nvm install 20 && nvm use 20 && npm install && npm run build

COPY . .

ENV HELLO="world"

CMD [ "node", "build/Release/index.js" ]
