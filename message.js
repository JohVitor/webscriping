const message = (webScraping, infoPag) => {
  let messages =
    `<p>Página ${infoPag}</p>` +
    '<table style="border: 1px solid #333;">' +
    "<thead>" +
    "<th> Produto </th>" +
    "<th> Preco </th>" +
    "</thead>";

  for (const { produto, preco } of webScraping) {
    messages +=
      "<tr>" +
      "<td>" +
      produto +
      "</td>" +
      "<td>" +
      preco +
      "</td>" +
      "</tr>" +
      "<tr>" +
      "<td>----------------------</td>" +
      "<td>----------------------</td>" +
      "</tr>";
  }
  messages += "</table>";

  return messages
};

module.exports = message;
