const puppeteer = require("puppeteer");

const webScraping = async (url, numPag) => {
  const data = new Date();
  const dia = data.getDate().toString();
  const mes = data.getMonth().toString();
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  await page.setViewport({ width: 2000, height: 2000 });
  await page.screenshot({
    path: `./print-vmz-disney/pag-${numPag}-ingresso-2022${mes}${dia}.png`,
  });
  const pagina = await page.evaluate(() => {
    const nodeList = document.querySelectorAll(".card.card-ticket .card-body");
    const arrayNodeList = [...nodeList];

    const mapNodeList = arrayNodeList.map((itens) => ({
      produto: itens.children[1].innerText,
      preco: itens.children[2].innerText,
    }));

    return mapNodeList;
  });
  
  await browser.close();
  return pagina
}
module.exports = webScraping;
