(async () => {
  const webScraping = require("./webScraping");
  const mensage = require("./message");
  const email = require("./email");

  const diretoriosImg = require("./diretoriosImg");

  let messages = "<h1>Olá João,</h1> <p>Segue o relatório com os valores</p>";
  const vmzDisneyPag1 = await webScraping(
    "https://www.vmzviagens.com.br/ingressos/orlando/walt-disney-orlando?pagina=1",
    'pag-disney-1'
  );
  const vmzDisneyPag2 = await webScraping(
    "https://www.vmzviagens.com.br/ingressos/orlando/walt-disney-orlando?pagina=2",
    'pag-disney-2'
  );
  const vmzBG = await webScraping(
    "https://www.vmzviagens.com.br/ingressos/orlando/busch-gardens-tampa",
    "pag-bg"
  );
  const vmzUS = await webScraping(
    "https://www.vmzviagens.com.br/ingressos/orlando/universal-studios",
    "pag-us"
  );

  messages += mensage(vmzDisneyPag1, 'pag-disney-1');
  messages += mensage(vmzDisneyPag2, 'pag-disney-2');
  messages += mensage(vmzBG, "pag-bg-3");
  messages += mensage(vmzUS, "pag-us-4");

  email(messages, await diretoriosImg());

  return;
})();
