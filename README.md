## jspm setup

Um Hello World básico para começar com ES6 com um empurrão do [jspm](https://www.npmjs.com/package/jspm)

Referência - [jspm getting started(inglês)](https://github.com/jspm/jspm-cli/blob/master/docs/getting-started.md)

```sh
git clone git@github.com:felquis/jspm-setup.git
cd jspm-setup

# Instale jspm CLI global
npm install --global jspm

# Instale as dependências
npm install && jspm install

# Gera arquivo de build
npm run bundle

# Inicia server
npm start
```

* `src/` pasta com arquivos principais

Você deve executar `npm run bundle` a cada alteração que fizer no arquivo `lib/main.js` ou demais arquivos dentro da pasta `src/lib`

Ao rodar `npm start` o Hello World abre no navegador padrão do computador

Se tiver dúvidas abra uma issue
