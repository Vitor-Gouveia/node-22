# Node.js 22.0.0

A nova versão do [Node.js 22](https://nodejs.org/en/blog/announcements/v22-release-announce) lançou com algumas features bem interessantes, uma delas sendo muito positiva para a Minu.

**Melhoria entre compatibilidade entre [CJS e MJS](#suporte-a-require-de-arquivos-esm)**

## Suporte a require() de arquivos ESM

Essa funcionalidade visa melhorar a compatibilidade entre arquivos CJS e MJS.

### Como funciona?

Para a gente começar a usar arquivos ESM na estrutura da Minu é bem simples.

Primeiro vamos criar um arquivo `.mjs` assim como no [exemplo](./lib/squads.routes.mjs), dentro desse arquivo podemos usar de tudo do ESM **exceto top-level await**.

Depois basta fazer um `require()` desse módulo em um arquivo .cjs ou .js normal

> Vale ressaltar que o comportamento desse `require()` é similiar a outra sintaxe de importação de módulos ESM em CJS, o `await import()`, então o retorno dessa importação vai ser accesível a partir da propriedade `.default`, como no exemplo abaixo:

```js
// index.js

const squads = require("./lib/squads.routes.mjs") // ESM
const valueStreams = require("./lib/value-streams.routes") //CJS

app.use("/", squads.default)
// sem o '.default' não funciona porque você acaba carregando o módulo inteiro ao invés
// da propriedade exportada daquele arquivo

app.use("/", valueStreams)
```

Agora só basta executar com o node, mas antes precisamos utilizar a flag `--experimental-require-module`, caso contrário não vai funcionar.

```json
// package.json
{
  "scripts": {
    "start": "node --experimental-require-module index.js"
  }
}
```

E utilizando outra nova feature do node podemos executar esse script utilizando `node --run start`

Agora nossa aplicação estará rodando tanto com arquivos ESM quanto CJS

### Conclusão

Por mais que não seja uma solução definitiva no próprio blog dessa release o time do node.js menciona a intenção de deixar essa feature estável no futuro.

---

[blog da release do node 22](https://nodejs.org/en/blog/announcements/v22-release-announce)

[projeto de exemplo usando express](./index.js)