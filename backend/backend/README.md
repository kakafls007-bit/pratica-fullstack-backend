# CRUD de Skins do Brawl Stars com Node.js

Projeto simples usando Node.js, Express e Mongoose, adaptado a partir do
projeto base de exemplo (que era um CRUD de usuários) para a entidade **Skin**.

## Estrutura

```text
src/
├── controllers/
│   └── skinController.js
├── models/
│   └── Skin.js
├── routes/
│   └── skinRoutes.js
├── seed.js
└── server.js
```

## Executar localmente

```bash
npm install
```

Crie um arquivo `.env` (use o `.env` deste projeto como modelo) com a sua
string de conexão do MongoDB Atlas:

```text
PORT=3000
MONGODB_URI=mongodb+srv://usuario:senha@cluster.mongodb.net/crud_skins_brawlstars
```

Depois:

```bash
npm run dev
```

Para popular o banco com skins de exemplo:

```bash
npm run seed
```

## Rotas

| Método | Rota        | Ação                |
|--------|-------------|---------------------|
| GET    | /skins      | Lista todas as skins |
| GET    | /skins/:id  | Busca uma skin       |
| POST   | /skins      | Cria uma skin        |
| PUT    | /skins/:id  | Atualiza uma skin    |
| DELETE | /skins/:id  | Exclui uma skin      |

## Exemplo de JSON

```json
{
  "nome": "Shark Leon",
  "brawler": "Leon",
  "raridade": "Épica",
  "preco": 149,
  "imagemUrl": "https://exemplo.com/shark-leon.png"
}
```

Valores aceitos para `raridade`: `Rara`, `Super Rara`, `Épica`, `Mítica`,
`Lendária`, `Cromada`.

## Deploy no Render

1. Suba este projeto para um repositório no GitHub.
2. No Render, crie um **Web Service** apontando para o repositório.
3. Build Command: `npm install` — Start Command: `npm start`.
4. Configure a variável de ambiente `MONGODB_URI` com a connection string do
   MongoDB Atlas (Environment → Add Environment Variable).
5. Depois do deploy, anote a URL pública (ex.: `https://seu-app.onrender.com`)
   — ela será usada no `API_URL` do frontend.
