# Node and Firebase

Adicione as variaveis de ambiente ao arquivo *.env*

`cp .env.example .env`

## Como Rodar
### Localmente
Instale o [node.js](https://nodejs.org/pt/download/package-manager) na sua maquina
```
$ curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh &&\
    bash nodesource_setup.sh &&\
    apt install nodejs # Ubuntu and debian based distros...
$ dnf module install nodejs:20 # fedora and rhel based distros...
$ brew install node@20 npm # macOS with Homebrew
$ winget install OpenJS.NodeJS.LTS # Windows 10 1709 (build 16299) ou posterior 
```


Instale as dependencias

`npm install`

Realize a build da aplicação

`npm run build`

Execute a aplicação

`npm run start`


### Docker
Instale a imagem node do docker

`$ docker pull node:20-alpine`

Crie a imagem da aplicação

`$ docker build -t renanfsp/node-firebase .`

Execute o container com a aplicação

`$ docker run -p 3000:3000 renanfsp/node-firebase`
