# 📚 Library System - Backend

Este é o backend de um sistema simples de gerenciamento de biblioteca desenvolvido com **Node.js** e **Express.js**. Os dados são armazenados em memória (sem uso de banco de dados), ideal para fins educacionais ou projetos iniciais.

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv) – Armazenamento de variáveis sensíveis
- [uuid](https://www.npmjs.com/package/uuid) – Geração de identificadores únicos
- [bcrypt](https://www.npmjs.com/package/bcrypt) – Criptografia de senhas

## 📁 Estrutura do Projeto

     📁 src/
       ├── controllers/      # Lógica de negócio
           ├── authController.js
           ├── booksController.js
           ├── loansController.js
        ├── errors
           ├── HttpError.js
       ├── middleware/       # Middlewares customizados
           ├── authMiddleware.js
           ├── errorMiddleware.js
       ├── routes/           # Definição de rotas
           ├── auth.js
           ├── api.js
       ├── models            # Modelos de dados
           ├── booksModel.js
           ├── loansModel.js
           ├── userModel.js
       └── server.js         # Ponto de entrada da aplicação

## ⚙️ Como Executar

1. **Clone o repositório**

   ```bash
    git clone https://github.com/JorgeCasalini/Library-system.git
    cd Library-system

2. **Instale as dependências**

    ```bash
    npm install

3. **Configure as variáveis de ambiente**

    ```bash
    PORT=3000
    JWT_KEY = ...

4. **Inicie a aplicação**

    ```bash
    npm start

O servidor estará rodando em http://localhost:3000

## 🔐 Segurança

- As senhas dos usuários são armazenadas utilizando **hashes com `bcrypt`**.
- Dados sensíveis (como a porta do servidor) são carregados através do arquivo `.env` com **`dotenv`**.
- Cada entidade possui um **ID único gerado com `uuid`**, garantindo unicidade sem depender de banco de dados.

## 📌 Funcionalidades

- 📚 CRUD de livros  
- 👤 CRUD de usuários (com senha criptografada)  
- 🔄 Registro de empréstimos e devoluções  
- 🔎 Filtros e busca em memória  

## 🛠️ Funcionalidades Planejadas

- Persistência em banco de dados (MongoDB ou PostgreSQL)
- Implementação de autenticação com JWT
- Validação de dados (ex: com Joi)
- Testes automatizados com Jest
- Documentação com Swagger

## 📄 Licença

Este projeto está sob a licença **MIT**.


