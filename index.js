(async () => {
  const webScraping = require("./webScraping");
  const mensage = require("./message");
  const email = require("./email");

  const diretoriosImg = require("./diretoriosImg");

  let messages = "<h1>Olá João,</h1> <p>Segue o relatório com os valores</p>";

  const listUrl = [
    {
      url: "https://www.vmzviagens.com.br/ingressos/orlando/walt-disney-orlando?pagina=1",
      infoPag: "pag-disney-1",
    },
    {
      url: "https://www.vmzviagens.com.br/ingressos/orlando/walt-disney-orlando?pagina=2",
      infoPag: "pag-disney-2",
    },
    {
      url: "https://www.vmzviagens.com.br/ingressos/orlando/busch-gardens-tampa",
      infoPag: "pag-bg",
    },
    {
      url: "https://www.vmzviagens.com.br/ingressos/orlando/universal-studios",
      infoPag: "pag-us",
    },
  ];

  for (const itemList of listUrl) {
    let itens = webScraping(itemList.url, itemList.infoPag);
    messages += mensage(await itens, itemList.infoPag);
  }
  email(messages, await diretoriosImg());

  return;
})();
