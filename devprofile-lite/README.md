# DevProfile Lite

Uma aplicação React que implementa autenticação de usuários e visualização de perfil utilizando Firebase Authentication e Firestore.

## Sobre o Projeto

DevProfile Lite é uma aplicação web que permite aos usuários se cadastrarem, fazerem login e visualizarem informações básicas de perfil. Este projeto foi desenvolvido como parte do trabalho final da disciplina de Introdução ao React / Desenvolvimento Frontend.

## Funcionalidades

- Cadastro de usuários com email e senha
- Login de usuários existentes
- Visualização de perfil do usuário (nome completo, biografia curta e link para portfólio)
- Proteção de rotas (acesso à página de perfil apenas para usuários autenticados)
- Logout de usuários

## Tecnologias Utilizadas

- React 18
- React Router DOM (para navegação e proteção de rotas)
- Firebase Authentication (para autenticação de usuários)
- Firebase Firestore (para armazenamento de dados de perfil)
- CSS puro para estilização

## Como Executar Localmente

1. Clone este repositório:
```
git clone [URL_DO_REPOSITÓRIO]
```

2. Navegue até o diretório do projeto:
```
cd devprofile-lite
```

3. Instale as dependências:
```
npm install
```

4. Configure o Firebase:
   - Crie um projeto no [Firebase Console](https://console.firebase.google.com/)
   - Ative o Authentication com email/senha
   - Crie uma coleção `userProfiles` no Firestore
   - Obtenha as credenciais do seu projeto Firebase
   - Substitua as credenciais no arquivo `src/services/firebase.js`

5. Execute o projeto:
```
npm run dev
```

6. Acesse a aplicação em seu navegador:
```
http://localhost:5173
```

## Estrutura do Firestore

Para que a aplicação funcione corretamente, é necessário criar uma coleção `userProfiles` no Firestore com a seguinte estrutura:

- Coleção: `userProfiles`
- Documento: ID do documento deve ser o UID do usuário autenticado
- Campos do documento:
  ```json
  {
    "nomeCompleto": "Seu Nome Aqui",
    "bioCurta": "Uma breve descrição sobre você ou seus interesses.",
    "linkPortfolio": "http://seulink.com"
  }
  ```

## Estrutura do Projeto

- `/src/components`: Componentes reutilizáveis da aplicação
- `/src/contexts`: Contextos React para gerenciamento de estado global
- `/src/pages`: Páginas principais da aplicação
- `/src/services`: Serviços de integração com Firebase
- `/src/assets`: Recursos estáticos como imagens e ícones

## Deployment

Para fazer o deploy desta aplicação, você pode utilizar:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [Firebase Hosting](https://firebase.google.com/docs/hosting)

## Autor

Samantha

## Licença

Este projeto está sob a licença MIT.
