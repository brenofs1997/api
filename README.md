# WAITERAPP - O PODER DO JAVASCRIPT (Api)

<br>

# Sobre o projeto
Essa aplicação tem como finalidade auxiliar restaurantes a controlar seus pedidos, permitindo através de um app, realizar os pedidos e automaticamente serem enviados para um dashboard web ( tudo isso em tempo real)


# Tecnologias utilizadas
- nodejs
- express
- mongodb
- docker
- multer
- socket.io

# Inicialização

## Api
entre na pasta `api` presente no diretório raiz, e rode o comando para instalar as dependências:
```bash
npm i
```
Para criar o container no Docker, rode o comando:
```bash
docker run --name mongo -p 5432:5432 -d mongo
```
Por fim para iniciar o servidor, rode o comando:
```bash
npm run dev
```

