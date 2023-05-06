
# REST API Adapter for GraphQL Pokemon API 

Hey there! You found my project! This project aims to demonstrate my skillset on building REST API. 

This project utilizes a [GraphQL Pokemon API](https://graphql-pokemon2.vercel.app/) to retrieve pokemon information. 

## 📋 What I Used
- [Express.js](https://expressjs.com/) - Express
- [Yarn](https://yarnpkg.com/) - Yarn
- [TypeScript](https://www.typescriptlang.org/) - TypeScript
- [node-postgres](https://yarnpkg.com/package/pg) - Postgres Client
- [Vercel](https://vercel.com/) - Postgres Database
  
## 🛠 How to Install
Assuming that you've already cloned or forked this, you can install this project by running:
```bash
# If you are using yarn
yarn install
# or
npm install
```

Create an .env file and make sure to enter your POSTGRES connection details with the following environment variables:
- POSTGRES_URL
- POSTGRES_PRISMA_URL
- POSTGRES_URL_NON_POOLING
- POSTGRES_USER
- POSTGRES_HOST
- POSTGRES_PASSWORD
- POSTGRES_DATABASE
- POSTGRES_PORT

Run the project to your machine (localhost:3000)
```bash
yarn dev
# or
npm run dev
```
## Available endpoints
  - `/api-docs` - swagger documentation
  - `/v1/pokemon`
    - available query parameters:
      - page
      - limit
  - `/v1/pokemon:id`